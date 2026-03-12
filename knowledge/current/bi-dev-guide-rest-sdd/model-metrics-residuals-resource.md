---
title: "Model Metrics Residuals Resource"
domain: bi-dev-guide-rest-sdd
topic: model-metrics-residuals-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.407Z
estimatedTokens: 239
keywords: [Model, Metrics, Residuals, Resource, Einstein, Discovery]
---

# Model Metrics Residuals Resource

> Returns the metrics residuals for an Einstein Discovery model.

# Model Metrics Residuals Resource

Returns the metrics residuals for an Einstein Discovery model.

Resource URL

```

```

Formats

JSON

Available Version

55.0

HTTP Methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| model​Id | String | The ID of the model to retrieve the metrics residuals for. | Required | 55.0 |
| page | String | A generated token that indicates the view of metrics residuals to be returned. | Optional | 55.0 |
| page​Size | Integer | The number of items to be returned in a single page. Minimum is 1, maximum is 200, and default is 25. | Optional | 55.0 |

Response body for GET

[Smart Data Discovery AI Model Residual Collection](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_residual_collection.htm "A collection of Einstein Discovery AI model residuals.")

## Code Examples

```
/smartdatadiscovery/models/<modelId>/metrics/residuals
```

## Related Topics

- Smart Data Discovery AI Model Residual Collection (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_residual_collection.htm)
