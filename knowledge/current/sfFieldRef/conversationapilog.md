---
title: "ConversationApiLog"
domain: sfFieldRef
topic: conversationapilog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.565Z
estimatedTokens: 453
keywords: [ConversationApiLog, Logs, API, operation, specific, conversation, Service, version, 63.0, later]
---

# ConversationApiLog

> Logs of an API operation on a specific conversation object done using the
         Conversation Service API. This object is available in API version 63.0 and later.

# ConversationApiLog

Logs of an API operation on a specific conversation object done using the Conversation Service API. This object is available in API version 63.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ConversationApiLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_conversationapilog.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Action | Action | picklist |  | 255 |  |  |
| Context | Context | string |  | 4000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Conversation API Log ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Conversation API Log Name | string |  | 255 |  |  |
| Operation | Operation | string |  | 100 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Parameter | Parameter | string |  | 4000 |  |  |
| RequestedById | User ID | reference |  | 18 |  |  |
| RequestedDate | Requested Date | datetime |  |  |  |  |
| RequestedEntityIdentifier | Requested Entity Identifier | string |  | 15 |  |  |
| RequestedEntityType | Requested Entity Type | picklist |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| StatusHistory | Status History | string |  | 4000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
