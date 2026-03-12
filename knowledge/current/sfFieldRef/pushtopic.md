---
title: "PushTopic"
domain: sfFieldRef
topic: pushtopic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:10.972Z
estimatedTokens: 417
keywords: [PushTopic, query, basis, notifying, Streaming, API, clients, changes, records, org, version, 21.0, later]
---

# PushTopic

> Represents a query that is the basis for notifying Streaming API clients of changes to records in an org. This object is available in API version 21.0 and later.

# PushTopic

Represents a query that is the basis for notifying Streaming API clients of changes to records in an org. This object is available in API version 21.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PushTopic](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_pushtopic.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApiVersion | API Version | double |  |  | 18 | 1 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 400 |  |  |
| Id | Push Topic ID | id |  | 18 |  |  |
| IsActive | Is Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Topic Name | string |  | 25 |  |  |
| NotifyForFields | Notify For Fields | picklist |  | 40 |  |  |
| NotifyForOperationCreate | Create | boolean |  |  |  |  |
| NotifyForOperationDelete | Delete | boolean |  |  |  |  |
| NotifyForOperationUndelete | Undelete | boolean |  |  |  |  |
| NotifyForOperationUpdate | Update | boolean |  |  |  |  |
| NotifyForOperations | Notify For Operations | picklist |  | 40 |  |  |
| Query | SOQL Query | string |  | 1300 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
