---
title: "Data Collection for the"
domain: service-sdk-android
topic: data-collection-for-the
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:27.834Z
estimatedTokens: 639
keywords: [Collection, Service, Chat, SDK, collects, transmits, perform, basic, operations, falls, three, categories, pre-chat, message, logging]
---

> The Service Chat SDK collects and transmits data
      to perform basic operations. This data falls into three categories: pre-chat data, chat
      message data, and logging data.

# Data Collection for the

The Service Chat SDK collects and transmits data to perform basic operations. This data falls into three categories: pre-chat data, chat message data, and logging data.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

## Pre-Chat Data

Data types collected:

-   Personal info (for example, name, email). Most pre-chat forms contain some personal info.
-   Other info. Other data collected depends on how you design your pre-chat form.

All data specified in the pre-chat form is securely transmitted to your Salesforce org using HTTPS communication (TLS 1.3). This data is stored in your org indefinitely, depending on how you handle pre-chat information in your org. You can change this behavior from within your org. You can even remove the pre-chat form altogether.

## Chat Message Data

Data types collected:

-   In-app messages. User chat messages get sent to agents through your Salesforce org.
-   Photos. Users can send photos to agents.
-   Other info. Any content a user types into a message gets sent to an agent or chatbot.

All user messages are securely transmitted to your Salesforce org using HTTPS communication (TLS 1.3). This data is stored in your org indefinitely. You can remove any of this data from your org.

## Logging Data

Data types collected:

-   App interactions
-   Other actions

For logging purposes, we send anonymized information to Splunk servers using HTTPS communication (TLS 1.3). This data doesn't contain any customer-identifiable or hardware-identifiable information. We log info about how users interact with the SDK and we log some basic system information (such as battery stats) while they use the SDK.
