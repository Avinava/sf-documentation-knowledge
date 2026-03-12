---
title: "VPL360CancelCartItem"
domain: media-developer-guide
topic: vpl360cancelcartitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.946Z
estimatedTokens: 123
keywords: [VPL360CancelCartItem, Integration, Procedure, cancel, item, cart, Sample, Input, Output, Calls]
---

# VPL360CancelCartItem

> This Integration Procedure is used to cancel an item in the
    cart.

# VPL360CancelCartItem

This Integration Procedure is used to cancel an item in the cart.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| cartId | Required |
| itemIds | Required |
| price | Required |
| validate | Required |

## Sample Output

```

```

## Called By

-   Components:

    -   Integration Procedure: VPL360\_OrderCancellationNonSignature


## Calls

-   Remote Action:

    -   Class: vlocity\_cmt.CpqAppHandler

    -   Method: cancelCartItems

## Code Examples

```
{
    "cartId": "8014W000000lI1B",
    "itemIds": "8024W000000iE53",
    "price": "true",
    "validate": "true"
}
```

```
"{
  ""code"": ""152"",
  ""severity"": ""INFO"",
  ""message"": ""Successfully deleted.""
}"
```
