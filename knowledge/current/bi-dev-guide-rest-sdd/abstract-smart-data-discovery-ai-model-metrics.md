---
title: "Abstract Smart Data Discovery AI Model Metrics"
domain: bi-dev-guide-rest-sdd
topic: abstract-smart-data-discovery-ai-model-metrics
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.564Z
estimatedTokens: 373
keywords: [Abstract, Smart, Data, Discovery, Model, Metrics, base, Einstein, metric]
---

# Abstract Smart Data Discovery AI Model Metrics

> The base Einstein Discovery AI model metric.

# Abstract Smart Data Discovery AI Model Metrics

The base Einstein Discovery AI model metric.

Properties

Inherited by [Smart Data Discovery AI Model Classification Metrics](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_classification_metrics.htm "The binomial classification metrics for an Einstein Discovery AI model."), [Smart Data Discovery AI Model Multiclass Metrics](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_multiclass_metrics.htm "The multiclass metrics for an Einstein Discovery AI model."), and [Smart Data Discovery AI Model Regression Metrics](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_regression_metrics.htm "The regression metrics for an Einstein Discovery AI model.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| data​Segments​Url | String | The URL to the data segments metrics for the AI model. | Small, 56.0 | 56.0 |
| feature​Importances​Url | String | The URL to the feature importances metrics for the AI model. | Small, 56.0 | 56.0 |
| prediction​Type | Smart​Data​Discovery​Prediction​Type​Enum | The prediction type of the AI model. Valid values are:ClassificationMulticlass​ClassificationRegressionUnknown | Small, 54.0 | 54.0 |
| url | String | The URL for the metrics | Small, 54.0 | 54.0 |

## Related Topics

- Smart Data Discovery AI Model Classification Metrics (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_classification_metrics.htm)
- Smart Data Discovery AI Model Multiclass Metrics (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_multiclass_metrics.htm)
- Smart Data Discovery AI Model Regression Metrics (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_regression_metrics.htm)
