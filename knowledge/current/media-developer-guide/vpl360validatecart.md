---
title: "VPL360_ValidateCart"
domain: media-developer-guide
topic: vpl360validatecart
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.163Z
estimatedTokens: 120
keywords: [VPL360_ValidateCart, Integration, Procedure, validate, cart, order, VPL360, _ValidateCart, Sample, Input, Output, Calls]
---

# VPL360_ValidateCart

> This Integration Procedure is used to validate a cart ID or
      order ID.

# VPL360\_ValidateCart

This Integration Procedure is used to validate a cart ID or order ID.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| orderId | Required |
| price | Required |
| validate | Required |

## Sample Output

```

```

## Called By

-   Components:

    -   Integration Procedure: VPL360\_RemoveSignatureAssetWithPromotion


## Calls

-   Remote Action:

    -   Class: vlocity\_cmt.CpqAppHandler

    -   Method: runCartValidation

## Code Examples

```
{
    "orderId": "8014W000000lI1B",
    "price": "true",
    "validate": "true"
}
```

```
{
  "messages": [],
  "totalSize": 0
}
```
