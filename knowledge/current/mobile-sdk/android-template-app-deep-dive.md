---
title: "Android Template App: Deep Dive"
domain: mobile-sdk
topic: android-template-app-deep-dive
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:29.676Z
estimatedTokens: 355
keywords: [Android, Template, App, Deep, Dive, studying, gain, quick, understanding, native, apps, built, Mobile, SDK]
---

# Android Template App: Deep Dive

> By studying a template app, you can gain a quick
                understanding of native apps built with Mobile SDK for Android.

# Android Template App: Deep Dive

To create new Android apps, the forcedroid create command repurposes one of two Mobile SDK template projects.

-   **AndroidNativeTemplate**—Implements a basic Mobile SDK native app using Java.
-   **AndroidNativeTemplateKotlin**—Implements a basic Mobile SDK native app using Kotlin.

You can find both projects in the [github.com/forcedotcom/SalesforceMobileSDK-Templates](https://github.com/forcedotcom/SalesforceMobileSDK-Templates "HTML (New Window)") GitHub repo.

By studying a template app, you can gain a quick understanding of native apps built with Mobile SDK for Android.

Template projects define two classes: MainApplication and MainActivity.

-   The MainApplication class extends the Android Application class and calls MobileSyncSDKManager.initNative() in its onCreate() override.
-   The MainActivity class extends the SalesforceActivity class.

These two classes create a running mobile app that displays a login screen and a home screen.

Despite containing only about 200 lines of code, the Mobile SDK template apps are more than just “Hello World” examples. In its main activity, it retrieves Salesforce data through REST requests and displays the results on a mobile page. You can extend these apps by adding more activities, calling other components, and doing anything else that the Android operating system, the device, and your security constraints allow.
