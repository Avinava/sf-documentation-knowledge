---
title: "Cart Output"
domain: chatterapi
topic: cart-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.579Z
estimatedTokens: 300
keywords: [Cart, Output, contents]
---

# Cart Output

> Cart and its contents.

# Cart Output

Cart and its contents.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| approaching​Discounts | Promotions Approaching Discount | Qualifier for a promotion with an approaching discount. | Small, 64.0 | 64.0 |
| cartAdjustment​Groups | Cart Adjustment Group[] | Cart adjustment groups associated with the cart. | Small, 56.0 | 56.0 |
| cartItems | Cart Item Output[] | Cart items associated with the cart. | Small, 56.0 | 56.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the cart. Only returned for multi-currency orgs. | Small, 56.0 | 56.0 |
| id | String | ID of the cart. | Small, 56.0 | 56.0 |
| totalAdjustment​BaseAmount | String | Sum of all adjustments on the cart. | Small, 56.0 | 56.0 |
| totalNetAmount | String | Total price of the cart items after all adjustments (includes other item types). | Small, 56.0 | 56.0 |
| totalProduct​BaseAmount | String | Total price of all cart products after all adjustments (excludes other item types). | Small, 56.0 | 56.0 |
| type | String | Type of cart item. Valid values are:ProductDeliveryCharge. | Small, 56.0 | 56.0 |

## Related Topics

- Promotions Approaching Discount (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_approaching_discount.htm)
- Cart Adjustment Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_adjustment_group.htm)
- Cart Item Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_output.htm)
