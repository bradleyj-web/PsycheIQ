# PsycheIQ Android Wrapper

This folder is an Android Studio wrapper for the hosted PsycheIQ web app.

## What It Does

- Opens `https://bradleyj-web.github.io/PsycheIQ/` in a native Android WebView.
- Uses package ID `com.bradleyjweb.psycheiq`.
- Uses the Android SDK installed by Android Studio on this computer.
- Is structured so Android Studio can generate an Android App Bundle (`.aab`).
- Keeps permissions limited to internet/network status. No camera, mic, or location permissions are requested.

## Open In Android Studio

1. Open Android Studio.
2. Choose `Open`.
3. Select this folder: `C:\Users\plzdo\OneDrive\Documents\Testing Apps\android`.
4. Let Android Studio sync Gradle and download anything it requests.
5. If Android Studio asks for an SDK location, use `C:\Users\plzdo\AppData\Local\Android\Sdk`.

## Build For Google Play

1. Open this `android` folder as a project.
2. Let Android Studio install/download the Android Gradle plugin and SDK files.
3. Open `app/src/main/java/com/bradleyjweb/psycheiq/MainActivity.java`.
4. Confirm `WEB_APP_URL` points to the final live website.
5. In Android Studio, use `Build` -> `Generate Signed App Bundle / APK`.
6. Choose `Android App Bundle`.
7. Create or select a release signing key.
8. Upload the generated `.aab` to Google Play Console.

## Command-Line Build

After Android Studio has installed the SDK, this project can also build from the `android` folder:

```powershell
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio1\jbr"
.\gradlew.bat :app:assembleDebug
.\gradlew.bat :app:bundleRelease
```

Useful outputs:

- Debug APK: `app/build/outputs/apk/debug/app-debug.apk`
- Release app bundle: `app/build/outputs/bundle/release/app-release.aab`

## Important Play Store Note

The current website has paid result unlocks and a monthly membership concept. For Google Play distribution, digital in-app features and subscriptions generally need to use Google Play Billing. Add Play Billing before publishing real paid unlocks in the Play Store.

Official references:

- https://developer.android.com/guide/app-bundle
- https://developer.android.com/google/play/requirements/target-sdk
- https://support.google.com/googleplay/android-developer/answer/9858738
