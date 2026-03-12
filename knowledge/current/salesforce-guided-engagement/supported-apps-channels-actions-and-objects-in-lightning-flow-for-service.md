---
title: "Supported Apps, Channels, Actions, and Objects in Lightning Flow for Service"
domain: salesforce-guided-engagement
topic: supported-apps-channels-actions-and-objects-in-lightning-flow-for-service
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.937Z
estimatedTokens: 593
keywords: [Apps, Channels, Actions, Objects, Lightning, Flow, Service, console, standard, navigation, work, Open, CTI, phone, integration]
---

# Supported Apps, Channels, Actions, and Objects in Lightning Flow for Service

> Lightning Flow for Service is supported in Lightning console and standard navigation
  apps. You can set it up to work with Open CTI for phone integration, including support for unknown
  callers, and Chat in Lightning Experience for chat integration.

# Supported Apps, Channels, Actions, and Objects in Lightning Flow for Service

Lightning Flow for Service is supported in Lightning console and standard navigation apps. You can set it up to work with Open CTI for phone integration, including support for unknown callers, and Chat in Lightning Experience for chat integration.

The component can include these types of actions.

-   Active screen flows, field service mobile flows, and autolaunched flows

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

    #### Note

    Autolaunched flows run in the background without any user input. You can design an autolaunched flow to pause for a time interval or until a condition exists. When an autolaunched flow pauses, we show a message that the flow completed. When the flow resumes, however, it still has work to do.

-   Quick actions that are available in the record page layout
-   Recommendations that result from applying Next Best Action strategies

We support the Actions & Recommendations component on most Lightning pages, including custom Lightning pages. Custom sharing rules limit support for the component on a few Lightning pages. We don’t support the component on these pages, for example.

-   ContentDocuments
-   Events
-   Knowledge
-   Notes
-   Scorecard Associations
-   Scorecard Metrics
-   Tasks

We haven’t validated the component with these objects.

-   AiDataset
-   AiVisionModel
-   CustomPersonAccountChild\_\_p
-   CustomPersonChild\_\_p
-   CustomPerson\_\_p
-   LiveAgentSession
-   LiveChatVisitor
-   OpportunityLineItem
-   OpportunityLineItemSchedule
-   OrderItem
-   OrderItemTaxLineItem
-   ProcessInstanceStep
-   ProcessInstanceWorkitem
-   ServiceResourceCapacity
-   Shift

#### See Also

-   [*Salesforce Help*: Salesforce Console in Lightning Experience](https://help.salesforce.com/articleView?id=console_lex_intro.htm&language=en_US "Salesforce Help: Salesforce Console in Lightning Experience - HTML (New Window)")

-   [*Salesforce Help*: Salesforce Call Center](https://help.salesforce.com/articleView?id=cti_overview.htm&language=en_US "Salesforce Help: Salesforce Call Center - HTML (New Window)")

-   [*Salesforce Help*: Chat](https://help.salesforce.com/articleView?id=live_agent_intro.htm&language=en_US "Salesforce Help: Chat - HTML (New Window)")
