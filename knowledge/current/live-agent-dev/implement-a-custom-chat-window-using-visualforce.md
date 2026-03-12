---
title: "Implement a Custom Chat Window Using Visualforce"
domain: live-agent-dev
topic: implement-a-custom-chat-window-using-visualforce
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:50.136Z
estimatedTokens: 696
keywords: [Implement, Custom, Chat, Window, Visualforce, windows, visitors, exchange, messages, support, agents, deployments, includes, customized, add]
---

# Implement a Custom Chat Window Using Visualforce

> Chat windows are what visitors use to exchange messages with support agents. Each of your
        Chat deployments includes a chat window. You can create a customized chat window by using
        Visualforce, and you can add styling and functionality with HTML, CSS, and
        JavaScript.

# Implement a Custom Chat Window Using Visualforce

Chat windows are what visitors use to exchange messages with support agents. Each of your Chat deployments includes a chat window. You can create a customized chat window by using Visualforce, and you can add styling and functionality with HTML, CSS, and JavaScript.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=live_agent_dev)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Einstein Bots doesn’t support menus and quick replies in custom Chat windows. To learn more about Einstein Bots Chat channel specifications, see [Deploy Your Bot to Channels](https://help.salesforce.com/articleView?id=service.bots_service_deploy_to_channels.htm&type=5&language=en_US "HTML (New Window)").

Avoid linking to Salesforce CSS stylesheets when you customize your chat window. They aren’t versioned and can change without notice. Instead, we recommend that you use Visualforce components that mimic Salesforce styles instead of directly referencing the stylesheets. That way, you’re always in control of how your chat window looks. See [Using Styles from Salesforce Stylesheets](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_styling_using_salesforce_stylesheets.htm "HTML (New Window)") to lean how to disable our stylesheets.

For more information on using Visualforce, see the [Visualforce Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/ "HTML (New Window)").

-   **[Chat Visualforce Components](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_customizing_chat_windows_visualforce_components.htm)**
    Use Visualforce components to customize the appearance and behavior of chat windows.
-   **[Chat Visualforce Components Code Sample](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_visualforce_components_code_sample.htm)**
    Use this code sample to test and preview how Visualforce components can help you customize your chat windows.

## Related Topics

- Chat Visualforce Components (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_customizing_chat_windows_visualforce_components.htm)
- Chat Visualforce Components Code Sample (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_visualforce_components_code_sample.htm)
