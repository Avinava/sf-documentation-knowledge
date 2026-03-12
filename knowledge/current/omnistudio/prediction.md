---
title: "Prediction"
domain: omnistudio
topic: prediction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.255Z
estimatedTokens: 176
keywords: [Prediction, Output, representation]
---

# Prediction

> Output representation of prediction details.

# Prediction

Output representation of prediction details.

JSON example

This example shows a sample prediction output details.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| customAttributes | Map<String, String> | Key-value pairs providing additional contextual details . | Small, 62.0 | 62.0 |
| customPredictionLabel | String | A human-readable summary or formatted text explaining the prediction outcome and its significance.. | Small, 62.0 | 62.0 |
| predictionScore | Double | Value of the prediction score. | Small, 62.0 | 62.0 |
| topPredictors | Predictor[] | List of top predictors. | Small, 62.0 | 62.0 |

## Code Examples

```
predictionOutput": [
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
      ]
```
