---
title: "findOrCreate"
domain: live-agent-dev
topic: findorcreate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.066Z
estimatedTokens: 770
keywords: [findOrCreate, records, certain, criteria, Usage, Limitations]
---

# findOrCreate

> Use the findOrCreate method to find existing records or create records based on certain
    criteria.

# findOrCreate

Use the findOrCreate method to find existing records or create records based on certain criteria.

## Usage

Finds or creates a record of the specified type when a chat is routed by Omni-Channel or when an agent accepts a chat request that is routed by Live Agent routing. For chats routed by Omni-Channel, the findOrCreate code triggers even if the chat visitor cancels the chat before the agent accepts. For chats routed by Live Agent routing, the code triggers only when an agent accepts the chat request.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_dev)

#### Note

The findOrCreate method begins the API call that finds existing records or create records when an agent begins a chat with a customer. Use this method before calling any of the other findOrCreate submethods for finding or creating records with the Deployment API.

Available in API versions 29.0 and later.

## Limitations

For security reasons, this API is disabled by default on new orgs. You can enable this feature from the Chat Settings page in Setup. This page also allows you to create an allowlist for allowed objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_dev)

#### Note

If this feature is enabled and no objects are selected in the allowlist, all valid objects are allowed.

Implement the findOrCreate call in an agent session and not a bot session. If findOrCreate matches multiple records, the agent can choose which record to attach but the bot doesn't have a way of doing that.

Other limitations:

-   For find, we don’t allow finding profiles or permission sets.

-   For create, we don’t allow creating profiles or permission sets.


## Syntax

liveagent.findOrCreate(**String** EntityName)

## Parameters

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| EntityName | String | The type of record to search for or create when an agent accepts a chat with a customer—for example, a contact record. | Available in API versions 29.0 and later. |

-   **[findOrCreate.map](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_API_map.htm)**
    Use the findOrCreate.map method to search for or create records that contain specific customer details.
-   **[findOrCreate.saveToTranscript](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_API_saveToTranscript.htm)**
    Use the findOrCreate.saveToTranscript method to save the record you find or create to the chat transcript associated with the chat.
-   **[findOrCreate.showOnCreate](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_API_showOnCreate.htm)**
    Use the findOrCreate.showOnCreate method to automatically open the record you create in a subtab in the Salesforce console.
-   **[findOrCreate.linkToEntity](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_API_linkToEntity.htm)**
    Use the findOrCreate.linkToEntity method to link the record you found or created to another record type.

## Related Topics

- findOrCreate.map (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_API_map.htm)
- findOrCreate.saveToTranscript (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_API_saveToTranscript.htm)
- findOrCreate.showOnCreate (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_API_showOnCreate.htm)
- findOrCreate.linkToEntity (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_API_linkToEntity.htm)
