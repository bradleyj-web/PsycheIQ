# PsycheIQ Android Wrapper

This folder is an Android Studio wrapper for the hosted PsycheIQ web app.

## What It Does

- Opens `https://bradleyj-web.github.io/PsycheIQ/` in a native Android WebView.
- Uses package ID `com.bradleyjweb.psycheiq`.
- Targets Android API 35 for Google Play compatibility.
- Is structured so Android Studio can generate an Android App Bundle (`.aab`).

## Build For Google Play

1. Install Android Studio.
2. Open this `android` folder as a project.
3. Let Android Studio install/download the Android Gradle plugin and SDK files.
4. Open `app/src/main/java/com/bradleyjweb/psycheiq/MainActivity.java`.
5. Confirm `WEB_APP_URL` points to the final live website.
6. In Android Studio, use `Build` -> `Generate Signed App Bundle / APK`.
7. Choose `Android App Bundle`.
8. Create or select a release signing key.
9. Upload the generated `.aab` to Google Play Console.

## Important Play Store Note

The current website has paid result unlocks and a monthly membership concept. For Google Play distribution, digital in-app features and subscriptions generally need to use Google Play Billing. Add Play Billing before publishing real paid unlocks in the Play Store.

Official references:

- https://developer.android.com/guide/app-bundle
- https://developer.android.com/google/play/requirements/target-sdk
- https://support.google.com/googleplay/android-developer/answer/9858738
