---
title: "VPL360_AssetToOrderForRelatedAssets"
domain: media-developer-guide
topic: vpl360assettoorderforrelatedassets
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.108Z
estimatedTokens: 169
keywords: [VPL360_AssetToOrderForRelatedAssets, Integration, Procedure, converts, asset, order, assets, account, VPL360, _AssetToOrderForRelatedAssets, Sample, Input, Output, Calls]
---

# VPL360_AssetToOrderForRelatedAssets

> This Integration Procedure converts an asset to an order for
    all related assets of an account.

# VPL360\_AssetToOrderForRelatedAssets

This Integration Procedure converts an asset to an order for all related assets of an account.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| accountId | Required |
| assetId | Required |
| requestDate | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Self care: Asset to Order while Shop Addon


## Calls

-   Integration Procedure Action: VPL360\_AssetToOrder

-   Integration Procedure Action: VPL360\_SubmitFDOrder

-   Integration Procedure Action: VPL360\_ValidateCart

-   Remote Action:

    -   Class: VPL360AssetManagementController

    -   Method: removePromoForItem

## Code Examples

```
{
    "accountId": "0014W00002BvqD1",
    "assetId": "02i4W000005CDNEQA4,02i4W000005CDNFQA4",
    "requestDate": "2021-10-17"
}
```

```
{
  "AssetToOrder": {
    "messages": [],
    "displaySequence": -1,
    "cartId": "8014W000000lIZmQAM"
  },
  "AssetToOrderForRelatedAssetsResponse": {
    "SubmitFDOrderResponse": "Order queued successfully."
  }
}
```
