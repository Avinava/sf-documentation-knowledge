---
title: "Customize Your Chat Window with the Deployment APIs"
domain: live-agent-dev
topic: customize-your-chat-window-with-the-deployment-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.127Z
estimatedTokens: 482
keywords: [Customize, Chat, Window, Deployment, APIs, dimensions, customer-facing, windows, doesn’t, apply, mobile-based, browsers]
---

# Customize Your Chat Window with the Deployment APIs

> Customize the dimensions of your customer-facing chat windows. This doesn’t apply
            for mobile-based browsers.

# Customize Your Chat Window with the Deployment APIs

Customize the dimensions of your customer-facing chat windows. This doesn’t apply for mobile-based browsers.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=live_agent_dev)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Use the following deployment methods to customize the height and width of the chat window. You can add either of these methods as additional scripts within the code that’s automatically generated when you create a deployment.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_dev)

#### Note

This isn’t applicable for mobile browsers, where chats open to the full page.

-   **[setChatWindowHeight](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_customizing_chat_window_API_setWindowHeight.htm)**
    Use the setChatWindowHeight method to customize the height of your chat window.
-   **[setChatWindowWidth](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_customizing_chat_window_API_setWindowWidth.htm)**
    Use the setChatWindowWidth method to customize the width of your chat window.

## Related Topics

- setChatWindowHeight (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_customizing_chat_window_API_setWindowHeight.htm)
- setChatWindowWidth (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_customizing_chat_window_API_setWindowWidth.htm)
