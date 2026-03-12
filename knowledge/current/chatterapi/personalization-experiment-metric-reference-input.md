---
title: "Personalization Experiment Metric Reference Input"
domain: chatterapi
topic: personalization-experiment-metric-reference-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.393Z
estimatedTokens: 149
keywords: [Personalization, Experiment, Metric, Input, metrics, additional, performance, behavior, insights]
---

# Personalization Experiment Metric Reference Input

> Defines the metrics for additional performance and behavior insights.

# Personalization Experiment Metric Reference Input

Defines the metrics for additional performance and behavior insights.

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| metricType | Personalization Experiment Metric Type Enum | The metric's entity type. | Required | 65.0 |
| metricName | String | The metric's developer name. | Required | 65.0 |
| engagementSignalName | String | Developer name of the metric’s parent. | Optional | 65.0 |
| HigherIsBetter | Boolean | Indicates if a higher metric value is better. | Optional | 65.0 |

## Related Topics

- Personalization Experiment Metric Type Enum (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_experiment_metric_type_enum.htm)
