---
title: "findOrCreate.map.doCreate"
domain: live-agent-dev
topic: findorcreatemapdocreate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.096Z
estimatedTokens: 399
keywords: [findOrCreate.map.doCreate, specify, findOrCreate.map, new, record, isn’t, found, Usage]
---

# findOrCreate.map.doCreate

> Use the findOrCreate.map.doCreate method to specify which fields in findOrCreate.map
    method to use to create a new record if an existing record isn’t found.

# findOrCreate.map.doCreate

Use the findOrCreate.map.doCreate method to specify which fields in findOrCreate.map method to use to create a new record if an existing record isn’t found.

## Usage

Specifies which fields in your findOrCreate.map method to use to create a new record if an existing record isn’t found. You can specify one or more fields for creating new records.

Available in API versions 29.0 and later.

## Syntax

<input type= "hidden" name= "liveagent.prechat.findorcreate.map.doCreate: **String** entityName" value= "**String** fieldName, **Boolean** create;" />

## Parameters

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| entityName | String | The type of record to create when an agent accepts a chat with a customer and an existing record isn’t found—for example, a contact record. | Available in API versions 29.0 and later. |
| fieldName | String | The API name of the field to include in new records.The findOrCreate method begins the API call that finds existing records or create new records when an agent begins a chat with a customer. You must use this method before calling any of the other findOrCreate sub-methods for finding or creating records with the Deployment API. | Available in API versions 29.0 and later. |
| create | Boolean | Specifies whether to create a new record that contains the field fieldName (true) or not (false).You only need to specify fields for which create equals true. The method will not create records containing fields for which create equals false. | Available in API versions 29.0 and later. |
