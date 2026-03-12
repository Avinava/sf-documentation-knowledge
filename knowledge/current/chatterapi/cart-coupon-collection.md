---
title: "Cart Coupon Collection"
domain: chatterapi
topic: cart-coupon-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.502Z
estimatedTokens: 292
keywords: [Cart, Coupon, Collection, coupons, associated]
---

# Cart Coupon Collection

> Collection of coupons associated with the cart.

# Cart Coupon Collection

Collection of coupons associated with the cart.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cartCoupons | Cart Coupon List | A list of coupons associated with the cart. | Big, 54.0 | 54.0 |
| cartId | String | ID of the cart. | Small, 54.0 | 54.0 |
| cartStatus | String | Status of the cart. Values are:Active—Cart is created and available for modifications, like adding or removing products or promotions.Checkout—Cart is in checkout. If the customer modifies the cart, the current checkout session is canceled.Closed—Checkout is complete and an order was created. The cart cannot be modified.PendingClosed—Cart is marked to be closed, but the request isn't completed yet. The cart can’t be modified. This value is available in API version 57.0 and later.PendingDelete—Cart is marked for delete, but the request isn't completed yet. The cart can’t be modified.Processing—Cart is processing. For example, taxes are being calculated. The cart can’t be modified. | Small, 54.0 | 54.0 |
| ownerId | String | ID of the user who owns this cart. | Small, 54.0 | 54.0 |

## Related Topics

- Cart
                  Coupon List (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_coupon_list.htm)
