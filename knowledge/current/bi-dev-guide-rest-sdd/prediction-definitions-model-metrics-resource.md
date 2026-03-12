---
title: "Prediction Definitions Model Metrics Resource"
domain: bi-dev-guide-rest-sdd
topic: prediction-definitions-model-metrics-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.479Z
estimatedTokens: 254
keywords: [Prediction, Definitions, Model, Metrics, Resource, collection, definition]
---

# Prediction Definitions Model Metrics Resource

> Returns a collection of metrics for a prediction definition model.

# Prediction Definitions Model Metrics Resource

Returns a collection of metrics for a prediction definition model.

Resource URL

```

```

Formats

JSON

Available Version

50.0

HTTP Methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| count | Int | The count of metrics to return. | Optional | 50.0 |
| model​Id | String | The ID of the model to retrieve or delete. | Required | 41.0 |
| prediction​Definition​Id​Or​Name | String | The ID or developer name of the prediction definition to retrieve or delete the model for. | Required | 41.0 |
| span | Metric​Span​Enum | The time span for the metrics. Valid values are:DayMonthSince​Last​ActionWeek | Optional | 50.0 |

Response body for GET

[Smart Data Discovery Metrics Collection](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_metrics_collection.htm "A collection of Einstein Discovery metrics.")

## Code Examples

```
/smartdatadiscovery/predictiondefinitions/<predictionDefinitionIdOrName>/models/<modelId>/metrics
```

## Related Topics

- Smart Data Discovery Metrics Collection (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_metrics_collection.htm)
