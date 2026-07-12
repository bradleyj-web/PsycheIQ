# PsycheIQ iOS Wrapper Notes

This project does not yet include an Xcode iOS target in source control.

Use this checklist when creating the iOS wrapper app that loads `https://bradleyj-web.github.io/PsycheIQ/`:

## Xcode Setup

1. Create a new iOS app project in Xcode.
2. Set bundle identifier to `com.bradleyjweb.psycheiq.ios` (or your final reserved ID).
3. Set app display name to `PsycheIQ`.
4. Enable automatic signing with your Apple Developer team.
5. Use release versioning:
   - Version: `1.0.0`
   - Build: `1` (increment each upload)

## Required Release Checks

- Use `Release` configuration for archive uploads.
- Remove debug logging and test-only endpoints for release builds.
- Add required app icons including 1024x1024 App Store icon.
- Confirm launch screen and orientation behavior.

## Info.plist Permissions

Only add permissions your app actually uses. If any are enabled, include clear purpose strings:

- `NSCameraUsageDescription`
- `NSPhotoLibraryUsageDescription`
- `NSMicrophoneUsageDescription`
- `NSLocationWhenInUseUsageDescription`
- `NSUserTrackingUsageDescription` (only if tracking is used)

## ATT and Privacy

- If tracking is used, present ATT before tracking and declare it in App Store Connect.
- If tracking is not used, do not request tracking permission.

See `/APP_STORE_READINESS.md` and `/APP_STORE_METADATA_TEMPLATE.md` for submission details.
