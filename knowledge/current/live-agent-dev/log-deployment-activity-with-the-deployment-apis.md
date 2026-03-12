---
title: "Log Deployment Activity with the Deployment APIs"
domain: live-agent-dev
topic: log-deployment-activity-with-the-deployment-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.201Z
estimatedTokens: 443
keywords: [Log, Deployment, Activity, APIs, occurs, particular]
---

# Log Deployment Activity with the Deployment APIs

> Log the activity that occurs in a particular deployment.

# Log Deployment Activity with the Deployment APIs

Log the activity that occurs in a particular deployment.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=live_agent_dev)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Logging lets you store information about the activity that occurs within a customer’s Web browser as they chat with an agent through a particular deployment. This is particularly helpful when you’re implementing automated invitations and you want to test or troubleshoot your sending rules. You can add these methods as an additional script within the code that’s automatically generated when you create a deployment.

Use the following deployment methods to enable logging on a particular deployment.

-   **[enableLogging](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_logging_API_enableLogging.htm)**
    Use the enableLogging deployment method to enable logging on a particular deployment. Available in API versions 28.0 and later.

## Related Topics

- enableLogging (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_logging_API_enableLogging.htm)
