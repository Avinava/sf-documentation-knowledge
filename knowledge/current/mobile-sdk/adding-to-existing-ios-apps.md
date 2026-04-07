---
title: "Adding  to Existing iOS Apps"
domain: mobile-sdk
topic: adding-to-existing-ios-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:25.534Z
estimatedTokens: 378
keywords: [Adding, iOS, Apps, easily, upgrade, projects, support, Mobile, Sync, forceios, new, project, add, assets, However, you’d, know, steps, upgrading, older, SDK, 6.0, you’re, right, place]
---

> You can easily upgrade existing iOS projects to support Mobile Sync: Just use forceios to
    create a new project, then add in your assets. However, if you’d like to know the steps for
    upgrading older Mobile Sync apps
    to Mobile SDK 6.0 or
    later, you’re in the right place.

# Adding to Existing iOS Apps

You can easily upgrade existing iOS projects to support Mobile Sync: Just use forceios to create a new project, then add in your assets. However, if you’d like to know the steps for upgrading older Mobile Sync apps to Mobile SDK 6.0 or later, you’re in the right place.

In Mobile SDK 4.0, Mobile Sync moved out of Mobile SDK core into its own library. Mobile Sync relies on SmartStore, so forceios automatically adds SmartStore to your project. In addition, native iOS projects in Mobile SDK 6.0 and later require a MobileSyncSDKManager object to initialize the app.

Instead of making the updates piece by piece, we recommend that you create a new native project, then copy your assets into that project. You can create the new shell project either manually using template source files, or with forceios. To create the project manually, see [Creating an iOS Swift Project Manually](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_project_manual.htm "If you prefer not to use forceios or CocoaPods, you can create Mobile SDK apps manually in Xcode.").

The native template app uses the MobileSyncSDKManager class by default and imports the correct libraries for you, plus many other updates. See [https://github.com/forcedotcom/SalesforceMobileSDK-Templates/blob/master/iOSNativeTemplate/iOSNativeTemplate/AppDelegate.m](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/blob/master/iOSNativeTemplate/iOSNativeTemplate/AppDelegate.m "HTML (New Window)")

## Related Topics

- Creating an iOS Swift Project Manually (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_project_manual.htm)
