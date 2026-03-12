---
title: "Prediction Response"
domain: omnistudio
topic: prediction-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.259Z
estimatedTokens: 211
keywords: [Prediction, Predictions]
---

# Prediction Response

> Predictions for a given request.

# Prediction Response

Predictions for a given request.

JSON example

This example shows a sample response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| predictionModel | String | API name of the prediction model. | Small, 62.0 | 62.0 |
| predictionOutput​Objects | Prediction Output Object[] | Prediction for a specified record. | Small, 62.0 | 62.0 |
| predictionPlatform | String | Machine learning platform that is used to make the prediction for a use case.. | Small, 62.0 | 62.0 |
| predictionType | String | Type of prediction. For example: Regression, Binary Classification. | Small, 62.0 | 62.0 |
| status | Status[] | Status of the request. | Small, 62.0 | 62.0 |
| usecaseName | String | API name of the usecase definition. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "predictionModel": "Model1",
  "predictionType": "Classification",
  "predictionOutputObjects": [
    {
      "errors": [],
      "isSuccess": true,
      "predictionOutput": [
        {
          "customAttributes": {
            "STATUS": "Electrical Malfunction",
            "TIME": "120"
          },
          "customPredictionLabel": "60.0 % likelihood of Electrical Malfunction in next 120 days",
          "predictionScore": 60,
          "topPredictors": [
            {
              "contributionValue": 23.22,
              "predictorFields": [
                {
                  "label": "Service Type",
                  "name": "Service Type",
                  "value": "23.22"
                }
              ]
            }
          ]
        }
      ],
      "recordId": "recordId"
    }
  ],
  "predictionPlatform": "Einstein_on_Data_Cloud",
  "status": {
    "code": 200,
    "message": "Successful"
  },
  "usecaseName": "ancd"
}
```

## Related Topics

- Prediction Output Object (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_prediction_output_object.htm)
- Status (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_status.htm)
