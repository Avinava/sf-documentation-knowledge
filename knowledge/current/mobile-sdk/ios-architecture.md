---
title: "iOS Architecture"
domain: mobile-sdk
topic: ios-architecture
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:32.310Z
estimatedTokens: 335
keywords: [iOS, Architecture, forceios, native, apps, CocoaPods, incorporates, modules, app, specify, clone, SalesforceMobileSDK-iOS, git, repo, project]
---

# iOS Architecture

> If you use forceios to create native apps, CocoaPods incorporates the required modules based on
      the app type you specify. If you create native apps with a clone of the
      SalesforceMobileSDK-iOS git repo, your project uses these modules as dynamic libraries.

# iOS Architecture

Mobile SDK is essentially a single library that includes the following modules:

-   SalesforceSDKCommon—Implements utilities and custom data types used across other iOS components.
-   SalesforceAnalytics—Implements a logging and instrumentation framework for Mobile SDK.
-   SalesforceSDKCore—Implements OAuth authentication, passcode, and networking.
-   SmartStore—Mobile SDK offline secure storage solution.
-   MobileSync—Mobile SDK offline synchronization solution.

The following iOS architectures depend on the iOS native library but are maintained in separate GitHub repos:

-   [React Native](https://github.com/forcedotcom/SalesforceMobileSDK-ReactNative "HTML (New Window)")—Native bridges to Mobile SDK features. For use only in React Native apps.
-   [Hybrid](https://github.com/forcedotcom/SalesforceMobileSDK-iOS-Hybrid "HTML (New Window)")—Defines the Mobile SDK Cordova plugin for Mobile SDK features. For use only in hybrid apps.

If you use forceios to create native apps, CocoaPods incorporates the required modules based on the app type you specify. If you create native apps with a clone of the SalesforceMobileSDK-iOS git repo, your project uses these modules as dynamic libraries.

#### See Also

-   [Logging and Analytics](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/analytics_intro.htm)

## Related Topics

- Logging and Analytics (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/analytics_intro.htm)
