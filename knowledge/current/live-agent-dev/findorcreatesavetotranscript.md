---
title: "findOrCreate.saveToTranscript"
domain: live-agent-dev
topic: findorcreatesavetotranscript
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.079Z
estimatedTokens: 192
keywords: [findOrCreate.saveToTranscript, save, record, chat, transcript, associated, Usage]
---

# findOrCreate.saveToTranscript

> Use the findOrCreate.saveToTranscript method to find or create a record and save it to
        the chat transcript associated with the chat.

# findOrCreate.saveToTranscript

Use the findOrCreate.saveToTranscript method to find or create a record and save it to the chat transcript associated with the chat.

## Usage

Saves the record that you found or created using the [findOrCreate.map.doCreate](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_doCreate.htm "Use the findOrCreate.map.doCreate method to specify which fields in findOrCreate.map method to use to create a new record if an existing record isn’t found.") or [findOrCreate.map.doFind](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_doFind.htm "Use the findOrCreate.map.doFind method to specify which fields to search against existing customer records when a customer completes a pre-chat form.") Pre-Chat API methods to the chat transcript associated with the chat when the chat ends.

Available in API versions 29.0 and later.

## Syntax

<input type="hidden" name= "liveagent.prechat.findorcreate.saveToTranscript: **String** entityName" value= "**String** transcriptFieldName" />

## Parameters

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| entityName | String | The type of record to search for or create when an agent accepts a chat with a customer—for example, a contact record. | Available in API versions 29.0 and later. |
| transcriptFieldName | String | The API name of the field on the chat transcript record to which to save the ID of the record you found or created. | Available in API versions 29.0 and later. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_dev)

#### Note

To find the API name of a field for a standard object, see our API documentation. For non-standard objects, look at the field detail for the object under **Setup**.

## Related Topics

- findOrCreate.map.doCreate (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_doCreate.htm)
- findOrCreate.map.doFind (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_doFind.htm)
