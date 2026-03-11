---
title: "Prediction Object"
domain: omnistudio
topic: prediction-object
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:25:09.729Z
keywords: [Prediction, Object]
---

# Prediction Object

# Prediction Object

Output representation of the list of predictions.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| model | Map<String, String> | The model information of a success prediction. | Small, 53.0 | 53.0 |
| prediction | Prediction | The prediction details. | Small, 53.0 | 53.0 |
| status | String | The status of the prediction request. | Small, 53.0 | 53.0 |
| suggestions | Suggestion[] | The details on suggestions on how to improve the prediction. | Small, 54.0 | 54.0 |