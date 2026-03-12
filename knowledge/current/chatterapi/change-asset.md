---
title: "Change Asset"
domain: chatterapi
topic: change-asset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.600Z
estimatedTokens: 332
keywords: [Change, Asset, Amend, renew, lifecycle-managed]
---

# Change Asset

> Amend or renew a lifecycle-managed asset.

# Change Asset

Amend or renew a lifecycle-managed asset.

Resource

```

```

Available version

50.0

HTTP methods

POST

Change Asset

-   Asset state period: 10 per call
-   Asset action creation: 1 per call
-   Asset action source creation: 10 per asset action
-   Asset state period deletion: 4 per call

Request body for POST

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

Response body for POST

[Asset Result Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_calm_output.htm "Connect REST API output representation for lifecycle-managed assets.")

#### See Also

-   [Change a Lifecycle-Managed Asset](atlas.en-us.chatterapi.meta/chatterapi/features_asset_lifecycle_change_examples.htm "Review an example of using Connect REST API to amend an asset after a new lifecycle event.")

## Code Examples

```
/asset-management/assets/assetId/actions/change
```

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
- Asset Result Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_calm_output.htm)
- Change a Lifecycle-Managed Asset (atlas.en-us.chatterapi.meta/chatterapi/features_asset_lifecycle_change_examples.htm)
