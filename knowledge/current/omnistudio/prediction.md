---
title: "Prediction"
domain: omnistudio
topic: prediction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.740Z
keywords: [Prediction]
---

# Prediction

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