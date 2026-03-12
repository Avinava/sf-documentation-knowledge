---
title: "Engagement Signal Metrics"
domain: chatterapi
topic: engagement-signal-metrics
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.220Z
estimatedTokens: 336
keywords: [Engagement, Signal, Metrics]
---

# Engagement Signal Metrics

> Create and delete Engagement Signal Metrics for an Engagement Signal.

# Engagement Signal Metrics

Create and delete Engagement Signal Metrics for an Engagement Signal.

Resource

This resource is applicable for POST method.

```

```

The idOrName property is the ID or API name of the engagement signal.

This resource is applicable for DELETE method.

```

```

The first idOrName property is the ID or API name of the engagement signal and the second one is the ID or API name of the engagement signal metric.

Resource example

This example shows a sample resource applicable for POST method.

```

```

This example shows a sample resource applicable for DELETE method.

```

```

Available version

64.0

HTTP methods

POST, DELETE

Request body for POST

JSON Example

```

```

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The name of the Engagement Signal Metric. | Required | 64.0 |
| field | Field Input | A field on the content object DMO or its related DMO for the metric calculation. | Required | 64.0 |
| aggregateFunction | Enum | Engagement Signal Metric Aggregate Function. The value can beSUMAVGCOUNTDISTINCT | Required | 64.0 |

Response body for POST

[Engagement Signal Metric](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_engagement_signal_metric.htm "Response body for an Engagement Signal Metric.")

## Code Examples

```
/personalization/engagement-signals/idOrName/metrics
```

```
/personalization/engagement-signals/idOrName/metrics/idOrName
```

```
https://yourInstance.salesforce.com​/services/data​/v66.0/personalization/engagement-signals/1H0xx0000004CAeCAM/metrics
```

```
https://yourInstance.salesforce.com​/services/data​/v66.0/personalization/engagement-signals/1H0xx0000004CAeCAM/metrics/metricname
```

```
{
  "name": "metricName",
  "field": { "objectName": "Engagement_Signal_DMO__dlm", "name": "Unique_Identifier__c" },
  "aggregateFunction": "Count"
}
```

## Related Topics

- Field Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_engagement_signal_field_input.htm)
- Engagement Signal Metric (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_engagement_signal_metric.htm)
