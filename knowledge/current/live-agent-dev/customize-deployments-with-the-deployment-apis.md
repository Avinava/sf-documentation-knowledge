---
title: "Customize Deployments with the Deployment APIs"
domain: live-agent-dev
topic: customize-deployments-with-the-deployment-apis
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:50.144Z
estimatedTokens: 841
keywords: [Customize, Deployments, Deployment, APIs, Chat, API]
---

# Customize Deployments with the Deployment APIs

> Customize deployments using the Chat Deployment API.

# Customize Deployments with the Deployment APIs

Customize deployments using the Chat Deployment API.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=live_agent_dev)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

A deployment is a place on your company’s website that’s enabled for Chat. A deployment consists of a few lines of JavaScript that you add to a Web page. Your organization can have a single Chat deployment or multiple deployments. For example, if you have a single service center that supports multiple websites, creating a separate deployment for each site enables you to present multiple chat windows to your visitors. Each deployment includes a chat window, which visitors use to chat with support agents.

The Deployment API is a JavaScript-based API that lets you customize your deployments to specify back-end functionality.

-   **[Create Deployments](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_new_deployments.htm)**
    Create a deployment to host Chat on your website. Each deployment includes a chat window, which visitors use to chat with support agents.
-   **[Log Deployment Activity with the Deployment APIs](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_logging_API.htm)**
    Log the activity that occurs in a particular deployment.
-   **[Customize Your Chat Window with the Deployment APIs](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_customizing_chat_window_API.htm)**
    Customize the dimensions of your customer-facing chat windows. This doesn’t apply for mobile-based browsers.
-   **[Customize Chat Buttons with the Deployment APIs](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_chat_buttons_API.htm)**
    Customize your chat buttons and set how chats start for your customers.
-   **[Find and Create Records Automatically with the Deployment APIs](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records.htm)**
    Use the Deployment API to search for or create Salesforce records—like a case, contact, account, or lead—automatically when an agent begins a chat with a customer.
-   **[Customize Automated Chat Invitations with the Deployment APIs](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_automated_chat_invitations_API.htm)**
    Customize automated chat invitations that appear to customers on your website.
-   **[Deployment API Code Sample](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_deployment_api_code_sample.htm)**
    Test and preview how the Deployment API can help you customize your deployments.

## Related Topics

- Create Deployments (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_new_deployments.htm)
- Log Deployment Activity with the Deployment APIs (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_logging_API.htm)
- Customize Your Chat Window with the Deployment APIs (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_customizing_chat_window_API.htm)
- Customize Chat Buttons with the Deployment APIs (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_chat_buttons_API.htm)
- Find and Create Records Automatically with the Deployment APIs (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records.htm)
- Customize Automated Chat Invitations with the Deployment APIs (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_automated_chat_invitations_API.htm)
- Deployment API Code Sample (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_deployment_api_code_sample.htm)
