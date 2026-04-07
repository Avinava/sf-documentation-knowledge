---
title: "Setup Setup"
domain: service-sdk-android
topic: setup-setup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:27.888Z
estimatedTokens: 847
keywords: [Setup, SDK, start, Service, Cloud, features, mobile, app]
---

> Set up the SDK to start using Service Cloud features in your mobile app.

# Setup Setup

Set up the SDK to start using Service Cloud features in your mobile app.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

-   **[Requirements for the for Android for Android](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_sdk_prereqs.htm)**
    The Salesforce org, SDK development, and mobile app requirements for using the Service Chat SDK.
-   **[Accessibility with the for Android for Android](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_sdk_accessibility.htm)**
    The Service Chat SDK is accessible to customers that use a screen reader. Depending on your needs, you can also change some settings to expand accessibility.
-   **[Data Collection for the](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/sdk_data_collection.htm)**
    The Service Chat SDK collects and transmits data to perform basic operations. This data falls into three categories: pre-chat data, chat message data, and logging data.
-   **[Install the Service SDK for Android](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_install_sdk.htm)**
    Install the Service SDK for Android using Gradle.
-   **[Authentication with the for Android for Android](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_authentication.htm)**
    The Service Chat SDK provides an authentication mechanism that allows your users to access user-specific information in Service Cloud. To authenticate, implement two interfaces and provide an access token to the SDK.
-   **[Push Notifications with the for Android for Android](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_push_notifications.htm)**
    To take advantage of push notifications from your org to your app, set up an Apex trigger and configure your app for notifications. Pass relevant notification information, such as case feed activity, to the Service Chat SDK using your PushNotificationListener implementation.
-   **[Analytics with the for Android for Android](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_analytics.htm)**
    You can listen to user-driven events from the Service Chat SDK using the ServiceAnalytics system.
-   **[Decrease the Size of Your App](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_apk.htm)**
    Although the SDK doesn't have a large footprint, you can decrease the size of your app by splitting your APK or by using ProGuard.

## Related Topics

- Requirements for the for Android for Android (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_sdk_prereqs.htm)
- Accessibility with the for Android for Android (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_sdk_accessibility.htm)
- Data Collection for the (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/sdk_data_collection.htm)
- Install the Service SDK for Android (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_install_sdk.htm)
- Authentication with the for Android for Android (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_authentication.htm)
- Push Notifications with the for Android for Android (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_push_notifications.htm)
- Analytics with the for Android for Android (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_analytics.htm)
- Decrease the Size of Your App (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_apk.htm)
