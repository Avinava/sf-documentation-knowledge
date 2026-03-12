---
title: "Generate Asset"
domain: chatterapi
topic: generate-asset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.611Z
estimatedTokens: 384
keywords: [Generate, Asset, lifecycle-managed]
---

# Generate Asset

> Create a lifecycle-managed asset.

# Generate Asset

Create a lifecycle-managed asset.

Resource

```

```

Available version

50.0

HTTP methods

POST

Limits

-   Asset: 1 per call
-   Asset state period: 10 per call
-   Asset action: 1 per call
-   Asset action source: 10 per asset action

Request body for POST

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

Response body for POST

[Asset Result Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_calm_output.htm "Connect REST API output representation for lifecycle-managed assets.")

#### See Also

-   [Change a Lifecycle-Managed Asset](atlas.en-us.chatterapi.meta/chatterapi/features_asset_lifecycle_change_examples.htm "Review an example of using Connect REST API to amend an asset after a new lifecycle event.")

## Code Examples

```
/asset-management/assets/actions/generate
```

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
- Asset Result Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_calm_output.htm)
- Change a Lifecycle-Managed Asset (atlas.en-us.chatterapi.meta/chatterapi/features_asset_lifecycle_change_examples.htm)
