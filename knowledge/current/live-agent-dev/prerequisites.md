---
title: "Prerequisites"
domain: live-agent-dev
topic: prerequisites
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:50.169Z
estimatedTokens: 438
keywords: [Prerequisites, legacy, chat, product, scheduled, retirement, February, maintenance, mode, until, phase, continue, longer, recommend, implement]
---

# Prerequisites

> The legacy chat product is
                        scheduled for retirement on February 14, 2026, and is in maintenance mode
                        until then. During this phase, you can continue to use chat, but we no
                        longer recommend that you implement new chat channels. T

# Prerequisites

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=live_agent_dev)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Before you customize Chat, make sure:

-   Chat is enabled in your organization.
-   Your administrator has granted you a Chat feature license. Although you can customize the product without a feature license, having one will allow you to access and test your customizations.
-   You've created a Salesforce site and uploaded images as static resources for your chat buttons and windows. If you plan to customize Chat without using a Salesforce site, skip this step.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_dev)

#### Note

When using a Salesforce site for Chat custom chat pages, avoid using the path “/liveagent” in the URL. This path sometimes causes errors with the incoming and outgoing chat notification sounds, so agents will be unable to hear their chat updates.
