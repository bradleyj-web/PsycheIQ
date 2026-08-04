# Stripe setup — step by step

Everything is in **test mode** until the very last section. Test mode cannot
charge a real card. You cannot break anything with real money by following
this. Do the whole thing in test mode first.

**Two things are already done for you:**

- The Supabase CLI is installed and you are logged in.
- Your project (`PsycheIQ`, ref `ofaafruiapampldmrtdg`) is already linked.

So you can skip any guide that starts with "run supabase login".

**Open a terminal in the project folder before you start.** Every command
below assumes you are here:

```
cd C:\Users\plzdo\Downloads\psycheiq-repo
```

You will collect **5 values**. There is a checklist at the end. Keep a
notepad open and paste each one in as you get it.

| # | Value | Looks like |
|---|-------|-----------|
| 1 | Secret key | `sk_test_51Ab...` |
| 2 | Core price ID | `price_1Ab...` |
| 3 | Member price ID | `price_1Cd...` |
| 4 | Webhook signing secret | `whsec_Ab...` |
| 5 | Support email | `you@gmail.com` |

---

## Step 1 — Turn on Test mode

1. Go to <https://dashboard.stripe.com>.
2. Look at the **top right**. There is a toggle labelled **Test mode**.
3. Turn it **ON**.

**Check:** the dashboard should now show an orange/amber "Test mode" banner
or badge. If you don't see it, you are in live mode — go back and toggle it.

> Everything from here on happens in test mode. If you ever lose your place,
> check that toggle first. Test and live are completely separate worlds with
> separate keys, separate products, and separate webhooks.

---

## Step 2 — Get your secret key (value #1)

1. In the left sidebar, click **Developers**.
2. Click the **API keys** tab.
3. Find the row called **Secret key**.
4. Click **Reveal test key**.
5. Click the key to copy it.

It starts with `sk_test_`. Paste it into your notepad as value #1.

> If it starts with `sk_live_` you are not in test mode. Go back to Step 1.
> Never paste a secret key into a chat, an email, or a public repo.

---

## Step 3 — Create the one-time product (value #2)

This is the $3.99 "unlock one report" purchase.

1. Left sidebar → **Product catalogue** (older accounts call it **Products**).
2. Click **Add product** (or **Add test product**).
3. Fill in:
   - **Name:** `PsycheIQ — Single Report`
   - **Description:** `Full depth on one assessment, permanently.`
4. Under **Pricing**:
   - Choose **One-off** (not Recurring)
   - **Price:** `3.99`
   - **Currency:** `USD`
5. Click **Add product** / **Save**.
6. You are now on the product page. Scroll to the **Pricing** section.
7. Next to the $3.99 price there is an ID starting with `price_`. Copy it.

That is value #2. It must start with `price_`, **not** `prod_`.

> `prod_...` is the product. `price_...` is the price. You need the price.
> This is the single most common mistake in this whole guide.

---

## Step 4 — Create the membership product (value #3)

This is the $19.99/month subscription.

1. **Product catalogue** → **Add product** again.
2. Fill in:
   - **Name:** `PsycheIQ — Adept Membership`
   - **Description:** `All eight assessments, both profiles, the 22-week Journey, no ads.`
3. Under **Pricing**:
   - Choose **Recurring**
   - **Price:** `19.99`
   - **Currency:** `USD`
   - **Billing period:** `Monthly`
4. **Important — the free trial.** Look for **Free trial** / **Trial period**
   (it may be under "More options" or an "Advanced" toggle). Set it to
   **3 days**.
5. Click **Add product** / **Save**.
6. Copy the `price_...` ID from the Pricing section.

That is value #3.

> **Why step 4.4 matters.** Your app's button says "Start 3-day free trial".
> Stripe only actually gives a trial if the price is configured with one. If
> you skip it, the button lies and the customer is charged $19.99 immediately
> — which is a chargeback and a bad review waiting to happen. Either set the
> trial here, or change the button text before you launch.

---

## Step 5 — Deploy the functions

Do this **before** the webhook step, because the webhook needs a live URL to
point at.

Run these four commands one at a time:

```
npx supabase functions deploy create-checkout
npx supabase functions deploy checkout-status
npx supabase functions deploy support-ticket
npx supabase functions deploy stripe-webhook --no-verify-jwt
```

**Check:** each one should end with something like `Deployed Functions on
project ofaafruiapampldmrtdg`.

> The `--no-verify-jwt` on the last one is not optional. Stripe's servers
> cannot send a Supabase login token, so that function has to accept
> unauthenticated requests. It verifies Stripe's signature instead, which is
> what the signing secret in the next step is for.

---

## Step 6 — Create the webhook (value #4)

1. Left sidebar → **Developers** → **Webhooks**.
2. Click **Add endpoint** / **Add destination**.
3. **Endpoint URL** — paste exactly this:

```
https://ofaafruiapampldmrtdg.supabase.co/functions/v1/stripe-webhook
```

