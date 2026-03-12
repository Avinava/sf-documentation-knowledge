---
title: "VPL360_CancelAssetItem"
domain: media-developer-guide
topic: vpl360cancelassetitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.116Z
estimatedTokens: 167
keywords: [VPL360_CancelAssetItem, Integration, Procedure, cancels, asset, item, Future, Dated, Order, FDO, VPL360, _CancelAssetItem, Sample, Input, Output]
---

# VPL360_CancelAssetItem

> This Integration Procedure cancels an asset item in a
        Future Dated Order (FDO).

# VPL360\_CancelAssetItem

This Integration Procedure cancels an asset item in a Future Dated Order (FDO).

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| accountId | Required |
| assetId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Self care: Subscription Page Active Asset Cancellation


## Calls

-   Data Mapper: DRFetchAssetInfo

-   Data Mapper: DRFetchOrderItem

-   Integration Procedure: VPL360\_AssetToOrder

-   Integration Procedure: VPL360\_DeleteCartItem

-   Integration Procedure: VPL360\_OrderCancellationNonSignature

-   Integration Procedure: VPL360\_RemoveSignatureAssetWithPromotion

## Code Examples

```
{
    "accountId": "0014W00002AgXmWQAV",
    "assetId": "02i4W00000EQbUMQA1"
}
```

```
{
    "RelatedAssetDetails": "",
    "UpdateRelatedAssets": false,
    "error": false,
    "orderId": "8014W000001Zl2WQAS"
}
```
