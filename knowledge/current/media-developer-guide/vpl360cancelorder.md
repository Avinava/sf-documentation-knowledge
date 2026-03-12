---
title: "VPL360_CancelOrder"
domain: media-developer-guide
topic: vpl360cancelorder
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.120Z
estimatedTokens: 207
keywords: [VPL360_CancelOrder, Integration, Procedure, cancels, item, order, progress, reached, point, PONR, VPL360, _CancelOrder, Sample, Input, Output]
---

# VPL360_CancelOrder

> This Integration Procedure cancels an item in an order which
    is in progress and has not reached the point of no return (PONR).

# VPL360\_CancelOrder

This Integration Procedure cancels an item in an order which is in progress and has not reached the point of no return (PONR).

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| cancelOrder | Required |
| itemId | Required |
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

-   Data Mapper: DRGetOrderInfo

-   Integration Procedure: VPL360\_RemoveLineItem

-   Remote Action:

    -   Class: vlocity\_cmt.CpqAppHandler

    -   Method: unfreezeOrder

-   Remote Action:

    -   Class: vlocity\_cmt.CpqAppHandler

    -   Method: createSupplementalOrder

## Code Examples

```
{
    "cancelOrder": "false",
    "itemId": "8024W000004MtWeQAK",
    "orderId": "8014W000001Zl6EQAS"
}
```

```
{
  "RemoveLineItem": {
    "message": "Product {0} is successfully cancelled.",
    "severity": "INFO",
    "code": "CANCEL-1051"
  },
  "supplementalOrderId": "8014W000001Zl6JQAS"
}
```
