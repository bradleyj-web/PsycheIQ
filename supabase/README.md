# PsycheIQ Supabase Setup

This folder prepares PsycheIQ for real accounts, saved results, support tickets, and Stripe-backed access.

## 0. Test mode first

Do the whole loop against Stripe **test** keys before switching anything to live. Nothing below changes between modes except which keys and price IDs you paste in.

1. In Stripe, flip the dashboard to **Test mode** (toggle, top right).
2. Create two test products: a **one-time $3.99** price and a **recurring $19.99/month** price. Copy both `price_…` IDs.
3. Set the Supabase secrets from step 3 below using `sk_test_…` and those test price IDs.
4. Deploy the functions (step 4) and add the webhook (step 5). Stripe issues a **separate signing secret per mode** — use the test one now.
5. Open the site, take any assessment, and click an unlock button. Pay with card `4242 4242 4242 4242`, any future expiry, any CVC.
6. You should land back on the site, see "Confirming your payment…", then the unlock. Check `entitlements` in the Supabase table editor — there should be a new active row.

To go live later: swap `STRIPE_SECRET_KEY` to `sk_live_…`, create the same two products in live mode, update both price IDs, add a live-mode webhook endpoint, and update `STRIPE_WEBHOOK_SECRET`. No code changes.

**Trial note.** The membership button is worded as a 3-day trial. Stripe only actually grants that if the recurring price has a trial period configured — set `trial_period_days: 3` on the price (or on `subscription_data` in `create-checkout`) before launch, or reword the button.

### What the front end does

`src/19-payments-supabase-stripe.js.html` handles all of it: magic-link sign-in, reading `entitlements` under RLS, launching Checkout, and verifying the session on return. If `supabase-config.js` or the supabase-js CDN bundle fails to load, it silently reverts to the offline prototype behaviour — so a bad deploy degrades instead of white-screening.

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
  anonKey: "YOUR-PUBLIC-ANON-OR-PUBLISHABLE-KEY",
  functionsUrl: "https://YOUR-PROJECT.supabase.co/functions/v1",
};
```

Only use the public anon or publishable key in this file. Never put the service role key in the browser.

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

In Stripe, first enable Managed Payments for the account. PsycheIQ's Stripe products should use an eligible digital-product tax code such as `txcd_10103100`.

Then add a webhook endpoint:

```text
https://ofaafruiapampldmrtdg.supabase.co/functions/v1/stripe-webhook
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
