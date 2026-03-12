---
title: "findOrCreate.map.isExactMatch"
domain: live-agent-dev
topic: findorcreatemapisexactmatch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.106Z
estimatedTokens: 392
keywords: [findOrCreate.map.isExactMatch, specify, whether, match, record, conduct, search, findOrCreate.map, Usage]
---

# findOrCreate.map.isExactMatch

> Use the findOrCreate.map.isExactMatch method to specify whether a field value must
    exactly match the field value in an existing record when you conduct a search with the
    findOrCreate.map method.

# findOrCreate.map.isExactMatch

Use the findOrCreate.map.isExactMatch method to specify whether a field value must exactly match the field value in an existing record when you conduct a search with the findOrCreate.map method.

## Usage

Specifies which fields in your findOrCreate.map method require an exact field value match when you search for existing records. You can specify this for one or more fields within records.

Available in API versions 29.0 and later.

## Syntax

<input type= "hidden" name= "liveagent.prechat.findorcreate.map.isExactMatch: **String** entityName" value= "**String** fieldName, **Boolean** exactMatch;" />

## Parameters

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| entityName | String | The type of record to search for or create when an agent accepts a chat with a customer—for example, a contact record. | Available in API versions 29.0 and later. |
| fieldName | String | The API name of the field to search for in existing records.NoteTo find the API name of a field for a standard object, see our API documentation. For non-standard objects, look at the field detail for the object under Setup. | Available in API versions 29.0 and later. |
| find | Boolean | Specifies whether to search for existing records that contain an exact match to the field fieldName (true) or not (false).NoteYou only need to specify fields for which exactMatch equals true. The method will not search for records containing fields for which exactMatch equals false. | Available in API versions 29.0 and later. |
