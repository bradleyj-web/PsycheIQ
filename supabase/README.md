# PsycheIQ Supabase Setup

This folder prepares PsycheIQ for real accounts, saved results, support tickets, and Stripe-backed access.

## 1. Create the Supabase project

1. Go to https://supabase.com/dashboard.
2. Create a new project.
3. Open `SQL Editor`.
4. Run `supabase/schema.sql`.

## 2. Add public website config

Open `supabase-config.js` and fill in the public values from Supabase:

```js
window.PSYCHEIQ_SUPABASE = {
  url: "https://YOUR-PROJECT.supabase.co",
  anonKey: "YOUR-PUBLIC-ANON-KEY",
  functionsUrl: "https://YOUR-PROJECT.supabase.co/functions/v1",
};
```

Only use the public anon key in this file. Never put the service role key in the browser.

## 3. Add Supabase secrets

In the Supabase dashboard, add these Edge Function secrets:

```text
STRIPE_SECRET_KEY=sk_live_...
STRIPE_CORE_PRICE_ID=price_1Tqg3ULnZlACNGqD0in2hzYk
STRIPE_MEMBER_PRICE_ID=price_1Tqg3dLnZlACNGqDMPtPja5L
STRIPE_WEBHOOK_SECRET=whsec_...
SUPPORT_EMAIL=brad.s.johnson666@gmail.com
SUPPORT_FROM_EMAIL=support@yourdomain.com
RESEND_API_KEY=re_...
```

`SUPPORT_FROM_EMAIL` and `RESEND_API_KEY` are only needed if you want support tickets emailed automatically. Without them, tickets are still saved in Supabase.

## 4. Deploy functions

From this project folder, after installing the Supabase CLI:

```powershell
supabase login
supabase link --project-ref YOUR-PROJECT-REF
supabase functions deploy create-checkout
supabase functions deploy checkout-status
supabase functions deploy support-ticket
supabase functions deploy stripe-webhook --no-verify-jwt
```

The webhook function must use `--no-verify-jwt` because Stripe cannot send a Supabase user token.

## 5. Connect Stripe webhook

In Stripe, add an endpoint:

```text
https://YOUR-PROJECT.supabase.co/functions/v1/stripe-webhook
```

Send these events:

```text
checkout.session.completed
customer.subscription.updated
customer.subscription.deleted
```

Copy the endpoint signing secret into `STRIPE_WEBHOOK_SECRET`.

## What changes after this is live

- Sign up/sign in uses Supabase Auth.
- Result saves go to Supabase when the user is signed in.
- Website checkout uses secure Stripe Checkout Sessions from Supabase.
- Returning from checkout verifies the Stripe session before unlocking.
- Active memberships are stored as entitlements.
- Support tickets are stored in Supabase and can be emailed if Resend is configured.
