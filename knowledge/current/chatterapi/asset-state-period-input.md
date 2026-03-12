---
title: "Asset State Period Input"
domain: chatterapi
topic: asset-state-period-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.140Z
estimatedTokens: 300
keywords: [Asset, State, Period, Input, consumed, Customer, Lifecycle, Management, current, quantity, amount, monthly, recurring, revenue, lifecycle-managed]
---

# Asset State Period Input

> Asset state period input consumed by Customer Asset Lifecycle Management. The asset
    state period represents the current quantity, amount, and monthly recurring revenue for a
    lifecycle-managed asset during a period. You create asset state periods to represent the
    creation of an asset, asset changes, and asset cancellations. When the current date reaches the
    start date of the next asset state period, the asset’s quantity, amount, and monthly recurring
    revenue fields are updated on the basis of the now-current asset state period.

# Asset State Period Input

Asset state period input consumed by Customer Asset Lifecycle Management. The asset state period represents the current quantity, amount, and monthly recurring revenue for a lifecycle-managed asset during a period. You create asset state periods to represent the creation of an asset, asset changes, and asset cancellations. When the current date reaches the start date of the next asset state period, the asset’s quantity, amount, and monthly recurring revenue fields are updated on the basis of the now-current asset state period.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Amount of revenue allocated for the time defined by the asset state period. | Required | 50.0 |
| endDate | String | Service end date for the asset state period. | Optional | 50.0 |
| mrr | Double | Monthly recurring revenue for the time defined by the asset state period. | Required | 50.0 |
| quantity | Double | Quantity of the asset during the asset state period. | Required | 50.0 |
| startDate | String | Service start date for the asset state period. | Required | 50.0 |

## Code Examples

```
"assetStatePeriod": {
      "startDate": "2020-07-01T09:00:00+08:00",
      "endDate": "2020-09-30T08:59:59+08:00",
      "quantity": 20,
      "mrr": 200,
      "amount": 600
    }
```
