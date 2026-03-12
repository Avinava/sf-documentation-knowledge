---
title: "Get FO Capacity Values Request Input"
domain: chatterapi
topic: get-fo-capacity-values-request-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.799Z
estimatedTokens: 107
keywords: [Capacity, Input, Locations, fulfillment, order]
---

# Get FO Capacity Values Request Input

> Locations to get fulfillment order capacity information
    for.

# Get FO Capacity Values Request Input

Locations to get fulfillment order capacity information for.

Root XML tag

<getFOCapacityValuesRequestRequestInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| locationIds | String[] | List of IDs of the locations to get fulfillment order capacity information for. | Required | 55.0 |

## Code Examples

```
{
  "locationIds": ["LOC-1", "LOC-2", "LOC-3", "LOC-5"]
}
```
