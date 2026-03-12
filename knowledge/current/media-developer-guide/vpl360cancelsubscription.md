---
title: "VPL360_CancelSubscription"
domain: media-developer-guide
topic: vpl360cancelsubscription
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.124Z
estimatedTokens: 188
keywords: [VPL360_CancelSubscription, Integration, Procedure, cancels, customer's, subscription, cancellation, base, package, initiated, VPL360, _CancelSubscription, Sample, Input, Output]
---

# VPL360_CancelSubscription

> This Integration Procedure cancels a customer's
      subscription after the cancellation procedure for the base package is initiated.

# VPL360\_CancelSubscription

This Integration Procedure cancels a customer's subscription after the cancellation procedure for the base package is initiated.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| accountId | Required |

## Sample Output

```

```

## Called By

-   Components:

    -   Integration Procedure: VPL360\_CancelAsset


## Calls

-   Data Mapper: DRFetchUOWStatus

-   Data Mapper: DRTurnOnUOW

-   Data Mapper: DRParseLoopOutput

-   Integration Procedure Action: VPL360\_AssetToOrder

-   Remote Action:

    -   Class: VPL360AssetManagementController

    -   Method: removeAppliedPromo

-   Remote Action:

    -   Class: VPL360AssetManagementController

    -   Method: fetchRootAssetForAccount

## Code Examples

```
{
    "accountId": "0014W00002AHIXM"
}
```

```
{
  "error": true,
  "orderId": "8014W000000lIX2QAM"
}
```
