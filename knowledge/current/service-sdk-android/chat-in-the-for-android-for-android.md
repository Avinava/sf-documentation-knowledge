---
title: "Chat in the  for Android for Android"
domain: service-sdk-android
topic: chat-in-the-for-android-for-android
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:27.678Z
estimatedTokens: 895
keywords: [Chat, Android, Service, SDK, provide, real-time, sessions, native, app]
---

> Using Chat within the Service Chat SDK, you can provide real-time chat
        sessions from within your native app.

# Chat in the for Android for Android

Using Chat within the Service Chat SDK, you can provide real-time chat sessions from within your native app.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Once you’ve [set up chat for Service Cloud](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/live_agent_cloud_setup.htm "Use the guided setup flow in Lightning Experience to add chat to your org."), it takes [just a few calls to the SDK](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_basic_setup.htm "To add Chat to your Android app, create a configuration object that points to your org and then create a Chat UI client.") to have your app ready to handle agent chat sessions.

When a chat session initiates, it is minimized by default so the user can keep using the app.

![Chat session minimized](/docs/resources/img/en-us/noversion?doc_id=images%2Fandroid_lac_chat_minimized.png&folder=service_sdk_android)

When the user taps the chat thumbnail, the app goes full screen.

![Chat session full screen](/docs/resources/img/en-us/noversion?doc_id=images%2Fandroid_lac_chat_normal.png&folder=service_sdk_android)

If you've implemented Einstein Bots, the user first [speaks with a chat bot](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_einstein_bots.htm#android_chat_einsten_bots "With Einstein Bots, you can complement your chat support experience with a smart, automated system that saves your agents time and keeps your customers happy. Once you've set up Einstein Bots in your org, the SDK automatically begins the chat experience using your bot. You can design your bot to transfer to an agent at any point.") before optionally getting transferred to an agent.

If the user isn't using the app during a chat session, they receive a new message notification when an agent sends a message.

When an agent sends links to your users, they see link previews right from within the chat session. The SDK tries to use Open Graph meta tags (og:title, og:description, og:image) to extract relevant information for the preview.

![Chat session hyperlinks](/docs/resources/img/en-us/noversion?doc_id=images%2Fandroid_lac_chat_hyperlinks.png&folder=service_sdk_android)

You can also [customize the look and feel](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_customization.htm "Once you’ve played around with some of the SDK features, use this section to learn how to customize the Service Chat SDK so that it fits the look and feel of your app. This section also contains instructions for localizing strings in all supported languages.") of the interface so that it fits naturally within your app.

## Related Topics

- set up
                chat for Service Cloud (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/live_agent_cloud_setup.htm)
- just a few calls to the SDK (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_basic_setup.htm)
- speaks with a chat
                bot (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_einstein_bots.htm)
- customize the look and feel (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_customization.htm)
