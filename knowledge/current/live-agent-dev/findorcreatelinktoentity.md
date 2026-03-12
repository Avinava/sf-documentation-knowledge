---
title: "findOrCreate.linkToEntity"
domain: live-agent-dev
topic: findorcreatelinktoentity
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.070Z
estimatedTokens: 579
keywords: [findOrCreate.linkToEntity, link, record, found, created, another, Usage]
---

# findOrCreate.linkToEntity

> Use the findOrCreate.linkToEntity method to link the record you found or created to
    another record type.

# findOrCreate.linkToEntity

Use the findOrCreate.linkToEntity method to link the record you found or created to another record type.

## Usage

Links the record you’ve found or created using the [findOrCreate.map.doFind](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_doFind.htm "Use the findOrCreate.map.doFind method to specify which fields to search against existing customer records when a customer completes a pre-chat form.") and [findOrCreate.map.doCreate](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_doCreate.htm "Use the findOrCreate.map.doCreate method to specify which fields in findOrCreate.map method to use to create a new record if an existing record isn’t found.") methods to another record of a different record type that you created using a separate findOrCreate.map API call. For example, you can link a case record you found within your organization to a contact record you create.

The findOrCreate.linkToEntity method links the found or created record to one record. If you try to link a found or created record to multiple records, the found or created record is linked only to the first record.

The findOrCreate.linkToEntity method can’t be used to populate fields on records that you create by using the [findOrCreate](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_API_findOrCreate.htm "Use the findOrCreate method to find existing records or create records based on certain criteria.") API call. Instead, use the [findOrCreate.map method](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_map.htm#live_agent_creating_records_prechat_API_map "Use the findOrCreate.map method to search for or create records that contain specific customer details.") to update field values on records.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_dev)

#### Note

You can only link records if the parent record is created with a findOrCreate API call. You can’t link a child record to a record you found using the findOrCreate.linkToEntity method.

Available in API versions 29.0 and later.

## Syntax

<input type= "hidden" name= "liveagent.prechat.findorcreate.linkToEntity: **String** entityName" value= "**String** parentEntityName, **String** fieldName" />

## Parameters

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| entityName | String | The type of record which is linked to the parent record you found or created. | Available in API versions 29.0 and later. |
| parentEntityName | String | The type of parent record to link to the child record you found or created. | Available in API versions 29.0 and later. |
| fieldName | String | The name of the field in the record parentEntityName where the ID of the child record you found or created is saved. | Available in API versions 29.0 and later. |

## Related Topics

- findOrCreate (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_API_findOrCreate.htm)
- findOrCreate.map (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_API_map.htm)
- findOrCreate.map.doFind (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_doFind.htm)
- findOrCreate.map.doCreate (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_doCreate.htm)
- findOrCreate.map method (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_map.htm)
