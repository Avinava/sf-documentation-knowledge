---
title: "AIInsightReason"
domain: sfFieldRef
topic: aiinsightreason
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.724Z
estimatedTokens: 430
keywords: [AIInsightReason, Einstein, prediction, insight, reason, API, version, 47.0, later]
---

# AIInsightReason

> Represents an Einstein prediction insight reason. This object is available
    in API version 47.0 and later.

# AIInsightReason

Represents an Einstein prediction insight reason. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AIInsightReason](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_aiinsightreason.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AiInsightValueId | AI Insight Value ID | reference |  | 18 |  |  |
| Contribution | Contribution | double |  |  | 4 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FeatureType | Feature Type | picklist |  | 255 |  |  |
| FeatureValue | Feature Value | string |  | 255 |  |  |
| FieldName | Field Name | string |  | 255 |  |  |
| FieldValue | Field Value | string |  | 255 |  |  |
| Id | AI Insight Reason ID | id |  | 18 |  |  |
| Intensity | Intensity | double |  |  | 4 | 2 |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Operator | Operator | picklist |  | 255 |  |  |
| ReasonLabelKey | Reason Label Key | string |  | 255 |  |  |
| RelatedInsightReasonId | AI Insight Reason ID | reference |  | 18 |  |  |
| SortOrder | Sort Order | int | 8 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Variance | Variance | double |  |  | 4 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
