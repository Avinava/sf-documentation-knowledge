---
title: "Set a Routing Order"
domain: snapins-web-dev
topic: set-a-routing-order
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.468Z
estimatedTokens: 549
keywords: [Routing, Order, user, IDs, button, Embedded, Service, deployment, replace, assigned, chat, customer, requests, it’s, routed]
---

# Set a Routing Order

> Set a list of user IDs and button IDs on your Embedded Service
      deployment to replace the assigned chat button. When a customer requests a chat, it’s routed
      to the first available user or button in the list.

# Set a Routing Order

Set a list of user IDs and button IDs on your Embedded Service deployment to replace the assigned chat button. When a customer requests a chat, it’s routed to the first available user or button in the list.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

embedded\_svc.settings.fallbackRouting = \["...", “...”\]

With version 5.0 and later code snippets, you have the following parameter available as a code comment.

//embedded\_svc.settings.fallbackRouting = \[\]; //An array of button IDs, user IDs, or userId\_buttonId

Accepted values are:

-   userId
-   buttonId
-   userId\_buttonId

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=snapins_web_dev)

#### Tip

This parameter overrides the assigned chat button you’ve set for the Embedded Service deployment in Setup. If the users and buttons you include in your array aren’t available, the chat isn’t routed to the assigned button. We recommend including your assigned button’s ID at the end of your array.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

#### Note

The language on a label is set only with the embedded\_svc.settings.language parameter, not the chat button.

#### See Also

-   [Fallback Routing in Pre-Chat Forms](https://developer.salesforce.com/docs/atlas.en-us.260.0.live_agent_dev.meta/live_agent_dev/live_agent_direct_to_agent_fallback_in_prechat_form.htm "Fallback Routing in Pre-Chat Forms - HTML (New Window)")
