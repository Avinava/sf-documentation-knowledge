---
title: "Change Asset Input"
domain: chatterapi
topic: change-asset-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.146Z
estimatedTokens: 180
keywords: [Change, Asset, Input, consumed, Customer, Lifecycle, Management, action, made, against, lifecycle-managed]
---

# Change Asset Input

> Change input consumed by Customer Asset Lifecycle Management. Represents a change
    action made against a lifecycle-managed asset.

# Change Asset Input

Change input consumed by Customer Asset Lifecycle Management. Represents a change action made against a lifecycle-managed asset.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assetAction | Asset Action Input | Action that caused a change to the asset. | Required | 50.0 |
| assetActionSources | Asset Action Source Input[] | List of asset action sources. | Optional | 50.0 |
| assetId | String | Asset that was changed as a result of the action. | Required | 50.0 |
| assetStatePeriods | Asset State Period Input[] | List of asset state periods affected by the change asset call. | Optional | 50.0 |

## Code Examples

```
{
  "assetStatePeriods": [
    {
      "startDate": "2020-07-01T09:00:00+08:00",
      "endDate": "2020-09-30T08:59:59+08:00",
      "quantity": 20,
      "mrr": 200,
      "amount": 600
    },
    {
      "startDate": "2020-10-01T09:00:00+08:00",
      "endDate": "2020-12-31T08:59:59+08:00",
      "quantity": 25,
      "mrr": 250,
      "amount": 750
    }
  ],
  "assetAction": {
    "category": "Upsells",
    "actionDate": "2020-10-01T14:00:00+08:00",
    "quantityChange": 5,
    "mrrChange": 50,
    "amount": 150
  },
  "assetActionSources": [
    {
      "transactionDate": "2020-10-01T14:00:00+08:00",
      "startDate": "2020-10-01T09:00:00+08:00",
      "endDate": "2020-12-31T08:59:59+08:00",
      "quantity": 5,
      "productAmount": 150,
      "referenceEntityItem": "1WLB00000003geJOAQ"
    }
  ]
}
```

## Related Topics

- Asset Action Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_calm_asset_action_input.htm)
- Asset Action Source Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_calm_asset_action_source_input.htm)
- Asset State Period Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_calm_asset_state_period_input.htm)
