---
title: "VPL360_RevokeCancellation"
domain: media-developer-guide
topic: vpl360revokecancellation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.908Z
estimatedTokens: 134
keywords: [VPL360_RevokeCancellation, Integration, Procedure, revokes, cancellation, asset, VPL360, _RevokeCancellation, Sample, Input, Output, Calls]
---

# VPL360_RevokeCancellation

> This Integration Procedure revokes the cancellation of an
    asset.

# VPL360\_RevokeCancellation

This Integration Procedure revokes the cancellation of an asset.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| AssetId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Self care: Subscription page, Order Cancellation

-   Components:

    -   LWC: vplS360SelfCareSubscriptionAddOnsList.js

    -   LWC: vplS360SelfCareSubscriptionBasePack.js


## Calls

-   Remote Action:

    -   Class: VPLS360RevokeCancellation

    -   Method: revokeCancel

## Code Examples

```
{
    "AssetId": "02i4W00000EQbzL"
}
```

```
{
  "msg": "Your cancellation has been Revoked Successfully. Please enjoy our services",
  "errorCode": "INVOKE-200",
  "error": "OK"
}
```
