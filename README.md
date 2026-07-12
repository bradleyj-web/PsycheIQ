# PsycheIQ

PsycheIQ is a static psychology and personality test app with IQ-style scoring, archetype, MBTI-style, Enneagram, and pop culture tests.

## GitHub Pages Deployment

1. Create a new GitHub repository.
2. Upload all files in this folder to the repository.
3. In GitHub, open `Settings` -> `Pages`.
4. Set source to `Deploy from a branch`.
5. Choose the `main` branch and the root folder.
6. Save. GitHub will publish the site at:

   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## Android / Play Store Notes

This project includes a native Android WebView wrapper in `android/`.

- Play Store package: `com.bradleyjweb.psycheiq`
- Hosted app URL: `https://bradleyj-web.github.io/PsycheIQ/`
- Privacy policy URL: `https://bradleyj-web.github.io/PsycheIQ/privacy.html`
- Play Store subscription product ID: `psycheiq_monthly_access`

The Android app is configured as membership-only. It uses Google Play Billing for the `$12.99/month` membership, then unlocks tests and member results inside the hosted web app. The browser version can still keep a one-time report unlock as a future web checkout path.

Build commands from `android/`:

```powershell
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio1\jbr"
$env:ANDROID_HOME = "C:\Users\plzdo\AppData\Local\Android\Sdk"
.\gradlew.bat :app:assembleDebug
.\gradlew.bat :app:bundleRelease
```

See `PLAY_STORE_READINESS.md` for the Play Console checklist.

## iOS / App Store Notes

This repository now includes an App Store preparation checklist and metadata template:

- `APP_STORE_READINESS.md`
- `APP_STORE_METADATA_TEMPLATE.md`
- Public support URL page: `support.html`

Use those files to prepare App Store Connect metadata, compliance answers, TestFlight rollout, and launch readiness.

## Supabase Backend

The app now includes a Supabase-ready backend scaffold in `supabase/`.

- `supabase/schema.sql` creates profiles, purchases, subscriptions, entitlements, saved results, and support tickets.
- `supabase/functions/create-checkout` starts secure Stripe Checkout Sessions.
- `supabase/functions/checkout-status` verifies a returned Stripe session before unlocking access.
- `supabase/functions/stripe-webhook` keeps membership status updated from Stripe.
- `supabase/functions/support-ticket` stores chatbot support tickets and can email them when an email provider key is added.

Fill in `supabase-config.js` with your public Supabase project URL and anon key after the project is created. Keep private keys inside Supabase Edge Function secrets only.

See `supabase/README.md` for the setup steps.
