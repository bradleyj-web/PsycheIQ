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
