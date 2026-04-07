---
title: "Accessibility with the  for iOS for
      iOS"
domain: service-sdk-ios
topic: accessibility-with-the-for-ios-for-ios
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:28.038Z
estimatedTokens: 678
keywords: [Accessibility, iOS, Service, Chat, SDK, accessible, customers, screen, reader, Depending, needs, change, settings, expand, Disable, Minimized, View, Contrast, Ratio, Considerations, Dynamic, Text]
---

> The Service Chat SDK is accessible to customers
      that use a screen reader. Depending on your needs, you can also change some settings to expand
      accessibility.

# Accessibility with the for iOS for iOS

The Service Chat SDK is accessible to customers that use a screen reader. Depending on your needs, you can also change some settings to expand accessibility.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

## Disable the Minimized View in Chat

By default, a chat session starts out as a minimized, thumbnail view that you tap to open. This minimized view is not optimal for accessibility because a visually impaired person could have trouble locating the thumbnail. To improve accessibility, we suggest starting the session in the full-screen view. When creating the [SCSChatConfiguration](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatConfiguration.html) object, set allowMinimization and defaultToMinimized to false.

```

```

See [Configure a Chat Session](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/configure_lac_session.htm "Before starting a chat session, you have several ways to configure the session using the SCSChatConfiguration object. These configuration settings allow you to specify pre-chat fields, determine whether a session starts minimized or full screen, and get updates about the user's queue position.").

## Contrast Ratio Considerations

By default, we brand the SDK using a 4.2 contrast ratio. You can customize the colors to increase this contrast ratio.

See [Customize Colors with the](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/customize_colors.htm "Customize the colors by defining the branding token colors used throughout the interface.").

## Dynamic Text Warning

When changing the iOS text size, the Apple Accessibility Inspector displays the following warning: “Dynamic Text font sizes are unsupported.” Dynamic text is supported, but it requires restarting the app after changing the font size.

## Code Examples

```
let config = SCSChatConfiguration(liveAgentPod: "YOUR_POD_NAME",
                                  orgId: "YOUR_ORG_ID",
                                  deploymentId: "YOUR_DEPLOYMENT_ID",
                                  buttonId: "YOUR_BUTTON_ID")

config?.allowMinimization = false
config?.defaultToMinimized = false
```

## Related Topics

- Configure a Chat Session (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/configure_lac_session.htm)
- Customize Colors with the (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/customize_colors.htm)