4. Click **Select events** and tick exactly these three:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. Click **Add endpoint**.
6. On the endpoint's page, find **Signing secret** and click
   **Click to reveal**. Copy it.

That is value #4. It starts with `whsec_`.

> This secret is **per endpoint and per mode**. When you go live later you
> create a second endpoint in live mode, and it will have a different signing
> secret. Swapping the key without swapping this is a classic silent failure:
> checkouts appear to work, but nothing ever unlocks.

---

## Step 7 — Put the five values in a file

1. In the project folder, find `secrets.env.example`.
2. Make a copy of it and name the copy **`secrets.env`** (no `.example`).
3. Open `secrets.env` in Notepad.
4. Replace each `REPLACE_ME` with your real value.

It should end up looking like this (with your own values):

```
STRIPE_SECRET_KEY=sk_test_51AbCdEf...
STRIPE_CORE_PRICE_ID=price_1AbCdEf...
STRIPE_MEMBER_PRICE_ID=price_1GhIjKl...
STRIPE_WEBHOOK_SECRET=whsec_AbCdEf...
SUPPORT_EMAIL=you@gmail.com
```

Rules:

- No quotes, no spaces around the `=`.
- One value per line.
- Lines starting with `#` are comments and are ignored.

> `secrets.env` is already in `.gitignore`, so it will never be committed or
> pushed. That is deliberate. Do not remove that line, and do not rename the
> file to something else.

---

## Step 8 — Push the secrets

One command:

```
node helpers/deploy-secrets.mjs
```

**What you should see:**

```
Pushing 5 secrets in TEST mode.
Finished supabase secrets set.

Done. Next:
  1. npx supabase functions deploy create-checkout
  ...
```

The script checks your values *before* sending them. If something is wrong
it stops and tells you which one — it will not push a half-broken config.

**If it says "Still placeholder values"** — you missed a `REPLACE_ME`.

**If it says "STRIPE_CORE_PRICE_ID does not start with price_"** — you copied
a `prod_` ID. Go back to Step 3.7.

**If it says "both price IDs are the same"** — you pasted the same price
twice. One is one-off, one is recurring.

---

## Step 9 — Test it with a fake card

1. Open <https://psycheiq.live> (or your local copy).
2. Take any assessment so you have a result.
3. Click any unlock or upgrade button.
4. You should be sent to a Stripe Checkout page.
5. Pay with the test card:

   - **Card number:** `4242 4242 4242 4242`
   - **Expiry:** any future date, e.g. `12/34`
   - **CVC:** any 3 digits, e.g. `123`
   - **Postcode:** any, e.g. `12345`

6. Complete the payment.

**What should happen:** you land back on PsycheIQ, see a brief
"Confirming your payment…" message, and then the content unlocks.

**Then verify it actually stored:**

1. Go to <https://supabase.com/dashboard> → your project → **Table editor**.
2. Open the **entitlements** table.
3. There should be a new row with `active = true`.

If that row exists, the whole loop works: checkout → Stripe → webhook →
Supabase → app.

---

## Step 10 — Going live (only when everything above works)

Do **not** do this until Step 9 passed.

1. Turn **Test mode OFF** in the Stripe dashboard.
2. Repeat **Steps 3 and 4** to create the same two products in live mode.
   Test products do not carry over.
3. Repeat **Step 2** to get your `sk_live_...` key.
4. Repeat **Step 6** to create a live webhook endpoint and get its
   *live* signing secret.
5. Update all four values in `secrets.env`.
6. Run `node helpers/deploy-secrets.mjs` again.

The script will print `Pushing 5 secrets in LIVE mode.` and warn you that
real cards will be charged. **No code changes are needed** — the app reads
whatever keys are configured.

Then buy something yourself with a real card, confirm it works, and refund
it from the Stripe dashboard.

---

## Checklist

- [ ] Test mode is ON
- [ ] `sk_test_...` copied
- [ ] $3.99 one-off product created, `price_...` copied
- [ ] $19.99/month product created **with a 3-day trial**, `price_...` copied
- [ ] All four functions deployed
- [ ] Webhook endpoint added with the three events
- [ ] `whsec_...` copied
- [ ] `secrets.env` created and filled in
- [ ] `node helpers/deploy-secrets.mjs` ran clean
- [ ] Test card 4242 went through end to end
- [ ] A row appeared in the `entitlements` table

---

## If something goes wrong

**"Checkout could not start"** — the secrets did not push, or a price ID is
wrong. Re-run Step 8 and read what it says.

**Checkout opens but nothing unlocks afterwards** — this is almost always the
webhook. Go to **Developers → Webhooks**, click your endpoint, and look at
the recent deliveries. A `400` there usually means the signing secret in
`secrets.env` does not match the one on that endpoint.

**"Missing Stripe price configuration"** — one of the two price IDs is empty
or misspelled in `secrets.env`.

**Nothing happens when you click an unlock button** — that is the front end,
not Stripe. Open the browser console (F12) and look for red errors.

**You want to start over** — delete `secrets.env`, redo Step 7, re-run
Step 8. Nothing is permanent and test mode data is disposable.
