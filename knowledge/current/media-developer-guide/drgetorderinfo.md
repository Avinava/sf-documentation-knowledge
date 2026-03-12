---
title: "DRgetOrderInfo"
domain: media-developer-guide
topic: drgetorderinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.023Z
estimatedTokens: 111
keywords: [DRgetOrderInfo, Omnistudio, Data, Mapper, order, item, products, Sample, Input, Output]
---

# DRgetOrderInfo

> This Omnistudio Data Mapper gets information about an order
    item and returns the value true or false for signature products.

# DRgetOrderInfo

This Omnistudio Data Mapper gets information about an order item and returns the value true or false for signature products.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| itemId | Required |
| orderId | Required |

## Sample Output

```

```

## Called By

-   Workflow: Web shop Order Confirmation

    -   LWC: vplS360CartComponent.js

        -   Integration Procedure: VPLS360\_notifyUser

## Code Examples

```
{
    "itemId": "8024W000006KLKMQA4",
    "orderId": "8014W000002MbVjQAK"
}
```

```
{
  "Item": {
    "isSignature": false
  }
}
```
