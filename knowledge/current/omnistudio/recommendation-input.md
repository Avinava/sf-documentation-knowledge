---
title: "Recommendation Input"
domain: omnistudio
topic: recommendation-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:47.652Z
estimatedTokens: 367
keywords: [Recommendation, Input, representation, Einstein, Best, Action]
---

# Recommendation Input

> Input representation of the recommendation request with Einstein Next
      Best Action.

# Recommendation Input

Input representation of the recommendation request with Einstein Next Best Action.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| canPersist​Recommendations | Boolean | Indicates whether the recommendations are persisted (true) or not (false). The default value is false. | Optional | 56.0 |
| isAsync | Boolean | Indicates whether the execution mode is async (true) or not (false). The default value is false. | Optional | 56.0 |
| max​Recommendations​Count | Integer | The maximum recommendations to request. You can specify a maximum of four recommendations. | Optional | 56.0 |
| rcmdRecordId​Persistence​Column | String | The name of the column from the PrimaryResponse object that persists the recommendation record ID when the canPersist​Recommendations property is set to true. | Optional | 56.0 |
| rcmdStrategy​Parameters | Map<String,Object>[] | The list of parameters to pass to the flow action for the specified strategy to generate recommendations. | Required | 56.0 |
| recommendation​FieldMapping | Map<String, String> | The field mapping that’s used to store the recommendations when the canPersist​Recommendations property is set to true. | Optional | 56.0 |
| strategyName | String | The name of the strategy. | Required | 56.0 |
| usecase​Definition​Name | String | The API name of the use case definition. | Required | 56.0 |

## Code Examples

```
{
    "usecaseDefinitionName": "ChurnPredictionRealTime",
    "strategyName": "flow_sample",
    "rcmdStrategyParameters": [
      {
       "recordId": "a02xx000001nd0RAAQ",
       "predictionScore": 96
      }
    ],
    "maxRecommendationsCount": 1,
    "recommendationFieldMapping": {}
}
```
