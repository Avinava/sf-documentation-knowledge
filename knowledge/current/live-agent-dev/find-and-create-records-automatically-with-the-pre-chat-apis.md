---
title: "Find and Create Records Automatically with the Pre-Chat APIs"
domain: live-agent-dev
topic: find-and-create-records-automatically-with-the-pre-chat-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.088Z
estimatedTokens: 692
keywords: [Records, Automatically, Pre-Chat, APIs, API, search, customer, completes, form]
---

# Find and Create Records Automatically with the Pre-Chat APIs

> Use the Pre-Chat API to search for or create customer records
automatically when a customer completes a pre-chat form.

# Find and Create Records Automatically with the Pre-Chat APIs

Use the Pre-Chat API to search for or create customer records automatically when a customer completes a pre-chat form.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=live_agent_dev)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

-   **[findOrCreate.map](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_map.htm)**
    Use the findOrCreate.map method to search for or create records that contain specific customer details.
-   **[findOrCreate.saveToTranscript](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_saveToTranscript.htm)**
    Use the findOrCreate.saveToTranscript method to find or create a record and save it to the chat transcript associated with the chat.
-   **[findOrCreate.showOnCreate](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_showOnCreate.htm)**
    Use the findOrCreate.showOnCreate method to find or create a record and automatically open it in a subtab in the Salesforce console.
-   **[findOrCreate.linkToEntity](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_linkToEntity.htm)**
    Use the findOrCreate.linkToEntity method to link the record you found or created to another record type.
-   **[findOrCreate.displayToAgent](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_displayToAgent.htm)**
    Use the findOrCreate.displayToAgent method to specify which pre-chat details will be displayed to agents for incoming chats in the widget and in the Details tab when they receive a chat request.
-   **[Find and Create Records Pre-Chat API Code Sample](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_code_sample.htm)**
    Test and preview how to automatically create records when a customer completes a pre-chat form using this code sample.

## Related Topics

- findOrCreate.map (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_map.htm)
- findOrCreate.saveToTranscript (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_saveToTranscript.htm)
- findOrCreate.showOnCreate (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_showOnCreate.htm)
- findOrCreate.linkToEntity (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_linkToEntity.htm)
- findOrCreate.displayToAgent (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_displayToAgent.htm)
- Find and Create Records Pre-Chat API Code Sample (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_code_sample.htm)
