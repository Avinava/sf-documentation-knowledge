---
title: "Accessibility with the  for Android for
      Android"
domain: service-sdk-android
topic: accessibility-with-the-for-android-for-android
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:32.629Z
estimatedTokens: 619
keywords: [Accessibility, Android, Service, Chat, SDK, accessible, customers, screen, reader, Depending, needs, change, settings, expand, Disable]
---

# Accessibility with the  for Android for
      Android

> The Service Chat SDK is accessible to customers that use a screen reader.
    Depending on your needs, you can also change some settings to expand accessibility.

# Accessibility with the for Android for Android

The Service Chat SDK is accessible to customers that use a screen reader. Depending on your needs, you can also change some settings to expand accessibility.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

## Disable the Minimized View in Chat

By default, a chat session starts out as a minimized, thumbnail view that you tap to open. This minimized view is not optimal for accessibility because a visually impaired person could have trouble locating the thumbnail. To improve accessibility, we suggest starting the session in the full-screen view. When building the [ChatUIConfiguration](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.3.1/api/reference/com/salesforce/android/chat/ui/ChatUIConfiguration.html) object, set defaultToMinimized to false.

```

```

See [Quick Setup: Chat in the](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_basic_setup.htm "To add Chat to your Android app, create a configuration object that points to your org and then create a Chat UI client.").

## Contrast Ratio Considerations

By default, we brand the SDK using a 4.2 contrast ratio. You can customize the colors to increase this contrast ratio.

See [Customize Colors with the](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_customize_colors.htm "You can customize the look and feel of the interface by specifying the colors used throughout the UI.").

## Known Issues

-   Chat: A screen reader doesn’t read the event text when an agent invites another agent to the chat session.

## Code Examples

```
ChatUIConfiguration uiConfig = new ChatUIConfiguration.Builder()
  .chatConfiguration(chatConfiguration)
  .defaultToMinimized(false)
  .build();
```

## Related Topics

- Quick Setup: Chat in the (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_basic_setup.htm)
- Customize Colors with the (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_customize_colors.htm)
