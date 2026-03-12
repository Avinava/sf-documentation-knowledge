---
title: "Prediction Object"
domain: omnistudio
topic: prediction-object
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:49.240Z
estimatedTokens: 141
keywords: [Prediction, Output, representation, predictions]
---

# Prediction Object

> Output representation of the list of predictions.

# Prediction Object

Output representation of the list of predictions.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| model | Map<String, String> | The model information of a success prediction. | Small, 53.0 | 53.0 |
| prediction | Prediction | The prediction details. | Small, 53.0 | 53.0 |
| status | String | The status of the prediction request. | Small, 53.0 | 53.0 |
| suggestions | Suggestion[] | The details on suggestions on how to improve the prediction. | Small, 54.0 | 54.0 |

## Related Topics

- Prediction (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_predictio.htm)
- Suggestion (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_suggestio.htm)
