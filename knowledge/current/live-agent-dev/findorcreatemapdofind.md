---
title: "findOrCreate.map.doFind"
domain: live-agent-dev
topic: findorcreatemapdofind
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.101Z
estimatedTokens: 482
keywords: [findOrCreate.map.doFind, specify, search, against, customer, records, completes, pre-chat, form, Usage]
---

# findOrCreate.map.doFind

> Use the findOrCreate.map.doFind method to specify which fields to search against existing
    customer records when a customer completes a pre-chat form.

# findOrCreate.map.doFind

Use the findOrCreate.map.doFind method to specify which fields to search against existing customer records when a customer completes a pre-chat form.

## Usage

Specifies which fields in your findOrCreate.map method to use to search for an existing record. You can search for one or more fields within records, but note that when multiple fields are specified, the logic relationship is AND. This means that all specified fields must match an existing record for it to be found.

When using custom fields, follow these guidelines:

-   Checkboxes have valid values true and false when trying to search or create related to custom fields.
-   Dates use the format YYYY-MM-DD.
-   Numbers in the Currency field don’t have a currency sign.
-   Numbers in the Percentage field don’t have a percentage sign.

Available in API versions 29.0 and later.

## Syntax

<input type= "hidden" name= "liveagent.prechat.findorcreate.map.doFind: **String** entityName" value= "**String** fieldName, **Boolean** find;" />

## Parameters

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| entityName | String | The type of record to search for or create when an agent accepts a chat with a customer—for example, a contact record. | Available in API versions 29.0 and later. |
| fieldName | String | The name of the API field to search for in existing records.NoteTo find the API name of a field for a standard object, see our API documentation. For non-standard objects, look at the field detail for the object under Setup. | Available in API versions 29.0 and later. |
| find | Boolean | Specifies whether to search for existing records that contain the field fieldName (true) or not (false).NoteYou can specify only the fields for which find equals true. The method doesn’t search for records containing fields for which find equals false. | Available in API versions 29.0 and later. |
