---
title: "Create Deployments"
domain: live-agent-dev
topic: create-deployments
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:50.059Z
estimatedTokens: 631
keywords: [Deployments, deployment, host, Chat, website, includes, window, visitors, support, agents]
---

# Create Deployments

> Create a deployment to host Chat on your website. Each deployment includes a chat window,
        which visitors use to chat with support agents.

# Create Deployments

Create a deployment to host Chat on your website. Each deployment includes a chat window, which visitors use to chat with support agents.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=live_agent_dev)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

You can customize your Chat deployments using the Deployment API to meet your company’s needs. After completing these steps, the deployment code generates for you to place on the pages that you want to enable for chat and tracking. Pages with the deployment code are automatically tracked as part of the visitor’s chat session, and they’re shown to the agent in the Console when the visitor requests a chat. This tracking also enables automated invitations to be presented to customers.

To create a deployment:

1.  From Setup, enter Deployments in the Quick Find box, then select **Deployments**.
2.  Click **New**.
3.  Enter a name for the deployment. This name, or a version of it, automatically becomes the Developer Name.
4.  Enter a title for the chat window.
5.  Select Allow Visitors to Save Transcripts to let visitors download a copy of the chat session.
6.  If you want to use branding images that you’ve hosted on a Salesforce site, select the site to associate it with the deployment.
7.  (Optional) In Chat Window Branding Image, select the graphic to appear in the chat window.
8.  (Optional) In Mobile Chat Window Branding Image, select the graphic that visitors using mobile devices see in the chat window.
9.  Click **Save**. Salesforce generates the deployment code.
10.  Copy the deployment code and paste it on each Web page where you want to deploy Chat. For best performance, paste the code right before the closing body tag.
