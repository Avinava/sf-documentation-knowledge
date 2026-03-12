---
title: "Metrics Resource"
domain: bi-dev-guide-rest-sdd
topic: metrics-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.372Z
estimatedTokens: 183
keywords: [Metrics, Resource, collection, Einstein, Discovery]
---

# Metrics Resource

> Returns the metrics collection for Einstein Discovery.

# Metrics Resource

Returns the metrics collection for Einstein Discovery.

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
| count | Integer | The count for the collection. | Optional | 50.0 |
| span | Metric​Span​Enum | The time span for the metrics. Valid values are:DayMonthSince​Last​ActionWeek | Optional | 50.0 |

Response body for GET

[Smart Data Discovery Metrics Collection](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_metrics_collection.htm "A collection of Einstein Discovery metrics.")

## Code Examples

```
/smartdatadiscovery/metrics
```

## Related Topics

- Smart Data Discovery Metrics Collection (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_metrics_collection.htm)
