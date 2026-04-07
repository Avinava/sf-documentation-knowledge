---
title: "Embedded Service Chat SDK for iOS Developer Guide Developer Guide"
domain: service-sdk-ios
topic: embedded-service-chat-sdk-for-ios-developer-guide-developer-guide
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-04-07T18:40:28.207Z
estimatedTokens: 1156
keywords: [Embedded, Service, Chat, SDK, iOS, Developer, Mobile, Apps, easy, give, customers, powerful, features, right, native, app, helps, started]
---

> The Embedded Service Chat SDK for Mobile
   Apps makes it easy to give customers access to powerful chat features right from within your
  native app. This guide helps you get started using the SDK in your mobile app.

# Embedded Service Chat SDK for iOS Developer Guide Developer Guide

The Embedded Service Chat SDK for Mobile Apps makes it easy to give customers access to powerful chat features right from within your native app. This guide helps you get started using the SDK in your mobile app.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

**October 2023 Release (Version 246.0.0)**

This documentation describes the Service Chat SDK, which uses the following components.

| Component | Version Number |
| --- | --- |
| Chat | 4.1.2 |
| ServiceCore | 4.2.8 |

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

#### Note

If you are using Xcode 12.3 or later, you must install the SDK using XCFramework files. To learn more, review the [installation instructions](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_sdk_install_overview.htm "Before you can use the iOS SDK, install the SDK and configure your project.").

-   **[Release Notes](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_release_notes.htm)**
    Check out the new features and known issues for the iOS Service Chat SDK.
-   **[Service Cloud Setup for the](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/servicesdk_cloud_setup.htm)**
    Set up Service Cloud in your org before using the Service Chat SDK.
-   **[Setup Setup](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/servicesdk_sdk_setup.htm)**
    Set up the SDK to start using Service Cloud features in your mobile app.
-   **[iOS Tutorials & Examples](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/servicesdk_quick_start.htm)**
    Get going quickly with these short introductory tutorials.
-   **[Using Chat with the](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/servicesdk_using_live_agent.htm)**
    Add the Chat experience to your mobile app.
-   **[SDK Customizations with the for iOS for iOS](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/servicesdk_ui_customization.htm)**
    Once you’ve played around with some of the SDK features, use this section to learn how to customize the Service Chat SDK user interface so that it fits the look and feel of your app. This section also contains instructions for localizing strings in all supported languages.
-   **[Troubleshooting the](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/servicesdk_troubleshooting.htm)**
    Get some guidance when you run into issues.
-   **[Data Protection and Security in the for iOS for iOS](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_data_protection.htm)**
    The Service Chat SDK does not collect or store personal data from its users. We ensure that data is secure both locally and when in transit.
-   **[Reference Documentation](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/servicesdk_ios_ref_overview.htm)**
    Reference documentation for Service Chat SDK for iOS.
-   **[Additional Resources](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/servicesdk_additional_resources.htm)**
    If you’re looking for other resources, check out this list of links to related documentation.

#### See Also

-   [Service SDK for iOS Release Notes](https://github.com/forcedotcom/ServiceSDK-iOS/releases "Service SDK for iOS Release Notes - HTML (New Window)")

-   [Service SDK for iOS Reference Documentation](https://forcedotcom.github.io/ServiceSDK-iOS/ "Service SDK for iOS Reference Documentation - HTML (New Window)")

-   [Service SDK for Android Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.service_sdk_android.meta/service_sdk_android/servicesdk_android_dev_guide.htm "Service SDK for Android Developer Guide - HTML (New Window)")

## Related Topics

- installation instructions (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_sdk_install_overview.htm)
- Release Notes (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_release_notes.htm)
- Service Cloud Setup for the (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/servicesdk_cloud_setup.htm)
- Setup Setup (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/servicesdk_sdk_setup.htm)
- iOS Tutorials & Examples (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/servicesdk_quick_start.htm)
- Using Chat with the (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/servicesdk_using_live_agent.htm)
- SDK Customizations with the for iOS for iOS (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/servicesdk_ui_customization.htm)
- Troubleshooting the (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/servicesdk_troubleshooting.htm)
- Data Protection and Security in the for iOS for iOS (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/ios_data_protection.htm)
- Reference Documentation (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/servicesdk_ios_ref_overview.htm)
