---
title: "Cart Item Promotion Collection"
domain: chatterapi
topic: cart-item-promotion-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.559Z
estimatedTokens: 104
keywords: [Cart, Item, Promotion, Collection, promotions, associated, items]
---

# Cart Item Promotion Collection

> Collection of promotions associated with cart items.

# Cart Item Promotion Collection

Collection of promotions associated with cart items.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the cart. | Small, 53.0 | 53.0 |
| items | Map<String, Cart Promotion[]> | Map of cart items to promotions. | Big, 53.0 | 53.0 |

## Related Topics

- Cart Promotion (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_promotion_output.htm)
