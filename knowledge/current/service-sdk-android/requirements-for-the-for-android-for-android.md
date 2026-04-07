---
title: "Requirements for the  for Android for
   Android"
domain: service-sdk-android
topic: requirements-for-the-for-android-for-android
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:32.635Z
estimatedTokens: 463
keywords: [Requirements, Android, Salesforce, org, SDK, development, mobile, app, Service, Chat, Permission]
---

# Requirements for the  for Android for
   Android

> The Salesforce org, SDK development, and mobile app requirements for using the Service
  Chat SDK.

# Requirements for the for Android for Android

The Salesforce org, SDK development, and mobile app requirements for using the Service Chat SDK.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

## Salesforce Org Requirements

The Service Chat SDK can be used with both Lightning Experience and Salesforce Classic. However, the SOS agent widget currently works only in Salesforce Classic.

## SDK Requirements

This SDK requires [Android](https://www.android.com/) API level 21 (5.0, Lollipop) or newer. You can access the SDK using either Java or Kotlin.

## App Permission Requirements

The SDK inserts permission requirements into the manifest of your compiled application package.

| Permission |
| --- |
| General Purpose Permissions |
| android.permission.ACCESS_NETWORK_STATE |
| android.permission.INTERNET |
| android.permission.READ_EXTERNAL_STORAGE |
| android.permission.WRITE_EXTERNAL_STORAGE |
| Real-Time Chat and Video Permissions |
| android.permission.CAMERA |
