---
title: "Hybrid Apps Quick Start"
domain: mobile-sdk
topic: hybrid-apps-quick-start
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:30.013Z
estimatedTokens: 868
keywords: [Hybrid, Apps, Quick, Start, give, ease, JavaScript, HTML5, development, leveraging, Salesforce, Mobile, SDK]
---

# Hybrid Apps Quick Start

> Hybrid apps give you the ease of JavaScript and HTML5 development while leveraging
    Salesforce Mobile SDK

# Hybrid Apps Quick Start

Hybrid apps give you the ease of JavaScript and HTML5 development while leveraging Salesforce Mobile SDK

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

In 2020, the App Store has removed UIWebView architecture from all app submissions in favor of WKWebView. As a result, Mobile SDK hybrid apps for iOS can run only on Mobile SDK 8.1 or later. See [Removing UIWebView from iOS Hybrid Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_uiwebview_removal.htm "In 2018, Apple deprecated UIWebView in favor of WKWebView. The App Store recently announced a timeline for formally removing apps that still use UIWebView. To conform to these requirements, Mobile SDK has removed all its references to UIWebView.").

If you’re comfortable with the concept of hybrid app development, use the following steps to get going quickly.

1.  To develop Android hybrid apps for Mobile SDK 11.1, you need:

    -   Cordova 12.0.1.
    -   Cordova CLI 12.0.0 or later.

    -   Java JDK 11.0.11+9 or later—[www.oracle.com/downloads](http://www.oracle.com/downloads/ "HTML (New Window)").
    -   Latest version of Android Studio —[developer.android.com/sdk](http://developer.android.com/sdk/ "HTML (New Window)").
    -   Android SDK, including all APIs in the following range:
        -   Minimum API: Android Nougat (API 24)
        -   Target API: Android 13 (API 33)
    -   Android SDK Tools
    -   Android Virtual Device (AVD)
2.  To develop iOS hybrid apps for Mobile SDK 11.1, you need:
    -   Cordova 7.0.1.
    -   Cordova CLI 12.0.0 or later.
    -   Xcode version: 14 or later. (We recommend the latest version.)
    -   iOS SDK:
        -   Deployment target: iOS 15
        -   Base SDK: iOS 16
    -   CocoaPods (any version from 1.8 to no declared maximum—see [cocoapods.org](https://cocoapods.org/ "HTML (New Window)")).
3.  Install Mobile SDK.
    -   [Android Preparation](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/install_android.htm "Before you try to create Mobile SDK apps for Android—native, hybrid, or React Native—install the Android native development environment.")
    -   [iOS Preparation](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/install_ios.htm "To create Mobile SDK apps for iOS, you must install the necessary Apple software. If you plan to use forceios, you also install CocoaPods.")
4.  If you don’t already have a connected app, see [Creating a Connected App](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/connected_apps_creating.htm). For OAuth scopes, select api, web, and refresh\_token.

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

    #### Note

    When specifying the Callback URL, there’s no need to use a real address. Use any value that looks like a URL, such as myapp:///mobilesdk/oauth/done.

5.  Create a hybrid app.
    -   Follow the steps at [Create Hybrid Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_ios.htm "Once you’ve installed forcehybrid and the Cordova command line, you’re ready to create functioning hybrid apps."). Use hybrid\_local for the application type.
6.  Run your new app.
    -   [Build and Run Your Hybrid App on Android](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_run_android.htm)
    -   [Build and Run Your Hybrid App On iOS](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_run_ios.htm).

## Related Topics

- Removing UIWebView from iOS Hybrid Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_uiwebview_removal.htm)
- Android Preparation (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/install_android.htm)
- iOS Preparation (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/install_ios.htm)
- Creating a Connected App (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/connected_apps_creating.htm)
- Create Hybrid Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_ios.htm)
- Build and Run Your Hybrid App on Android (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_run_android.htm)
- Build and Run Your Hybrid App On iOS (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_run_ios.htm)
