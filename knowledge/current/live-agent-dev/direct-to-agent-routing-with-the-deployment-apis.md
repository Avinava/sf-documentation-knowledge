---
title: "Direct-to-Agent Routing with the Deployment APIs"
domain: live-agent-dev
topic: direct-to-agent-routing-with-the-deployment-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.186Z
estimatedTokens: 571
keywords: [Direct-to-Agent, Routing, Deployment, APIs, lets, route, chats, specific, button, agent]
---

# Direct-to-Agent Routing with the Deployment APIs

> You can set up direct-to-agent routing that lets you to route chats from a specific
        button to a single agent.

# Direct-to-Agent Routing with the Deployment APIs

You can set up direct-to-agent routing that lets you to route chats from a specific button to a single agent.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=live_agent_dev)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Use the following Deployment API methods to set up direct-to-agent routing with fallback routing enabled in case the agent isn’t available for chat.

-   [startChat](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_launching_chat_request_API_startChat.htm "Use the startChat method to request a chat from a button in a new window.")
-   [startChatWithWindow](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_launching_chat_request_API_startChatWithWindow.htm "Use the startChatWithWindow method to request a chat from a button using the name of a window.")
-   [showWhenOnline](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_chat_buttons_API_showWhenOnline.htm "Use the showWhenOnline method to specify what customers see when a particular button is online.")
-   [showWhenOffline](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_chat_buttons_API_showWhenOffline.htm "Use the showWhenOffline method to specify what customers see when a particular button is offline.")

-   **[Direct-to-Agent Routing Code Sample](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_direct_to_agent_code_sample.htm)**
    Implement direct-to-agent routing using the Deployment API.

## Related Topics

- startChat (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_launching_chat_request_API_startChat.htm)
- startChatWithWindow (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_launching_chat_request_API_startChatWithWindow.htm)
- showWhenOnline (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_chat_buttons_API_showWhenOnline.htm)
- showWhenOffline (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_chat_buttons_API_showWhenOffline.htm)
- Direct-to-Agent Routing Code Sample (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_direct_to_agent_code_sample.htm)
