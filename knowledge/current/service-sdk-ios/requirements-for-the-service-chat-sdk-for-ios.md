---
title: "Requirements for the Service Chat SDK for iOS"
domain: service-sdk-ios
topic: requirements-for-the-service-chat-sdk-for-ios
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:32.906Z
estimatedTokens: 615
keywords: [Requirements, Service, Chat, SDK, iOS, Salesforce, org, development, mobile, app]
---

# Requirements for the Service Chat SDK for iOS

> The Salesforce org, SDK development, and mobile app requirements
      for using the Service Chat SDK.

# Requirements for the Service Chat SDK for iOS

The Salesforce org, SDK development, and mobile app requirements for using the Service Chat SDK.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

## Salesforce Org Requirements

The Service Chat SDK can be used with both Lightning Experience and Salesforce Classic. However, the SOS agent widget currently works only in Salesforce Classic.

## SDK Development Requirements

To develop using this SDK, you must have [iOS SDK](https://developer.apple.com/ios/) version 12 or later.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

Apple mandates a privacy manifest for third-party SDKs that have a large user base. Service Chat SDK is excluded from Apple’s list of third-party SDK requirements because it has a small user base compared to popular third-party SDKs. Also, the SDK has reached the end-of-sale state, and end-of-sale SDKs haven’t been added to the requirements. So, Service Chat doesn’t require a privacy manifest. See [Upcoming third-party SDK requirements](https://developer.apple.com/support/third-party-SDK-requirements/) in *Apple Developer Support*.

Service Chat also doesn’t collect or store user data locally in the SDK and doesn’t track data. However, if you use a pre-chat form and configure it to store any data entered by the user in Salesforce, add a privacy manifest with this information to the host app.

## Mobile App Requirements

Any app that uses this SDK requires [iOS](https://developer.apple.com/ios/) version 12 or later.
