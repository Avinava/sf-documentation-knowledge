---
title: "Change the Embedded Chat Window Appearance and Behavior"
domain: snapins-web-dev
topic: change-the-embedded-chat-window-appearance-and-behavior
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.349Z
estimatedTokens: 799
keywords: [Change, Embedded, Chat, Window, Appearance, Behavior, affect, specific, stages, Customize, pre-chat, image, background, logo, waiting]
---

# Change the Embedded Chat Window Appearance and Behavior

> Set parameters that affect the appearance and behavior of the chat window
   at specific stages. Customize the pre-chat image background, logo, waiting state image, and your
   agent avatar and Einstein Bot pictures. Customize the text that appears on the window when chat
   is loading, when agents are online, and when agents are offline. Set a routing order and load
   your branded files for custom chat events.

# Change the Embedded Chat Window Appearance and Behavior

Set parameters that affect the appearance and behavior of the chat window at specific stages. Customize the pre-chat image background, logo, waiting state image, and your agent avatar and Einstein Bot pictures. Customize the text that appears on the window when chat is loading, when agents are online, and when agents are offline. Set a routing order and load your branded files for custom chat events.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

-   **[Specify Chat Images](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_set_chat_images.htm)**
    Use your own images for the pre-chat banner, header logo, waiting state image, and the agent and Einstein Bots avatars. We recommend adding your images in Embedded Service setup, but you can use these settings to override what you created in setup.
-   **[Display the Default Chat Button](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_display_chat_button.htm)**
    The default chat button connects your customers to the chat window so they can start a chat from your web page. Valid values are true and false.
-   **[Customize the Online, Offline, and Loading Chat Text](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_set_chat_text.htm)**
    Set the text that’s displayed to your customers in the chat window when there are agents available, when there aren’t agents available, and when the chat is connecting to an agent. We recommend customizing your labels in Embedded Service setup, but you can use these settings to override what you have in Setup.
-   **[Set a Routing Order](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_set_routing_order.htm)**
    Set a list of user IDs and button IDs on your Embedded Service deployment to replace the assigned chat button. When a customer requests a chat, it’s routed to the first available user or button in the list.
-   **[Load Files for Custom Chat Events](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_set_custom_events.htm)**
    Load your own JavaScript and CSS files into Embedded Chat to handle and style custom chat events. Your scripts and styles are loaded only after the agent accepts the chat request.
-   **[Modify the Post-Chat](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_postchat.htm)**
    After you add a post-chat URL for your chat button, you can specify whether it automatically opens or not. Valid values are true and false.

## Related Topics

- Specify Chat Images (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_set_chat_images.htm)
- Display the Default Chat Button (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_display_chat_button.htm)
- Customize the Online, Offline, and Loading Chat Text (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_set_chat_text.htm)
- Set a Routing Order (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_set_routing_order.htm)
- Load Files for Custom Chat Events (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_set_custom_events.htm)
- Modify the Post-Chat (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_postchat.htm)
