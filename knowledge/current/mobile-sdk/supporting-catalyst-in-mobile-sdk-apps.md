---
title: "Supporting Catalyst in Mobile SDK Apps"
domain: mobile-sdk
topic: supporting-catalyst-in-mobile-sdk-apps
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:26.240Z
estimatedTokens: 563
keywords: [Supporting, Catalyst, Mobile, SDK, Apps, Beginning, 9.1, adds, support, native, frameworks, Apple, cross-platform, product, iPad, run, Intel, Silicon, Macs, Preparing, macOS, easy—it, usually, requires, couple, additional, settings, iOS, project, configuration, Started, Considerations, Security, Features]
---

> Beginning in version 9.1, Mobile SDK adds Catalyst support to its native frameworks.
  Catalyst is an Apple cross-platform product that enables iPad apps to run on Intel and Silicon
  Macs. Preparing Mobile SDK iPad apps to run on macOS is easy—it usually requires only a
  couple of additional settings in your iOS project configuration.

# Supporting Catalyst in Mobile SDK Apps

Beginning in version 9.1, Mobile SDK adds Catalyst support to its native frameworks. Catalyst is an Apple cross-platform product that enables iPad apps to run on Intel and Silicon Macs. Preparing Mobile SDK iPad apps to run on macOS is easy—it usually requires only a couple of additional settings in your iOS project configuration.

Mobile SDK supports macOS through Catalyst in the following frameworks:

-   SalesforceSDKCommon
-   SalesforceAnalytics
-   SalesforceSDKCore
-   SmartStore
-   MobileSync

The following Mobile SDK frameworks don’t support Catalyst:

-   SalesforceHybridSDK
-   SalesforceReact
-   SalesforceFileLogger framework (currently in development)

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

To run on macOS, all third-party frameworks that your app uses must also support Catalyst.

## Get Started with Catalyst

To configure your iPad apps for macOS, follow Apple’s [Turning on Mac Catalyst](https://developer.apple.com/tutorials/mac-catalyst/turning-on-mac-catalyst "HTML (New Window)") tutorial. In the Mac version of your app, be sure to set the deployment target to **macOS 11**.

Mobile SDK also provides examples that demonstrate Catalyst support:

[MobileSyncExplorerSwift](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/tree/master/MobileSyncExplorerSwift) Template App

You can use this template with the forceios createwithtemplate command to create a Catalyst-ready project.

[RestAPIExlorer](https://github.com/forcedotcom/SalesforceMobileSDK-iOS/tree/dev/native/SampleApps/RestAPIExplorer) Sample App

## Special Considerations for Mobile SDK Security Features

Mobile SDK apps that use the following security features require special consideration for Catalyst.

Passcode

Passcode is a useful security gate for mobile devices such as iPhones and iPads. But does a passcode make sense when your app’s running on a Mac? We leave the decision to you—Mobile SDK passcode support is still available and works as expected on Macs.

Snapshot

Snapshot is essential on mobile devices for reasons that don’t apply to Macs. Mobile SDK automatically disables this feature in Mac versions of your app.
