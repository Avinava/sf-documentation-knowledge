---
title: "Chat in the  for iOS for
   iOS"
domain: service-sdk-ios
topic: chat-in-the-for-ios-for-ios
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:28.139Z
estimatedTokens: 829
keywords: [Chat, iOS, Service, SDK, provide, real-time, sessions, native, app]
---

> Using Chat within the Service Chat SDK, you can provide real-time chat sessions
    from within your native app.

# Chat in the for iOS for iOS

Using Chat within the Service Chat SDK, you can provide real-time chat sessions from within your native app.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Once you’ve [set up chat for Service Cloud](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup.htm "Use the guided setup flow in Lightning Experience to add chat to your org."), it takes [just a few calls to the SDK](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_basic_setup.htm "To add Chat to your iOS app, create an SCSChatConfiguration object and pass it to the showChat method.") to have your app ready to handle agent chat sessions.

![Chat session](/docs/resources/img/en-us/noversion?doc_id=images%2Flac-chat-publisher-ios.png&folder=service_sdk_ios)

This chat session can be minimized so that the user can continue to navigate from within the app while speaking with an agent. And if you've implemented Einstein Bots, the user first [speaks with a chat bot](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_einstein_bots.htm "With Einstein Bots, you can complement your chat support experience with a smart, automated system that saves your agents time and keeps your customers happy. Once you've set up Einstein Bots in your org, the SDK automatically begins the chat experience using your bot. You can design your bot to transfer to an agent at any point.") before optionally getting transferred to an agent.

When an agent sends links to your users, they see link previews right from within the chat session. The SDK tries to use Open Graph meta tags (og:title, og:description, og:image) to extract relevant information for the preview.

![Chat hyperlinks](/docs/resources/img/en-us/noversion?doc_id=images%2Flac-chat-hyperlinks-ios.png&folder=service_sdk_ios)

You can also [customize the look and feel](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/servicesdk_ui_customization.htm "Once you’ve played around with some of the SDK features, use this section to learn how to customize the Service Chat SDK user interface so that it fits the look and feel of your app. This section also contains instructions for localizing strings in all supported languages.") of the interface so that it fits naturally within your app. These customizations include the ability to fine-tune the colors, the fonts, the images, and the strings used throughout the interface.

## Related Topics

- set up chat for Service Cloud (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup.htm)
- just a few
    calls to the SDK (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_basic_setup.htm)
- speaks with a chat bot (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_einstein_bots.htm)
- customize the look and feel (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/servicesdk_ui_customization.htm)
