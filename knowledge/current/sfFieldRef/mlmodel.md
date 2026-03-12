---
title: "MLModel"
domain: sfFieldRef
topic: mlmodel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.474Z
estimatedTokens: 407
keywords: [MLModel, model, Einstein, Prediction, Builder, Recommendation, features, API, version, 53.0, later]
---

# MLModel

> Represents an AI model that can be used in Einstein Prediction Builder,
         Einstein Recommendation Builder, and other Einstein features. This object is available
      in API version 53.0 and later.

# MLModel

Represents an AI model that can be used in Einstein Prediction Builder, Einstein Recommendation Builder, and other Einstein features. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MLModel](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_mlmodel.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApprovalStatus | Approval Status | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Dataset | Dataset Id | string |  | 80 |  |  |
| Id | ML Model ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ModelType | Model Type | picklist |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| PredictionDefinitionId | ML Prediction Definition ID | reference |  | 18 |  |  |
| RecommendationDefinitionId | ML Recommendation Definition ID | reference |  | 18 |  |  |
| ScoringStatus | Scoring Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TrainingEndTime | Training End Time | datetime |  |  |  |  |
| TrainingStartTime | Training Start Time | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
