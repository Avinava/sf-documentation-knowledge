---
title: "Development Prerequisites for iOS and Android"
domain: mobile-sdk
topic: development-prerequisites-for-ios-and-android
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:30.028Z
estimatedTokens: 630
keywords: [Development, Prerequisites, iOS, Android, recommend, background, knowledge, system, setup, begin, building, Mobile, SDK, apps, General]
---

# Development Prerequisites for iOS and Android

> We recommend some background knowledge and system setup before you begin building
        Mobile SDK apps.

# Development Prerequisites for iOS and Android

We recommend some background knowledge and system setup before you begin building Mobile SDK apps.

It’s helpful to have some experience with Salesforce Platform. Familiarity with OAuth, login and passcode flows, and Salesforce connected apps is essential to designing and debugging Mobile SDK apps. See [Authentication, Security, and Identity in Mobile Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/intro_oauth.htm).

## General Requirements (for All Platforms and Environments)

The following software is required for all Mobile SDK development.

-   A Salesforce [Developer Edition organization](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/dev_de.htm "To access a wealth of tutorials, blogs, and support forums for all Salesforce developer programs, join the Salesforce Platform.") with a [connected app](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/connected_apps_howto.htm "A Salesforce administrator creates connected apps on the Salesforce server. Salesforce connected apps include many settings that are used only by other mobile offerings such as the Salesforce app. The following steps cover the settings that apply to Mobile SDK apps.").

## iOS Native Requirements

-   iOS SDK:
    -   Deployment target: iOS 15
    -   Base SDK: iOS 16
-   Xcode version: 14 or later. (We recommend the latest version.)

## Android Native Requirements

-   Java JDK 11.0.11+9 or later—[www.oracle.com/downloads](http://www.oracle.com/downloads/ "HTML (New Window)").
-   Latest version of Android Studio —[developer.android.com/sdk](http://developer.android.com/sdk/ "HTML (New Window)").
-   Android SDK, including all APIs in the following range:
    -   Minimum API: Android Nougat (API 24)
    -   Target API: Android 13 (API 33)
-   Android SDK Tools
-   Android Virtual Device (AVD)

## Hybrid Requirements

-   For each mobile platform you support, all native requirements except for forceios and forcedroid npm packages.
-   Cordova CLI 12.0.0.
-   Forcehybrid npm package, version 11.1.
-   Proficiency in HTML5 and JavaScript languages.
-   For hybrid remote applications:
    -   A Salesforce organization that has Visualforce.
    -   A Visualforce start page.

## React Native Requirements

-   For each mobile platform you support, all native requirements except for forceios and forcedroid npm packages.
-   Forcereact npm package, version 11.1.
-   Proficiency in JavaScript ([ES2015](https://babeljs.io/learn-es2015/ "HTML (New Window)")).

## Related Topics

- Authentication, Security, and Identity in Mobile Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/intro_oauth.htm)
- Developer Edition organization (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/dev_de.htm)
- connected
                        app (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/connected_apps_howto.htm)
