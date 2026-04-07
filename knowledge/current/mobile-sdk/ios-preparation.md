---
title: "iOS Preparation"
domain: mobile-sdk
topic: ios-preparation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:26.178Z
estimatedTokens: 743
keywords: [iOS, Preparation, Mobile, SDK, apps, install, necessary, Apple, software, plan, forceios, CocoaPods]
---

> To create Mobile SDK apps for iOS, you must install the necessary Apple software. If you plan to use forceios, you
    also install CocoaPods.

# iOS Preparation

To create Mobile SDK apps for iOS, you must install the necessary Apple software. If you plan to use forceios, you also install CocoaPods.

In Mobile SDK 4.0 and later, the forceios script uses CocoaPods to import Mobile SDK modules. Apps created with forceios run in a CocoaPod-driven workspace. The CocoaPods utility enhances debugging by making Mobile SDK source code available in your workspace. Also, with CocoaPods, updating to a new Mobile SDK version is painless. You merely update the podfile and then run pod update in a terminal window.

Follow these instructions to make sure you’re fully prepared for Mobile SDK development on iOS.

-   Regardless of the type of iOS app you’re developing, make sure that you’re up to speed with the iOS native requirements listed at [iOS Basic Requirements](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_requirements.htm).
-   (Optional) To use forceios:

    -   To install forceios, see [npm Packages npm Packages](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/install_npmjs.htm "Most mobile developers want to use Mobile SDK as a “black box” and begin creating apps as quickly as possible. For this use case Salesforce provides a set of npm packages. Each package installs a command line tool that you can use at a Terminal window or in a Windows command prompt.").
    -   Forceios requires you to install CocoaPods. See *Getting Started* at [guides.cocoapods.org](https://guides.cocoapods.org).

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

    #### Note

    The forceios npm utility is provided as an optional convenience. CocoaPods, node.js, and npm are required for forceios but are not required for Mobile SDK iOS development. To learn how to create Mobile SDK iOS native projects without forceios, see [Creating an iOS Swift Project Manually](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_project_manual.htm "If you prefer not to use forceios or CocoaPods, you can create Mobile SDK apps manually in Xcode.").


#### See Also

-   [Use with with](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_cocoapods.htm "CocoaPods provides a convenient mechanism for merging Mobile SDK modules into existing Xcode projects. The steps in this article guide you through manually setting up CocoaPods in a Mobile SDK iOS app. If you created your app with forceios 4.0 or later, you get the CocoaPods setup automatically. In that case, you don’t have to perform the steps in this article—you only have to install CocoaPods software, and forceios does the rest. If you’re creating apps some other way, use this article if you plan to import Mobile SDK modules through CocoaPods.")

-   [Refreshing Pods Pods](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_pods_refresh.htm "CocoaPods caches its pods in repos stored locally on your machine. If the pod repo gets out of sync with forceios, you can manually update it.")

## Related Topics

- iOS Basic Requirements (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_requirements.htm)
- npm Packages npm Packages (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/install_npmjs.htm)
- Creating an iOS Swift Project Manually (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_project_manual.htm)
- Use with with (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_cocoapods.htm)
- Refreshing Pods Pods (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_pods_refresh.htm)
