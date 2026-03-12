---
title: "Cart Item Output"
domain: chatterapi
topic: cart-item-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.550Z
estimatedTokens: 384
keywords: [Cart, Item, Output]
---

# Cart Item Output

> Item in a cart.

# Cart Item Output

Item in a cart.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cartId | String | ID of the cart associated with the cart item. | Small, 56.0 | 56.0 |
| cartItemPriceAdjustments | Cart Item Price Adjustment[] | List of adjustments for the cart item. | Small, 56.0 | 56.0 |
| id | String | ID of the cart item. | Small, 56.0 | 56.0 |
| itemDescription | String | Description of the cart item. | Small, 56.0 | 56.0 |
| itemName | String | Name of the cart item. | Small, 56.0 | 56.0 |
| listPrice | String | List price of the cart item. | Small, 56.0 | 56.0 |
| product2Id | String | Product ID of the cart item. | Small, 56.0 | 56.0 |
| quantity | String | Quantity of cart items. | Small, 56.0 | 56.0 |
| salesPrice | String | Sales price of the cart item. This is the price per quantity and the value used to compute the discount. | Small, 56.0 | 56.0 |
| sku | String | Stock keeping unit of the cart item. | Small, 56.0 | 56.0 |
| totalAdjustmentBaseAmount | String | Total adjustment for the cart item. | Small, 56.0 | 56.0 |
| totalLineBaseAmount | String | Total amount for the cart item, equal to sales price multiplied by quantity. This is the value used to compute the discount. | Small, 56.0 | 56.0 |
| totalListBaseAmount | String | Total amount for the cart item, based on list price and quantity. | Small, 56.0 | 56.0 |
| totalNetAmount | String | Total amount for the cart item including all adjustments. | Small, 56.0 | 56.0 |

## Related Topics

- Cart Item Price Adjustment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_price_adjustment.htm)
