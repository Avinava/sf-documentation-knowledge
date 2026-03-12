---
title: "Generate Asset Input"
domain: chatterapi
topic: generate-asset-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.152Z
estimatedTokens: 243
keywords: [Generate, Asset, Input, generation, Customer, Lifecycle, Management, creation, lifecycle-managed]
---

# Generate Asset Input

> Asset generation input for Customer Asset Lifecycle Management. Represents the creation
    of a lifecycle-managed asset.

# Generate Asset Input

Asset generation input for Customer Asset Lifecycle Management. Represents the creation of a lifecycle-managed asset.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Asset’s parent account. | Required | 50.0 |
| assetAction | Asset Action Input | Asset action that creates the asset. | Required | 50.0 |
| assetActionSources | Asset Action Source Input[] | List of asset action sources. | Optional | 50.0 |
| assetName | String | Name of the new asset. | Required | 50.0 |
| assetStatePeriods | Asset State Period Input[] | List of asset state periods affected by the generate asset call. | Required | 50.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the lifecycle-managed asset record. | Required | 50.0 |
| productId | String | ID of the parent product for the asset. | Required | 50.0 |

## Code Examples

```
{
  "accountId": "001B000001KDI7BIAX",
  "assetName": "MDM Subscription",
  "productId": "01tB0000000q2FFIAY",
  "currencyIsoCode": "USD",
  "assetStatePeriods": [
    {
      "startDate": "2020-01-01T09:00:00+08:00",
      "endDate": "2020-12-31T08:59:59+08:00",
      "quantity": 10,
      "mrr": 100,
      "amount": 1200
    }
  ],
  "assetAction": {
    "category": "Initial Sale",
    "actionDate": "2019-09-05T16:00:00+08:00",
    "quantityChange": 10,
    "mrrChange": 100,
    "amount": 1200
  },
  "assetActionSources": [
    {
      "transactionDate": "2019-09-05T16:00:00+08:00",
      "startDate": "2020-01-01T09:00:00+08:00",
      "endDate": "2020-12-31T08:59:59+08:00",
      "quantity": 10,
      "productAmount": 1200,
      "referenceEntityItem": "1WLB00000003geJOAQ"
    }
  ]
}
```

## Related Topics

- Asset Action Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_calm_asset_action_input.htm)
- Asset Action Source Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_calm_asset_action_source_input.htm)
- Asset State Period Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_calm_asset_state_period_input.htm)
