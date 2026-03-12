---
title: "VPL360_DeleteCartItem"
domain: media-developer-guide
topic: vpl360deletecartitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.851Z
estimatedTokens: 113
keywords: [VPL360_DeleteCartItem, Integration, Procedure, item, cart, VPL360, _DeleteCartItem, Sample, Input, Output, Calls, deletes]
---

# VPL360_DeleteCartItem

> This Integration Procedure is used to delete an item from
        the cart.

# VPL360\_DeleteCartItem

This Integration Procedure is used to delete an item from the cart.

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

-   Components:

    -   Integration Procedure: VPL360\_OrderCancellationNonSignature


## Calls

-   Remote Action:

    -   Class: vlocity\_cmt.CpqAppHandler

    -   Method: deleteCartsItems

## Code Examples

```
{
    "itemId": "8024W000000iE53",
    "orderId": "8014W000000lI1B"
}
```

```
{
  "message": "Successfully deleted.",
  "severity": "INFO",
  "code": "152"
}
```

```
{
    "itemId": "8024W000000iD3GQAU",
    "orderId": "8014W000000lHMDQA2"
}
```
