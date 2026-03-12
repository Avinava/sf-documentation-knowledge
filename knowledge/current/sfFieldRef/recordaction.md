---
title: "RecordAction"
domain: sfFieldRef
topic: recordaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.724Z
estimatedTokens: 440
keywords: [RecordAction, relationship, record, action, flow, every, want, associate, particular, API, version, 42.0, later]
---

# RecordAction

> Represents a relationship between a record and an action, such as a
         flow. Create a RecordAction for every action that you want to associate with a particular
         record. Available in API version 42.0 and later.

# RecordAction

Represents a relationship between a record and an action, such as a flow. Create a RecordAction for every action that you want to associate with a particular record. Available in API version 42.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [RecordAction](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_recordaction.htm "HTML (New Window)") in the Life Sciences Cloud Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionDefinition | Action Definition | picklist |  | 255 |  |  |
| ActionType | Action Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| FlowDefinition | Flow Definition ID | picklist |  | 255 |  |  |
| FlowInterviewId | Flow Interview ID | reference |  | 18 |  |  |
| Id | RecordAction ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsMandatory | Is Mandatory | boolean |  |  |  |  |
| IsUiRemoveHidden | Hide Remove Action in UI | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Order | Order | int | 9 |  |  |  |
| Pinned | Pinned | picklist |  | 255 |  |  |
| RecordId | Parent Record ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
