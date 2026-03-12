---
title: "VPL360_SubmitFDOrder"
domain: media-developer-guide
topic: vpl360submitfdorder
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.919Z
estimatedTokens: 120
keywords: [VPL360_SubmitFDOrder, Integration, Procedure, submits, Future, Dated, Order, FDO, cancellation, VPL360, _SubmitFDOrder, Sample, Input, Output, Calls]
---

# VPL360_SubmitFDOrder

> This Integration Procedure submits the Future Dated Order
      (FDO) for cancellation.

# VPL360\_SubmitFDOrder

This Integration Procedure submits the Future Dated Order (FDO) for cancellation.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| CartID | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Self care: Subscription Page, Active Asset Cancellation

-   Components:

    -   VPL360\_CancelAsset


## Calls

-   Remote Action: SubmitOrder

    -   Class: SubmitOrderService

    -   Method: canSubmitOrder

## Code Examples

```
{
   "CartID" : "8014W000001Zl2RQAS"
}
```

```
{
    "SubmitFDO": "Order queued successfully.",
    "UpdateAsset": {
        "error": "OK",
        "errorCode": "INVOKE-200",
        "msg": "Assets Updated"
    }
}
```
