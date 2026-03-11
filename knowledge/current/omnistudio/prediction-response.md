---
title: "Prediction Response"
domain: omnistudio
topic: prediction-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.743Z
keywords: [Prediction, Response]
---

# Prediction Response

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