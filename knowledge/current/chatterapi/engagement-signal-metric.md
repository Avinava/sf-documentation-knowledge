---
title: "Engagement Signal Metric"
domain: chatterapi
topic: engagement-signal-metric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.437Z
estimatedTokens: 171
keywords: [Engagement, Signal, Metric]
---

# Engagement Signal Metric

> Response body for an Engagement Signal Metric.

# Engagement Signal Metric

Response body for an Engagement Signal Metric.

JSON example

This example shows a sample response with details of an engagement signal metric.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The name of the Engagement Signal Metric. | Small, 64.0 | 64.0 |
| field | Field | A field on the content object DMO or its related DMO for the metric calculation. | Small, 64.0 | 64.0 |
| aggregateFunction | Enum | Engagement Signal Metric Aggregate Function Enum. | Small, 64.0 | 64.0 |
| id | String | ID of the Engagement Signal Metric. | Small, 64.0 | 64.0 |

## Code Examples

```
{
  "id": "1H0xx0000004CAeCAZ",
  "name": "metricName",
  "field": {
    "objectName": "Engagement_Signal_DMO__dlm",
    "name": "Unique_Identifier__c",
    "label": "Unique Identifier"
  },
  "aggregateFunction": "Count"
}
```

## Related Topics

- Field (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_engagement_signal_field.htm)
