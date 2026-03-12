---
title: "Order Summary Adjustment Aggregates Async Input"
domain: chatterapi
topic: order-summary-adjustment-aggregates-async-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.301Z
estimatedTokens: 97
keywords: [Order, Summary, Adjustment, Aggregates, Async, Input, IDs, calculating]
---

# Order Summary Adjustment Aggregates Async Input

> Order summary IDs for calculating adjustment
    aggregates.

# Order Summary Adjustment Aggregates Async Input

Order summary IDs for calculating adjustment aggregates.

Root XML tag

<orderSummaryAdjustmentAggregatesAsyncInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| orderSummaryIds | String[] | List of order summary IDs. | Required | 55.0 |

## Code Examples

```
{
"orderSummaryIds": ["1Osxx0000004CDsCAM", "1Osxx0000004CH6CAM"]
}
```
