---
title: "VPL360_RemoveSignatureAssetWithPromotion"
domain: media-developer-guide
topic: vpl360removesignatureassetwithpromotion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.905Z
estimatedTokens: 224
keywords: [Integration, Procedure, removes, product, asset, applied, promotion, VPL360, _RemoveSignatureAssetWithPromotion, Sample, Input, Output, Calls]
---

# VPL360_RemoveSignatureAssetWithPromotion

> This Integration Procedure removes a signature product or
      asset which has an applied promotion.

# VPL360\_RemoveSignatureAssetWithPromotion

This Integration Procedure removes a signature product or asset which has an applied promotion.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| accountId | Required |
| AppliedPromoId | Required |
| assetId | Required |
| requestDate | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Self care: Subscription page Flow Asset Cancellation

-   Components:

    -   VPL360\_CancelAssetItem


## Calls

-   Integration Procedure Action: VPL360\_AssetToOrder

-   Integration Procedure Action: VPL360\_DeleteCartItem

-   Integration Procedure Action: VPL360\_ValidateCart

-   Remote Action:

    -   Class: VPL360AssetManagementController

    -   Method: handleSignaturePackageRemoval

-   Remote Action:

    -   Class: VPL360AssetManagementController

    -   Method: fetchRelatedAssetsForPromo

## Code Examples

```
{
    "AppliedPromoId": "a014W000013MUabQAG",
    "accountId": "0014W00002BuloZ",
    "assetId": "02i4W000005CDAoQAO",
    "requestDate": "2021-01-13"
  }
```

```
{
  "RemoveSignatureAssetWithPromotion": {
    "code": "152",
    "severity": "INFO",
    "message": "Successfully deleted."
  },
  "orderId": "8014W000000lIWnQAM"
}
```
