---
title: "Find and Create Records Automatically with the Deployment APIs"
domain: live-agent-dev
topic: find-and-create-records-automatically-with-the-deployment-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.062Z
estimatedTokens: 622
keywords: [Records, Automatically, Deployment, APIs, API, search, Salesforce, records—like, case, contact, account, lead—automatically, agent, begins, chat]
---

# Find and Create Records Automatically with the Deployment APIs

> Use the Deployment API to search for or create Salesforce records—like a case,
      contact, account, or lead—automatically when an agent begins a chat with a
      customer.

# Find and Create Records Automatically with the Deployment APIs

Use the Deployment API to search for or create Salesforce records—like a case, contact, account, or lead—automatically when an agent begins a chat with a customer.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=live_agent_dev)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

You can add any of these methods as additional scripts within the code that’s automatically generated when you create a deployment.

-   **[addCustomDetail](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_customizing_visitor_details_API_addCustomDetail.htm)**
    Use the addCustomDetail method to add custom details for each chat visitor.
-   **[findOrCreate](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_API_findOrCreate.htm)**
    Use the findOrCreate method to find existing records or create records based on certain criteria.
-   **[setName](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_customizing_visitor_details_API_setName.htm)**
    Use the setName method to set the visitor name displayed in the Chat console or the Salesforce console.
-   **[Search for Knowledge Articles with the Deployment APIs](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_knowledge_API.htm)**
    Use the Deployment API to search for Knowledge articles based on the information that a customer provides in a pre-chat form.
-   **[Find and Create Records Deployment API Code Sample](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_code_sample.htm)**
    Test and preview how automatically creating records can work with your Chat deployments using this code sample.

## Related Topics

- addCustomDetail (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_customizing_visitor_details_API_addCustomDetail.htm)
- findOrCreate (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_API_findOrCreate.htm)
- setName (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_customizing_visitor_details_API_setName.htm)
- Search for Knowledge Articles with the Deployment APIs (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_knowledge_API.htm)
- Find and Create Records Deployment API Code Sample (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_code_sample.htm)
