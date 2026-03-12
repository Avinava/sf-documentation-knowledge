---
title: "Set Up Direct-to-Agent Chat Routing with the Deployment APIs"
domain: live-agent-dev
topic: set-up-direct-to-agent-chat-routing-with-the-deployment-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.183Z
estimatedTokens: 519
keywords: [Direct-to-Agent, Chat, Routing, Deployment, APIs, route, chats, originate, specific, button, invite, agent, editing, few, API]
---

# Set Up Direct-to-Agent Chat Routing with the Deployment APIs

> You can route chats that originate from a specific button or invite to a specific agent
    by editing a few parameters in the Chat Deployment API. You can set chats to fallback to another
    button or queue if the specified agent isn’t available.

# Set Up Direct-to-Agent Chat Routing with the Deployment APIs

You can route chats that originate from a specific button or invite to a specific agent by editing a few parameters in the Chat Deployment API. You can set chats to fallback to another button or queue if the specified agent isn’t available.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=live_agent_dev)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Direct-to-agent routing lets your agents provide visitors with a way to contact them directly. This is useful when a visitor’s issue requires a follow-up conversation, because the agent can provide a direct-to-agent link that ensures the visitor won’t have to start over with a new agent.

-   **[Direct-to-Agent Routing with the Deployment APIs](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_direct_to_agent_with_deployment_API.htm)**
    You can set up direct-to-agent routing that lets you to route chats from a specific button to a single agent.
-   **[Fallback Routing in Pre-Chat Forms](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_direct_to_agent_fallback_in_prechat_form.htm)**
    Set fallback routing rules in pre-chat forms in case the agent specified for direct-to-agent routing isn’t available when a chat is received.

## Related Topics

- Direct-to-Agent Routing with the Deployment APIs (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_direct_to_agent_with_deployment_API.htm)
- Fallback Routing in Pre-Chat Forms (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_direct_to_agent_fallback_in_prechat_form.htm)
