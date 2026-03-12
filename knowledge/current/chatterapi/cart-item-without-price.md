---
title: "Cart Item Without Price"
domain: chatterapi
topic: cart-item-without-price
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.545Z
estimatedTokens: 439
keywords: [Cart, Item, Price, pricing]
---

# Cart Item Without Price

> An item without pricing information in a cart.

# Cart Item Without Price

An item without pricing information in a cart.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| billing​Frequency | String | Billing frequency for a subscription. Values are:AnnualMonthly | Small, 59.0 | 59.0 |
| cartDelivery​GroupId | String | ID of the cart delivery group. | Small, 60.0 | 60.0 |
| cartId | String | ID of the cart. | Small, 49.0 | 49.0 |
| cartItemId | String | ID of the item. | Small, 49.0 | 49.0 |
| messagesSummary | Cart Messages Summary | Messages summary for the item. | Small, 49.0 | 49.0 |
| name | String | Name of the item. | Small, 49.0 | 49.0 |
| productDetails | Cart Item Product | Summary of the product details. | Small, 49.0 | 49.0 |
| productId | String | ID of the product. | Small, 49.0 | 49.0 |
| productSelling​ModelId | String | ID of the product selling model. | Small, 59.0 | 59.0 |
| quantity | String | Quantity of the item. | Small, 49.0 | 49.0 |
| sellingModel​Type | String | Type of product selling model. Values are:Evergreen—A subscription without an end date. An evergreen subscription continues until the shopper affirmatively cancels it.OneTime—A product that isn’t sold as a subscription.TermDefined—A subscription with a defined end date. The subscription continues for a specified time period. When the term ends, the subscription ends. | Small, 60.0 | 60.0 |
| subscription​Term | Integer | Reserved for future use. | Small, 59.0 | 59.0 |
| type | String | Type of item in a cart. Values are:DeliveryChargeProduct | Small, 49.0 | 49.0 |

#### See Also

-   [Cart Item Result](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_result.htm "Result after requesting a cart item.")

## Related Topics

- Cart Messages Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_messages_summary.htm)
- Cart Item Product (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_product_summary.htm)
- Cart Item Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_result.htm)
