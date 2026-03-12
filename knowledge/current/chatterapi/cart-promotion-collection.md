---
title: "Cart Promotion Collection"
domain: chatterapi
topic: cart-promotion-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.593Z
estimatedTokens: 295
keywords: [Cart, Promotion, Collection, Promotions, associated]
---

# Cart Promotion Collection

> Promotions associated with a cart.

# Cart Promotion Collection

Promotions associated with a cart.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cartId | String | ID of the cart. | Small, 53.0 | 53.0 |
| cartStatus | String | Status of the cart. Values are:Active—Cart is created and available for modifications, like adding or removing products or promotions.Checkout—Cart is in checkout. If the customer modifies the cart, the current checkout session is canceled.Closed—Checkout is complete and an order was created. The cart cannot be modified.PendingClosed—Cart is marked to be closed, but the request isn't completed yet. The cart can’t be modified. This value is available in API version 57.0 and later.PendingDelete—Cart is marked for delete, but the request isn't completed yet. The cart can’t be modified.Processing—Cart is processing. For example, taxes are being calculated. The cart can’t be modified. | Small, 53.0 | 53.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the cart. | Small, 53.0 | 53.0 |
| promotions | Cart Promotion[] | Collection of cart promotions. | Big, 53.0 | 53.0 |

## Related Topics

- Cart Promotion (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_promotion_output.htm)
