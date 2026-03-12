---
title: "Customize Chat Buttons with the Deployment APIs"
domain: live-agent-dev
topic: customize-chat-buttons-with-the-deployment-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.041Z
estimatedTokens: 738
keywords: [Customize, Chat, Buttons, Deployment, APIs, how, chats, start, customers]
---

# Customize Chat Buttons with the Deployment APIs

> Customize your chat buttons and set how chats start for your customers.

# Customize Chat Buttons with the Deployment APIs

Customize your chat buttons and set how chats start for your customers.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=live_agent_dev)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Each chat button includes code that you place on your website to let customers start a chat. Chat automatically handles the button's availability based on your agents’ availability and your org's settings. It also handles starting the chat request from the button.

Use the following deployment methods to customize your chat buttons and starting chats. You can add any of these methods as additional scripts within the code that’s automatically generated when you create a deployment.

-   **[showWhenOnline](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_chat_buttons_API_showWhenOnline.htm)**
    Use the showWhenOnline method to specify what customers see when a particular button is online.
-   **[showWhenOffline](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_chat_buttons_API_showWhenOffline.htm)**
    Use the showWhenOffline method to specify what customers see when a particular button is offline.
-   **[addButtonEventHandler](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_chat_buttons_API_addButtonEventHandler.htm)**
    Use the addButtonEventHandler method to define a chat button’s behavior when certain events occur. Available in API versions 28.0 and later
-   **[startChat](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_launching_chat_request_API_startChat.htm)**
    Use the startChat method to request a chat from a button in a new window.
-   **[startChatWithWindow](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_launching_chat_request_API_startChatWithWindow.htm)**
    Use the startChatWithWindow method to request a chat from a button using the name of a window.
-   **[Corresponding Calls for Chat Buttons](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_startChat_invocations.htm)**
    Make sure your chats start correctly by aligning your calls when using buttons, direct-to-agent, and agent with fallback-to-button.

## Related Topics

- showWhenOnline (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_chat_buttons_API_showWhenOnline.htm)
- showWhenOffline (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_chat_buttons_API_showWhenOffline.htm)
- addButtonEventHandler (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_chat_buttons_API_addButtonEventHandler.htm)
- startChat (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_launching_chat_request_API_startChat.htm)
- startChatWithWindow (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_launching_chat_request_API_startChatWithWindow.htm)
- Corresponding Calls for Chat Buttons (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_startChat_invocations.htm)
