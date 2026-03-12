---
title: "AIRecordInsight"
domain: sfFieldRef
topic: airecordinsight
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.748Z
estimatedTokens: 445
keywords: [AIRecordInsight, Einstein, prediction, insight, API, version, 47.0, later]
---

# AIRecordInsight

> Represents an Einstein prediction insight. This object is available in API
    version 47.0 and later.

# AIRecordInsight

Represents an Einstein prediction insight. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AIRecordInsight](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_airecordinsight.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AiApplicationId | AI Application ID | reference |  | 18 |  |  |
| Confidence | Confidence | double |  |  | 4 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | AI Record Insight ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MlPredictionDefinitionId | ML Prediction Definition ID | reference |  | 18 |  |  |
| ModelId | AI Model ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| PredictionField | Prediction Field | string |  | 250 |  |  |
| RunGuid | Run GUID | string |  | 250 |  |  |
| RunStartTime | Run Start Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetField | Target Field | picklist |  | 255 |  |  |
| TargetId | Target ID | reference |  | 18 |  |  |
| TargetSobjectType | Target sObject Type | picklist |  | 255 |  |  |
| Type | Type | picklist |  | 255 |  |  |
| ValidUntil | Valid Until | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
