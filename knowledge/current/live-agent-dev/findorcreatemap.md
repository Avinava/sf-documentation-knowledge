---
title: "findOrCreate.map"
domain: live-agent-dev
topic: findorcreatemap
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.076Z
estimatedTokens: 584
keywords: [findOrCreate.map, search, records, contain, specific, customer, Usage]
---

# findOrCreate.map

> Use the findOrCreate.map method to search for or
    create records that contain specific customer details.

# findOrCreate.map

Use the findOrCreate.map method to search for or create records that contain specific customer details.

## Usage

Searches for or creates records that contain the customer data that’s specified in the pre-chat form that the customer completes. This method maps the value of the custom details to the fields on the specified record in the Salesforce console.

You can call the findOrCreate.map method as many times as necessary to find the appropriate records. You can list multiple fields and their corresponding details to map the detail values to the appropriate fields within the record.

Available in API versions 29.0 and later.

## Syntax

<input type= "hidden" name= "liveagent.prechat.findorcreate.map: **String** entityName" value= "**String** fieldName, **String** detailName;" />

## Parameters

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| entityName | String | The type of record to search for or create when an agent accepts a chat with a customer, for example, a contact record | Available in API versions 29.0 and later. |
| fieldName | String | The name of the field in the record EntityName to which to map the corresponding custom detail value | Available in API versions 29.0 and later. |
| detailName | String | The value of the custom detail to map to the corresponding field fieldName | Available in API versions 29.0 and later. |

-   **[findOrCreate.map.doFind](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_doFind.htm)**
    Use the findOrCreate.map.doFind method to specify which fields to search against existing customer records when a customer completes a pre-chat form.
-   **[findOrCreate.map.isExactMatch](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_isExactMatch.htm)**
    Use the findOrCreate.map.isExactMatch method to specify whether a field value must exactly match the field value in an existing record when you conduct a search with the findOrCreate.map method.
-   **[findOrCreate.map.doCreate](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_doCreate.htm)**
    Use the findOrCreate.map.doCreate method to specify which fields in findOrCreate.map method to use to create a new record if an existing record isn’t found.

## Related Topics

- findOrCreate.map.doFind (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_doFind.htm)
- findOrCreate.map.isExactMatch (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_isExactMatch.htm)
- findOrCreate.map.doCreate (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_creating_records_prechat_API_doCreate.htm)
