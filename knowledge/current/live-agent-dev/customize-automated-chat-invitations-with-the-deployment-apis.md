---
title: "Customize Automated Chat Invitations with the Deployment
    APIs"
domain: live-agent-dev
topic: customize-automated-chat-invitations-with-the-deployment-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.021Z
estimatedTokens: 547
keywords: [Customize, Automated, Chat, Invitations, Deployment, APIs, appear, customers, website]
---

# Customize Automated Chat Invitations with the Deployment
    APIs

> Customize automated chat invitations that appear to customers on your
    website.

# Customize Automated Chat Invitations with the Deployment APIs

Customize automated chat invitations that appear to customers on your website.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=live_agent_dev)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Use the following deployment methods to customize your automated chat invitations.

-   **[setCustomVariable](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_automated_chat_invitations_API_setCustomVariable.htm)**
    Use the setCustomVariable method to create customized criteria in your sending rules that must be met in order for your automated invitation to be sent to customers.
-   **[rejectChat](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_automated_chat_invitations_API_rejectChat.htm)**
    Use the rejectChat method to reject and retract an invitation that’s been sent to a customer.
-   **[addButtonEventHandler](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_automated_chat_invitations_API_addButtonEventHandler.htm)**
    Use the addButtonEventHandler method to define an automated invitation’s behavior when certain events occur.
-   **[Automated Chat Invitation Code Sample](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_automated_chat_invitations_code_sample.htm)**
    Test and preview how automated chat invitations can work on your website using this code sample.

## Related Topics

- setCustomVariable (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_automated_chat_invitations_API_setCustomVariable.htm)
- rejectChat (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_automated_chat_invitations_API_rejectChat.htm)
- addButtonEventHandler (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_automated_chat_invitations_API_addButtonEventHandler.htm)
- Automated Chat Invitation Code Sample (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_automated_chat_invitations_code_sample.htm)
