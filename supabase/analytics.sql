-- Funnel analytics. Run once in the Supabase SQL Editor.
--
-- Design: anonymous visitors may INSERT events and do nothing else.
-- No select/update/delete policies exist for the anon role, so the anon
-- key in the browser cannot read anyone's events back — writes go in,
-- and you read them from the dashboard (service role bypasses RLS).

create table if not exists public.pq_events (
  id bigint generated always as identity primary key,
  session_id text not null,          -- random per browser session, not an identity
  user_id uuid,                       -- set only when signed in
  event text not null,
  props jsonb not null default '{}'::jsonb,
  path text,
  referrer text,
  created_at timestamptz not null default now()
);

create index if not exists pq_events_event_created_idx on public.pq_events(event, created_at desc);
create index if not exists pq_events_session_idx on public.pq_events(session_id, created_at);

alter table public.pq_events enable row level security;

drop policy if exists "Anyone can record events" on public.pq_events;
create policy "Anyone can record events"
on public.pq_events for insert
to anon, authenticated
with check (
  char_length(session_id) <= 64
  and char_length(event) <= 64
  and pg_column_size(props) <= 2048
);

-- The daily funnel, ready to read in the SQL editor:
--   select * from public.pq_funnel_daily order by day desc;
create or replace view public.pq_funnel_daily as
select
  date_trunc('day', created_at)::date as day,
  count(distinct session_id) filter (where event = 'visit')               as visitors,
  count(distinct session_id) filter (where event = 'assessment_start')    as started_assessment,
  count(distinct session_id) filter (where event = 'assessment_complete') as completed_assessment,
  count(distinct session_id) filter (where event = 'funnel_shown')        as saw_milestone,
  count(distinct session_id) filter (where event = 'checkout_start')      as started_checkout,
  count(distinct session_id) filter (where event = 'checkout_success')    as paid
from public.pq_events
group by 1;
