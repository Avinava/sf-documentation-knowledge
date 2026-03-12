---
title: "Predict History Resource"
domain: bi-dev-guide-rest-sdd
topic: predict-history-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.426Z
estimatedTokens: 229
keywords: [Predict, History, Resource, Query, Einstein, Discovery, predictions]
---

# Predict History Resource

> Query the history of Einstein Discovery predictions.

# Predict History Resource

Query the history of Einstein Discovery predictions.

Resource URL

```

```

Formats

JSON

Available Version

56.0

HTTP Methods

POST

Request body for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| predict​History | Predict​History​Input | The input for the predict history query. | Required | 56.0 |

Response body for POST

[Predict History Collection](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_predict_history_collection.htm "A collection of historical predictions for a goal.")

Example

For use cases for querying prediction history, see [Query Prediction History](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_predict_history.htm "The Einstein Prediction Service provides a REST API endpoint to query prediction histories.").

## Code Examples

```
/smartdatadiscovery/predict-history
```

## Related Topics

- Predict​History​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_predict_history_input.htm)
- Predict History Collection (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_predict_history_collection.htm)
- Query Prediction History (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_predict_history.htm)
