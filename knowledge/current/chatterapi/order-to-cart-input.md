---
title: "Order to Cart Input"
domain: chatterapi
topic: order-to-cart-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:09.423Z
estimatedTokens: 99
keywords: [Order, Cart, action, adding]
---

> Input for action adding an order to a cart.

# Order to Cart Input

Input for action adding an order to a cart.

Root XML tag

<orderToCartInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cartStateOrId | String | Cart state (active or current) or the ID of the cart to which the products from an order are to be copied. | Required | 57.0 |

## Code Examples

```
{
	"cartStateOrId":"0a6xx0000000cwXAAQ"
}
```
