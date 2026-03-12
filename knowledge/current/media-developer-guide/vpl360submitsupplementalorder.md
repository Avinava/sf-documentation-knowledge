---
title: "VPL360_SubmitSupplementalOrder"
domain: media-developer-guide
topic: vpl360submitsupplementalorder
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.923Z
estimatedTokens: 152
keywords: [VPL360_SubmitSupplementalOrder, Integration, Procedure, submits, supplemental, order, created, cancelling, VPL360, _SubmitSupplementalOrder, Sample, Input, Output, Calls]
---

# VPL360_SubmitSupplementalOrder

> This Integration Procedure submits the supplemental order
    created while cancelling an order.

# VPL360\_SubmitSupplementalOrder

This Integration Procedure submits the supplemental order created while cancelling an order.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| orderId | Required |
| supplementalOrderId | Required |

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

    -   Method: submitCancelOrder

## Code Examples

```
{
    "supplementalOrderId": "8014W000001Zl6JQAS",
    "orderId": "8014W000001Zl6E"
}
```

```
{
  "records": [
    {
      "orderStatusValue": "Superseded",
      "Id": "8014W000001Zl6EQAS",
      "vlocity_cmt__IsChangesAllowed__c": false,
      "vlocity_cmt__OrderStatus__c": "Superseded",
      "displaySequence": -1,
      "messages": []
    }
  ],
  "messages": [
    {
      "message": "Cancellation is accepted.",
      "severity": "INFO",
      "code": "309"
    }
  ],
  "totalSize": 1
}
```
