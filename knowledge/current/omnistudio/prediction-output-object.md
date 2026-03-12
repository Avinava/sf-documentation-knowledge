---
title: "Prediction Output Object"
domain: omnistudio
topic: prediction-output-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.584Z
estimatedTokens: 199
keywords: [Prediction, Output, details, given, record.]
---

# Prediction Output Object

> Prediction details for a given record.

# Prediction Output Object

Prediction details for a given record.

JSON example

This example shows a sample predictionOutputObjects response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error[] | List of errors encountered during the processing of the API request. | Small, 62.0 | 62.0 |
| isSuccess | Boolean | Indicates whether the request is successful (true) or not (false). | Small, 62.0 | 62.0 |
| predictionOutput | Prediction[] | Details of prediction. | Small, 62.0 | 62.0 |
| predictionWarning | Prediction Warning[] | List of missing or out-of-bound fields identified during prediction. | Small, 62.0 | 62.0 |
| recordId | String | ID of the record for prediction. | Small, 62.0 | 62.0 |

## Code Examples

```
predictionOutputObjects": [
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
  ]
```

## Related Topics

- Error (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_error.htm)
- Prediction (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_prediction_output_output.htm)
- Prediction Warning (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_prediction_warning.htm)
