---
title: "VPL360_CancelAsset"
domain: media-developer-guide
topic: vpl360cancelasset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.113Z
estimatedTokens: 192
keywords: [VPL360_CancelAsset, Integration, Procedure, initiates, cancellation, active, asset, customer, self, care, VPL360, _CancelAsset, Sample, Input, Output]
---

# VPL360_CancelAsset

> This Integration Procedure initiates the cancellation of an
      active asset for a customer in self care.

# VPL360\_CancelAsset

This Integration Procedure initiates the cancellation of an active asset for a customer in self care.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| accountId | Required |
| assetId | Required |
| cancelSubscription | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Self care: Subscription Page Active Asset Cancellation

-   Components:

    -   LWC: vplS360SelfCareSubscriptionAddOnsList.js


## Calls

-   Integration Procedure: VPL360\_CancelAssetItem

-   Integration Procedure: VPL360\_CancelSubscription

-   Integration Procedure: VPL360\_SubmitFDOrder

-   Remote Action: UpdateAssetStatusApex

    -   Class: VPL360AssetManagementController

    -   Method: updateAssetStatus

## Code Examples

```
{
    "accountId": "0014W00002AgXmWQAV",
    "assetId": "02i4W00000EQbUNQA1",
    "cancelSubscription": "false"
}
```

```
{
  "CancelAssetItem": {
    "RelatedAssetDetails": "",
    "UpdateRelatedAssets": false,
    "error": false,
    "orderId": "8014W000001Zl2RQAS"
  },
  "SubmitFDO": "Order queued successfully.",
  "UpdateAsset": {
    "error": "OK",
    "errorCode": "INVOKE-200",
    "msg": "Assets Updated"
  }
}
```
