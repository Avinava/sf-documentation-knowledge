---
title: "Engagement Signal Compound Metrics"
domain: chatterapi
topic: engagement-signal-compound-metrics
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.215Z
estimatedTokens: 370
keywords: [Engagement, Signal, Compound, Metrics]
---

# Engagement Signal Compound Metrics

> Create, get, and delete Engagement Signal Compound Metrics.

# Engagement Signal Compound Metrics

Create, get, and delete Engagement Signal Compound Metrics.

Resource

This resource is applicable for POST method.

```

```

This resource is applicable for GET and DELETE methods.

```

```

The compoundMetricIdOrName property is the ID or API name of the compound metric.

Resource example

This example shows a sample resource applicable for POST method.

```

```

This example shows a sample resource applicable for GET and DELETE methods.

```

```

Available version

64.0

HTTP methods

GET, POST, DELETE

Request body for POST

JSON Example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| numeratorMetric | Metric Field Input | The Engagement Signal Metric used as the primary operand. | Required | 64.0 |
| denominatorMetric | Metric Field Input | The Engagement Signal Metric used as the secondary operand. | Required | 64.0 |
| description | String | Description of the compound metric. | Optional | 64.0 |
| label | String | Label for the compound metric. | Required | 64.0 |
| name | String | API name for the compound metric. | Required | 64.0 |
| operator | Enum | Operator between the two metrics. | Required | 64.0 |

Response body for POST and GET

[Engagement Signal Compound Metric](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_engagement_signal_compound_metric.htm "Response body for an Engagement Signal Compound Metric.")

## Code Examples

```
/personalization/compound-metrics
```

```
/personalization/compound-metrics/compoundMetricIdOrName
```

```
https://yourInstance.salesforce.com​/services/data​/v66.0/personalization/compound-metrics
```

```
https://yourInstance.salesforce.com​/services/data​/v66.0/personalization/compound-metrics/2H0xx0000004CBkCAX
```

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

## Related Topics

- Metric Field Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_engagement_signal_metric_field_input.htm)
- Engagement Signal Compound Metric (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_engagement_signal_compound_metric.htm)
