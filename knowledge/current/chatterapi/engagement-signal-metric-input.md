---
title: "Engagement Signal Metric Input"
domain: chatterapi
topic: engagement-signal-metric-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.570Z
estimatedTokens: 139
keywords: [Engagement, Signal, Metric, Input, creating]
---

# Engagement Signal Metric Input

> Request body for creating an Engagement Signal Metric.

# Engagement Signal Metric Input

Request body for creating an Engagement Signal Metric.

JSON Example

```

```

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The name of the Engagement Signal Metric. | Required | 64.0 |
| field | Field Input | A field on the content object DMO or its related DMO for the metric calculation. | Required | 64.0 |
| aggregateFunction | Enum | Engagement Signal Metric Aggregate Function. The value can beSUMAVGCOUNTDISTINCT | Required | 64.0 |

## Code Examples

```
{
  "name": "metricName",
  "field": { "objectName": "Engagement_Signal_DMO__dlm", "name": "Unique_Identifier__c" },
  "aggregateFunction": "Count"
}
```

## Related Topics

- Field Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_engagement_signal_field_input.htm)
