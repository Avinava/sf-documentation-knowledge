---
title: "Data Protection and Security in the  for iOS for
      iOS"
domain: service-sdk-ios
topic: data-protection-and-security-in-the-for-ios-for-ios
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:27.978Z
estimatedTokens: 371
keywords: [Protection, Security, iOS, Service, Chat, SDK, collect, store, personal, users, ensure, secure, locally, transit]
---

> The Service Chat SDK does not collect
      or store personal data from its users. We ensure that data is secure both locally and when in
      transit.

# Data Protection and Security in the for iOS for iOS

The Service Chat SDK does not collect or store personal data from its users. We ensure that data is secure both locally and when in transit.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

-   **Secure data at rest**. We don't store personal data about the user. We manage keys using iOS Keychain Services. All content fetched from Salesforce servers is stored locally using AES-128 encryption. When the user logs out, we remove all user-specific data from the device.
-   **Secure data in transit**. All network communication occurs over SSL using TLS 1.2.
