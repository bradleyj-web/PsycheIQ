# PsycheIQ Supabase/Stripe deployment helper

This file lives outside the repo and is ignored by git.

## Quick steps

1. Copy the example file and fill in real values:
   ```powershell
   cd C:\Users\plzdo\Downloads\psycheiq-repo
   copy secrets.env.example secrets.env
   notepad secrets.env
   ```
2. Create the two Stripe TEST products and copy the price IDs:
   - Individual Test Unlock — $3.99 one-time  → STRIPE_CORE_PRICE_ID
   - PsycheIQ Membership    — $19.99/month   → STRIPE_MEMBER_PRICE_ID
3. Copy your Stripe test secret key (`sk_test_...`) → STRIPE_SECRET_KEY
4. Add the Stripe webhook endpoint in TEST mode:
   URL: https://ofaafruiapampldmrtdg.supabase.co/functions/v1/stripe-webhook
   Events: checkout.session.completed, customer.subscription.updated, customer.subscription.deleted
   Copy signing secret (`whsec_...`) → STRIPE_WEBHOOK_SECRET
5. Fill SUPPORT_EMAIL.
6. Deploy secrets to Supabase:
   ```powershell
   cd helpers
   node deploy-secrets.mjs
   ```
7. Do not commit secrets.env.

## What this helper does

`helpers/deploy-secrets.mjs` reads `secrets.env` and runs `supabase secrets set ...` for each key so you don't have to paste them into the dashboard manually. The values never leave your local machine or this chat.
