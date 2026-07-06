# PsycheIQ Play Store Readiness

## Android Package

- Package name: `com.bradleyjweb.psycheiq`
- Version code: `1`
- Version name: `1.0.0`
- Hosted app URL: `https://bradleyj-web.github.io/PsycheIQ/`
- Privacy policy URL: `https://bradleyj-web.github.io/PsycheIQ/privacy.html`

## Google Play Billing Products

The Play Store app is subscription-only. Create this subscription in Play Console:

- Product ID: `psycheiq_monthly_access`
- Type: Subscription
- Price: `$12.99/month`
- Purpose: unlocks all tests, retakes, member result access, and saved-result features

The website can still support a one-time report unlock later, but the Android app does not launch the one-time product.
Keep this ID reserved only if you plan to use it on the web or in a non-Play build:

- Product ID: `psycheiq_core_report`
- Type: One-time product
- Price: `$1.00`

## Member Ad Placements

The app includes configurable member-only sponsor placements:

- Before a test starts
- Before a member result opens
- Before a member result is emailed

Current provider: placeholder. Replace with AdMob after creating real ad unit IDs.

## Play Console Tasks

- Create the app listing and store assets.
- Create and activate the `psycheiq_monthly_access` subscription.
- Add license testers and test the Google Play checkout flow.
- Fill out Data safety using the privacy policy above.
- Complete content rating and target audience forms.
- Set up Play App Signing and upload a signed release `.aab`.
- Submit through internal testing before production.
