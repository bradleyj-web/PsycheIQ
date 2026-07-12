# PsycheIQ App Store Readiness

## iOS App Identity

- Bundle ID (reserve in Apple Developer): `com.bradleyjweb.psycheiq.ios`
- App name: `PsycheIQ`
- Version: `1.0.0`
- Build number: `1`
- Primary language: English
- Support URL: `https://bradleyj-web.github.io/PsycheIQ/support.html`
- Privacy policy URL: `https://bradleyj-web.github.io/PsycheIQ/privacy.html`
- Marketing URL (optional): `https://bradleyj-web.github.io/PsycheIQ/`

## 1) App Store Prerequisites

- [ ] Enroll active Apple Developer Program account.
- [ ] Create app record in App Store Connect with the bundle ID above.
- [ ] Configure signing team and automatic signing in Xcode.
- [ ] Confirm version/build update process for every release.

## 2) Production Readiness

- [ ] Use Release configuration for archive builds.
- [ ] Disable debug logs and debug-only web content in release builds.
- [ ] Provide App Icon set including required App Store size (1024x1024 PNG).
- [ ] Confirm launch screen and app capabilities are final.
- [ ] Add clear `Info.plist` usage descriptions for any enabled permission.

## 3) Compliance and Policy

- [x] Privacy policy URL published.
- [x] Support URL published.
- [ ] Complete App Privacy nutrition labels in App Store Connect.
- [ ] If tracking is introduced, implement ATT prompt and declare tracking usage.
- [ ] Complete export compliance answers at submission time.

## 4) Metadata Assets

- [ ] Finalize title, subtitle, keywords, promotional text, and description.
- [ ] Capture required iPhone screenshots for App Store listing.
- [ ] Set category and age rating.
- [ ] Add review contact and demo account details if needed.

See `/APP_STORE_METADATA_TEMPLATE.md` for copy-ready fields.

## 5) Quality Validation

- [ ] Test on physical iPhone devices before submission.
- [ ] Validate account creation/login flows.
- [ ] Validate purchase and membership unlock flows.
- [ ] Validate support flow and email/contact pathways.
- [ ] Validate behavior on weak/offline network.
- [ ] Confirm crash-free launch and core test completion paths.

## 6) TestFlight

- [ ] Archive and upload iOS build from Xcode.
- [ ] Run internal TestFlight with release checklist.
- [ ] Run external TestFlight if broader feedback is needed.
- [ ] Fix crashes/critical feedback before App Review submission.

## 7) App Review Submission

- [ ] Provide accurate review notes, contact info, and credentials.
- [ ] Submit and monitor review status.
- [ ] Address rejection feedback and resubmit quickly.

## 8) Post-Launch Readiness

- [ ] Ensure crash and analytics monitoring are active.
- [ ] Publish release notes.
- [ ] Monitor first-week support issues and triage daily.
