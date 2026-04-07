---
title: "Customize Chat Images with the"
domain: service-sdk-android
topic: customize-chat-images-with-the
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:27.739Z
estimatedTokens: 1028
keywords: [Customize, Chat, Images, Specify, throughout]
---

> Specify custom images used throughout the chat UI.

# Customize Chat Images with the

Specify custom images used throughout the chat UI.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

The Service Chat SDK allows you to customize chat images in the UI. If you want to change an image, override the Drawable for the image you want to customize using the exact same file name. The following table contains a list of the most common overridable images.

| Image File Name | Description |
| --- | --- |
| chat_ic_footer_menu.xml | Hamburger menu on the bottom of the window, next to the chat input. (48dp x 48dp) |
| chat_ic_minimized_connecting.xml | Connecting icon when the view is minimized. (32dp x 29dp) |
| chat_minimized_message_indicator.xml | Chat bubble unread indicator when the view is minimized. (27dp x 24dp) |
| common_ic_close.xml | Close button at the top left of the window. (24dp x 24dp) |
| salesforce_agent_avatar.xml | Agent avatar used beside the agent’s chat bubble. (36dp x 36dp) |
| salesforce_ic_message_send.xml | Send message button next to chat input. (24dp x 24dp) |
| salesforce_ic_minimize.xml | Minimize button at the top right of the window. (18dp x 18dp) |

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_android)

#### Note

To customize the chat bot avatar and the bot banner, see [Use Einstein Bots with Chat](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_einstein_bots.htm "With Einstein Bots, you can complement your chat support experience with a smart, automated system that saves your agents time and keeps your customers happy. Once you've set up Einstein Bots in your org, the SDK automatically begins the chat experience using your bot. You can design your bot to transfer to an agent at any point.").

For instance, if you’d like to override the agent avatar during a chat session, add a Drawable to your res/drawables folder with the name salesforce\_agent\_avator.xml. This value should contain image info about the agent avatar.

The following list contains *all* the customizable Drawables used throughout the chat UI: chat\_button.xml, chat\_button\_pressed.xml, chat\_footer\_menu\_item.xml, chat\_ic\_bubble.xml, chat\_ic\_close.xml, chat\_ic\_collapse.xml, chat\_ic\_footer\_menu.xml, chat\_ic\_last\_photo.xml, chat\_ic\_minimized\_connecting.xml, chat\_ic\_photo\_gallery.xml, chat\_menu\_bottom\_button.xml, chat\_menu\_button.xml, chat\_menu\_header.xml, chat\_menu\_solo\_button.xml, chat\_menu\_speech\_arrow.xml, chat\_menu\_top\_button.xml, chat\_minimized\_message\_indicator.xml, agent\_initial\_avatar.xml, link\_preview\_arrow.xml, progress\_indeterminate\_horizontal\_material.xml, salesforce\_agent\_avatar.xml, salesforce\_button.xml, salesforce\_button\_solid.xml, salesforce\_horizontal\_rule.xml, salesforce\_ic\_camera.xml, salesforce\_ic\_message\_send.xml, salesforce\_ic\_minimize.xml, salesforce\_loading\_ball.xml, salesforce\_message\_bubble\_overlay.xml, salesforce\_message\_bubble\_received.xml, salesforce\_message\_bubble\_received\_speech\_arrow.xml, salesforce\_message\_bubble\_sent.xml, salesforce\_minimized\_view.xml, salesforce\_minimized\_view\_toolbar.xml, vector\_drawable\_progress\_indeterminate\_horizontal.xml.

## Related Topics

- Use Einstein Bots with Chat (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_einstein_bots.htm)
