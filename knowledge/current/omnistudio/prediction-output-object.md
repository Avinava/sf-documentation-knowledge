---
title: "Prediction Output Object"
domain: omnistudio
topic: prediction-output-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.738Z
keywords: [Prediction, Output, Object]
---

# Prediction Output Object

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