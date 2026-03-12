---
title: "VPL360_PreValidateOrderCancellation"
domain: media-developer-guide
topic: vpl360prevalidateordercancellation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.901Z
estimatedTokens: 167
keywords: [VPL360_PreValidateOrderCancellation, Integration, Procedure, determine, whether, order, eligible, cancellation, VPL360, _PreValidateOrderCancellation, Sample, Input, Output, Calls]
---

# VPL360_PreValidateOrderCancellation

> This Integration Procedure is used to determine whether an
    order is eligible for cancellation.

# VPL360\_PreValidateOrderCancellation

This Integration Procedure is used to determine whether an order is eligible for cancellation.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| orderId | Required |

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

    -   Class: vlocity\_cmt.CpqAppHandler

    -   Method: unfreezeOrder

-   Remote Action:

    -   Class: vlocity\_cmt.CpqAppHandler

    -   Method: preValidate

## Code Examples

```
{
    "orderId": "8014x000000TTVVAA4"
}
```

```
{
  "canCancel": true
}
```
