---
title: "RecordActionHistory"
domain: sfFieldRef
topic: recordactionhistory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.730Z
estimatedTokens: 392
keywords: [RecordActionHistory, lifecycle, RecordAction, goes, different, states, API, version, 44.0, later]
---

# RecordActionHistory

> Represents the lifecycle of a RecordAction as it goes through
         different states. Available in API version 44.0 and later.

# RecordActionHistory

Represents the lifecycle of a RecordAction as it goes through different states. Available in API version 44.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [RecordActionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_recordactionhistory.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionDefinitionApiName | Action Definition API Name | string |  | 255 |  |  |
| ActionDefinitionLabel | Action Definition Label | string |  | 255 |  |  |
| ActionType | Action Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Record Action History ID | id |  | 18 |  |  |
| IsMandatory | Is Mandatory | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LoggedTime | Logged Time | datetime |  |  |  |  |
| ParentRecordId | Parent Record ID | reference |  | 18 |  |  |
| Pinned | Pinned | picklist |  | 255 |  |  |
| RecordActionId | RecordAction Id | string |  | 18 |  |  |
| State | State | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
