---
title: "Engagement Signal Compound Metric"
domain: chatterapi
topic: engagement-signal-compound-metric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.544Z
estimatedTokens: 196
keywords: [Engagement, Signal, Compound, Metric, creating]
---

# Engagement Signal Compound Metric

> Response body for an Engagement Signal Compound Metric.

# Engagement Signal Compound Metric

Response body for an Engagement Signal Compound Metric.

JSON example

This example shows a sample response with details of an engagement signal compound metric.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | ID | ID of the compound metric. | Small, 64.0 | 64.0 |
| label | String | Label for the compound metric. | Small, 64.0 | 64.0 |
| name | String | API name for the compound metric. | Small, 64.0 | 64.0 |
| numeratorMetric | Metric Field | The Engagement Signal Metric used as the primary operand. | Small, 64.0 | 64.0 |
| denominatorMetric | Metric Field | The Engagement Signal Metric used as the secondary operand. | Small, 64.0 | 64.0 |
| description | String | Description of the compound metric. | Small, 64.0 | 64.0 |
| operator | String | Operator between the two metrics. | Small, 64.0 | 64.0 |
| createdById | ID | Created by ID of the Compound Metric. | Small, 64.0 | 64.0 |
| createdDate | Date | Creation date of the Compound Metric. | Small, 64.0 | 64.0 |
| lastModifiedById | ID | Last modified ID of the Compound Metric. | Small, 64.0 | 64.0 |
| lastModifiedDate | Date | Last modified date of the Compound Metric. | Small, 64.0 | 64.0 |
| url | Connect Url | Connect URL to this resource. | Small, 64.0 | 64.0 |

## Code Examples

```
{
              "numeratorMetric": {
              "engagementSignalName": "EmailEngagement",
              "engagementSignalMetricName": "Emails_Interacted"
              },
              "denominatorMetric": {
              "engagementSignalName": "EmailEngagement",
              "engagementSignalMetricName": "Emails_Sent"
              },
              "description": "Email click through rate",
              "name": "MyCompoundMetric",
              "label": "MyCompoundMetric",
              "operator": "RATIO"
              }
```

```
{
  "id": "2H0xx0000004CBkCAX",
  "name": "MyCompoundMetric",
  "label": "MyCompoundMetric",
  "description": "Email click through rate",
  "operator": "RATIO",
  "numeratorMetric": {
    "engagementSignalName": "EmailEngagement",
    "engagementSignalMetricName": "Emails_Interacted"
  },
  "denominatorMetric": {
    "engagementSignalName": "EmailEngagement",
    "engagementSignalMetricName": "Emails_Sent"
  },
  "url": "/services/data/v64.0/personalization/compound-metrics/2H0xx0000004CBkCAX"
}
```

## Related Topics

- Metric Field Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_engagement_signal_metric_field_input.htm)
