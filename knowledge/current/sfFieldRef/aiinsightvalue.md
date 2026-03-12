---
title: "AIInsightValue"
domain: sfFieldRef
topic: aiinsightvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.732Z
estimatedTokens: 418
keywords: [AIInsightValue, Einstein, prediction, insight, API, version, 47.0, later]
---

# AIInsightValue

> Represents an Einstein prediction insight value. This object is available
    in API version 47.0 and later.

# AIInsightValue

Represents an Einstein prediction insight value. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AIInsightValue](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_aiinsightvalue.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AiInsightActionId | AIInsightAction ID | reference |  | 18 |  |  |
| AiRecordInsightId | AI Record Insight ID | reference |  | 18 |  |  |
| Confidence | Confidence | double |  |  | 5 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Field | Field | picklist |  | 255 |  |  |
| FieldValueLowerBound | Field Value Lower Bound | textarea |  | 131072 |  |  |
| FieldValueUpperBound | Field Value Upper Bound | textarea |  | 131072 |  |  |
| Id | AI Insight Value ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| SobjectLookupValueId | sObject Lookup Value ID | reference |  | 18 |  |  |
| SobjectType | sObject Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Value | Value | textarea |  | 131072 |  |  |
| ValueType | Value Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
