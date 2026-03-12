---
title: "Cart Promotion"
domain: chatterapi
topic: cart-promotion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.597Z
estimatedTokens: 319
keywords: [Cart, Promotion]
---

# Cart Promotion

> Promotion for a cart.

# Cart Promotion

Promotion for a cart.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| adjustmentAmount | String | Adjustment amount of the promotion. | Small, 53.0 | 53.0 |
| couponCode | String | Coupon code for a promotion. A coupon code is available only for manual promotions, not for automatic promotions. | Small, 53.0 | 53.0 |
| currencyIsoCode | String | Currency ISO code of the cart. | Small, 57.0 | 57.0 |
| displayName | String | Localized display name of the promotion. | Small, 53.0 | 53.0 |
| promotionId | String | ID of the promotion. | Small, 53.0 | 53.0 |
| targetType | String | Promotion target type. Values are:Cart—Promotion targets a cart.Item—Promotion targets an item in a cart. | Small, 53.0 | 53.0 |
| termsAnd​Conditions | String | Localized terms and conditions for the promotion. | Small, 53.0 | 53.0 |

#### See Also

-   [Cart Item Promotion Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_promotion_collection_output.htm "Collection of promotions associated with cart items.")

-   [Cart Promotion Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_promotion_collection.htm "Promotions associated with a cart.")

## Related Topics

- Cart Item Promotion Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_promotion_collection_output.htm)
- Cart Promotion Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_promotion_collection.htm)
