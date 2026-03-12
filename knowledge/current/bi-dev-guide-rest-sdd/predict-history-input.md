---
title: "Predict History Input"
domain: bi-dev-guide-rest-sdd
topic: predict-history-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.139Z
estimatedTokens: 107
keywords: [Predict, History, Input, query, prediction]
---

# Predict History Input

> The query input for prediction history.

# Predict History Input

The query input for prediction history.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| goal​Id | ID | The ID of the goal. | Required | 56.0 |
| range | Predict​History​Range​Input | The range for the prediction history query. | Required | 56.0 |
| targets | String[] | The list of targets to query. | Optional | 56.0 |

## Related Topics

- Predict​History​Range​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_predict_history_range_input.htm)
