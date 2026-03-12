---
title: "Model Metrics Resource"
domain: bi-dev-guide-rest-sdd
topic: model-metrics-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.400Z
estimatedTokens: 361
keywords: [Model, Metrics, Resource, Einstein, Discovery]
---

# Model Metrics Resource

> Returns the metrics for an Einstein Discovery model.

# Model Metrics Resource

Returns the metrics for an Einstein Discovery model.

Resource URL

```

```

Formats

JSON

Available Version

54.0

HTTP Methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| model​Id | String | The ID of the model to retrieve the metrics for. | Required | 54.0 |

Response body for GET

[Abstract Smart Data Discovery AI Model Metrics](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_ai_model_metrics.htm "The base Einstein Discovery AI model metric.") - Specific implementations include: [Smart Data Discovery AI Model Classification Metrics](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_classification_metrics.htm "The binomial classification metrics for an Einstein Discovery AI model."), [Smart Data Discovery AI Model Multiclass Metrics](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_multiclass_metrics.htm "The multiclass metrics for an Einstein Discovery AI model."), and [Smart Data Discovery AI Model Regression Metrics](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_regression_metrics.htm "The regression metrics for an Einstein Discovery AI model.")

## Code Examples

```
/smartdatadiscovery/models/<modelId>/metrics
```

## Related Topics

- Abstract Smart Data Discovery AI Model Metrics (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_ai_model_metrics.htm)
- Smart Data Discovery AI Model Classification Metrics (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_classification_metrics.htm)
- Smart Data Discovery AI Model Multiclass Metrics (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_multiclass_metrics.htm)
- Smart Data Discovery AI Model Regression Metrics (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_regression_metrics.htm)
