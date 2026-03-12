---
title: "Cancel Asset"
domain: chatterapi
topic: cancel-asset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.594Z
estimatedTokens: 314
keywords: [Cancel, Asset, lifecycle-managed]
---

# Cancel Asset

> Cancel a lifecycle-managed asset.

# Cancel Asset

Cancel a lifecycle-managed asset.

Resource

```

```

Available version

50.0

HTTP methods

POST

Limits

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
| assetAction | Asset Action Input | Asset action that caused the cancellation. | Required | 50.0 |
| assetActionSources | Asset Action Source Input[] | List of asset action sources. | Optional | 50.0 |
| assetId | String | ID of the asset to be canceled. | Required | 50.0 |
| assetStatePeriod | Asset State Period Input | Most recent asset state period for the canceled asset. | Required | 50.0 |

Response body for POST

[Asset Result Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_calm_output.htm "Connect REST API output representation for lifecycle-managed assets.")

#### See Also

-   [Cancel a Lifecycle-Managed Asset](atlas.en-us.chatterapi.meta/chatterapi/features_asset_lifecycle_cancel_examples.htm "Review an example of using Connect REST API to cancel an asset to reflect an early cancellation.")

## Code Examples

```
/asset-management/assets/assetId/actions/cancel
```

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
- Asset Result Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_calm_output.htm)
- Cancel a Lifecycle-Managed Asset (atlas.en-us.chatterapi.meta/chatterapi/features_asset_lifecycle_cancel_examples.htm)
