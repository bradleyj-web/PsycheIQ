create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  name text not null,
  age integer check (age between 13 and 120),
  sex text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  email text,
  access_type text not null check (access_type in ('core', 'member')),
  test_id text,
  stripe_customer_id text,
  stripe_checkout_session_id text unique,
  stripe_subscription_id text,
  amount_total integer,
  currency text,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  email text,
  stripe_customer_id text,
  stripe_subscription_id text unique not null,
  status text not null,
  current_period_start timestamptz,
  current_period_end timestamptz,
  cancel_at_period_end boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.entitlements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  email text,
  access_type text not null check (access_type in ('core', 'member')),
  test_id text,
  source text not null default 'stripe',
  active boolean not null default true,
  current_period_end timestamptz,
  stripe_checkout_session_id text unique,
  stripe_subscription_id text unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.assessment_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  email text not null,
  test_id text not null,
  test_title text not null,
  result_title text not null,
  score text,
  summary text,
  mode text check (mode in ('core', 'member')),
  result_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.support_tickets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  email text not null,
  page text,
  active_test text,
  current_result text,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists purchases_user_created_idx on public.purchases(user_id, created_at desc);
create index if not exists purchases_email_idx on public.purchases(lower(email));
create index if not exists subscriptions_user_idx on public.subscriptions(user_id);
create index if not exists subscriptions_email_idx on public.subscriptions(lower(email));
create index if not exists entitlements_user_active_idx on public.entitlements(user_id, active);
create index if not exists entitlements_email_idx on public.entitlements(lower(email));
create index if not exists assessment_results_user_created_idx on public.assessment_results(user_id, created_at desc);
create index if not exists support_tickets_created_idx on public.support_tickets(created_at desc);

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at
before update on public.profiles
for each row execute function public.touch_updated_at();

drop trigger if exists purchases_touch_updated_at on public.purchases;
create trigger purchases_touch_updated_at
before update on public.purchases
for each row execute function public.touch_updated_at();

drop trigger if exists subscriptions_touch_updated_at on public.subscriptions;
create trigger subscriptions_touch_updated_at
before update on public.subscriptions
for each row execute function public.touch_updated_at();

drop trigger if exists entitlements_touch_updated_at on public.entitlements;
create trigger entitlements_touch_updated_at
before update on public.entitlements
for each row execute function public.touch_updated_at();

drop trigger if exists support_tickets_touch_updated_at on public.support_tickets;
create trigger support_tickets_touch_updated_at
before update on public.support_tickets
for each row execute function public.touch_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, name, age, sex)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    nullif(new.raw_user_meta_data->>'age', '')::integer,
    coalesce(new.raw_user_meta_data->>'sex', 'Prefer not to say')
  )
  on conflict (id) do update set
    email = excluded.email,
    name = excluded.name,
    age = excluded.age,
    sex = excluded.sex;

  update public.purchases
    set user_id = new.id
    where user_id is null and lower(email) = lower(new.email);

  update public.subscriptions
    set user_id = new.id
    where user_id is null and lower(email) = lower(new.email);

  update public.entitlements
    set user_id = new.id
    where user_id is null and lower(email) = lower(new.email);

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.purchases enable row level security;
alter table public.subscriptions enable row level security;
alter table public.entitlements enable row level security;
alter table public.assessment_results enable row level security;
alter table public.support_tickets enable row level security;

drop policy if exists "Profiles are readable by owner" on public.profiles;
create policy "Profiles are readable by owner"
on public.profiles for select
using (auth.uid() = id);

drop policy if exists "Profiles are insertable by owner" on public.profiles;
create policy "Profiles are insertable by owner"
on public.profiles for insert
with check (auth.uid() = id);

drop policy if exists "Profiles are editable by owner" on public.profiles;
create policy "Profiles are editable by owner"
on public.profiles for update
using (auth.uid() = id)
with check (auth.uid() = id);

drop policy if exists "Purchases are readable by owner" on public.purchases;
create policy "Purchases are readable by owner"
on public.purchases for select
using (auth.uid() = user_id);

drop policy if exists "Subscriptions are readable by owner" on public.subscriptions;
create policy "Subscriptions are readable by owner"
on public.subscriptions for select
using (auth.uid() = user_id);

drop policy if exists "Entitlements are readable by owner" on public.entitlements;
create policy "Entitlements are readable by owner"
on public.entitlements for select
using (auth.uid() = user_id);

drop policy if exists "Assessment results are readable by owner" on public.assessment_results;
create policy "Assessment results are readable by owner"
on public.assessment_results for select
using (auth.uid() = user_id);

drop policy if exists "Assessment results are insertable by owner" on public.assessment_results;
create policy "Assessment results are insertable by owner"
on public.assessment_results for insert
with check (auth.uid() = user_id);

drop policy if exists "Support tickets are readable by owner" on public.support_tickets;
create policy "Support tickets are readable by owner"
on public.support_tickets for select
using (auth.uid() = user_id);
