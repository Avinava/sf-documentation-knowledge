---
title: "AIPredictionEvent"
domain: sfFieldRef
topic: aipredictionevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.742Z
estimatedTokens: 289
keywords: [AIPredictionEvent, Notifies, subscribers, Einstein, feature, Prediction, Builder, Case, Classification, written, results, back, target, API, version]
---

# AIPredictionEvent

> Notifies subscribers when an Einstein feature, such as Prediction
      Builder or Case Classification, has written prediction results back to a target object and AI
      prediction field. This object is available in API version 46.0 and later.

# AIPredictionEvent

Notifies subscribers when an Einstein feature, such as Prediction Builder or Case Classification, has written prediction results back to a target object and AI prediction field. This object is available in API version 46.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AIPredictionEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Confidence | AI Insight Value Confidence | double |  |  | 5 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| FieldName | AI Predicted Field API Name | string |  | 255 |  |  |
| HasError | AI Has Error | boolean |  |  |  |  |
| InsightId | AI Record Insight ID | string |  | 18 |  |  |
| PredictionEntityId | AI Insight Value ID | string |  | 80 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| TargetId | AI Predicted Object ID | string |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
