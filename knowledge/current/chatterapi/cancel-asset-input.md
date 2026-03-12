---
title: "Cancel Asset Input"
domain: chatterapi
topic: cancel-asset-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.143Z
estimatedTokens: 176
keywords: [Cancel, Asset, Input, Cancellation, consumed, Customer, Lifecycle, Management, action, made, against, lifecycle-managed]
---

# Cancel Asset Input

> Cancellation input consumed by Customer Asset Lifecycle Management. Represents a
    cancellation action made against a lifecycle-managed asset.

# Cancel Asset Input

Cancellation input consumed by Customer Asset Lifecycle Management. Represents a cancellation action made against a lifecycle-managed asset.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assetAction | Asset Action Input | Asset action that caused the cancellation. | Required | 50.0 |
| assetActionSources | Asset Action Source Input[] | List of asset action sources. | Optional | 50.0 |
| assetId | String | ID of the asset to be canceled. | Required | 50.0 |
| assetStatePeriod | Asset State Period Input | Most recent asset state period for the canceled asset. | Required | 50.0 |

## Code Examples

```
{
  "assetStatePeriod": {
    "startDate": "2020-10-01T09:00:00+08:00",
    "endDate": "2020-11-30T08:59:59+08:00",
    "quantity": 25,
    "mrr": 250,
    "amount": 500
  },
  "assetAction": {
    "category": "Cancellations",
    "actionDate": "2020-12-01T09:00:00+08:00",
    "quantityChange": -25,
    "mrrChange": -250,
    "amount": -250
  },
  "assetActionSources": [
    {
      "transactionDate": "2020-10-01T09:00:00+08:00",
      "startDate": "2020-10-01T09:00:00+08:00",
      "endDate": "2020-12-31T08:59:59+08:00",
      "quantity": -25,
      "productAmount": -250,
      "referenceEntityItem": "1WLB00000003geJOAQ"
    }
  ]
}
```

## Related Topics

- Asset Action Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_calm_asset_action_input.htm)
- Asset Action Source Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_calm_asset_action_source_input.htm)
- Asset State Period Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_calm_asset_state_period_input.htm)
