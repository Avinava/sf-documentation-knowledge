---
title: "Consumption Traceabilities Input"
domain: revenue-cloud
topic: consumption-traceabilities-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:35:43.019Z
estimatedTokens: 96
keywords: [Consumption, Traceabilities, liable, summary, IDs, trace]
---

> Input representation of the details of the liable summary IDs that are used to trace the
    consumption.

# Consumption Traceabilities Input

Input representation of the details of the liable summary IDs that are used to trace the consumption.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| liableSummaryIds | String[] | List of liable summary IDs to trace the consumption. | Required | 66.0 |

## Code Examples

```
{
  "liableSummaryIds": [
    "1HG000000000001"
  ]
}
```
