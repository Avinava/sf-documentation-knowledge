---
title: "VPL360_AssetToOrder"
domain: media-developer-guide
topic: vpl360assettoorder
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.105Z
estimatedTokens: 126
keywords: [VPL360_AssetToOrder, Integration, Procedure, converts, asset, order, basket, VPL360, _AssetToOrder, Sample, Input, Output, Calls]
---

# VPL360_AssetToOrder

> This Integration Procedure converts an asset to an order
        or an asset to a basket.

# VPL360\_AssetToOrder

This Integration Procedure converts an asset to an order or an asset to a basket.

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

    -   Self care: Subscription Page

    -   Self care: Asset Cancellation


## Calls

-   Remote Action: AssetToOrder

    -   Class: vlocity\_cmt.CpqAppHandler

    -   Method: assetToOrder

## Code Examples

```
{
    "accountId": "0014W00002BVik7QAD",
    "assetId": "02i4W00000EQbmDQAT",
    "requestDate": "2021-01-01"
}
```

```
{
    "messages": [],
    "displaySequence": -1,
    "cartId": "8014W000001Zl35QAC"
}
```
