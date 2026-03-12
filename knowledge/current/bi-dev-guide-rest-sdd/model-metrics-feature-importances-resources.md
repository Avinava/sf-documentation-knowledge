---
title: "Model Metrics Feature Importances Resources"
domain: bi-dev-guide-rest-sdd
topic: model-metrics-feature-importances-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.403Z
estimatedTokens: 173
keywords: [Model, Metrics, Feature, Importances, Resources, importance, Einstein, Discovery]
---

# Model Metrics Feature Importances Resources

> Returns the importance metrics for an Einstein Discovery Model

# Model Metrics Feature Importances Resources

Returns the importance metrics for an Einstein Discovery Model

Resource URL

```

```

Formats

JSON

Available Version

56.0

HTTP Methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| model​Id | String | The ID of the model to retrieve the importance metrics. | Required | 56.0 |

Response body for GET

[Smart Data Discovery Feature Importance Metric](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_feature_importance_metric.htm "An importance metric for a Einstein Discovery model.")

## Code Examples

```
/smartdatadiscovery/models/${modelId}/metrics/feature-importances
```

## Related Topics

- Smart Data Discovery Feature Importance Metric (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_feature_importance_metric.htm)
