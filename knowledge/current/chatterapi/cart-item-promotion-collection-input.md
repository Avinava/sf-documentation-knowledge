---
title: "Cart Item Promotion Collection Input"
domain: chatterapi
topic: cart-item-promotion-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:07.533Z
estimatedTokens: 96
keywords: [Cart, Item, Promotion, Collection]
---

> Cart item promotion collection input.

# Cart Item Promotion Collection Input

Cart item promotion collection input.

Root XML tag

<cartItemPromotionCollectionInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| items | Cart Item Promotion Input[] | List of cart items to get the associated promotions. | Required | 53.0 |

## Code Examples

```
{
"items": [
   {
   "cartItemId":"0a9xx000000000GAAQ"
   },
   {
   "cartItemId":"0a9xx000000000GBCQ"
   }
   ]
}
```

## Related Topics

- Cart Item Promotion Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_cart_item_promotion_input.htm)
