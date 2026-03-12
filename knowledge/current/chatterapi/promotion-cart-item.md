---
title: "Promotion Cart Item"
domain: chatterapi
topic: promotion-cart-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.664Z
estimatedTokens: 712
keywords: [Promotion, Cart, Item, adjustments]
---

# Promotion Cart Item

> A cart item and its adjustments.

# Promotion Cart Item

A cart item and its adjustments.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cartDeliveryGroupId | String | ID of the associated cart delivery group. | Small, 57.0 | 57.0 |
| cartId | String | ID of the associated cart. | Small, 56.0 | 56.0 |
| cartItemPrice​Adjustments | Promotion Cart Item Price Adjustment[] | List of price adjustments applied to the cart item. | Small, 56.0 | 56.0 |
| id | String | ID of the cart item. | Small, 56.0 | 56.0 |
| itemDescription | String | Description of the cart item. | Small, 56.0 | 56.0 |
| itemName | String | Name of the cart item. | Small, 56.0 | 56.0 |
| listPrice | String | Unit list price of the cart item. | Small, 56.0 | 56.0 |
| product2Id | String | ID of the product. | Small, 56.0 | 56.0 |
| quantity | String | Quantity of the cart item. | Small, 56.0 | 56.0 |
| salesPrice | String | Unit sales price of the cart item. | Small, 56.0 | 56.0 |
| sku | String | Stock keeping unit of the cart item. | Small, 56.0 | 56.0 |
| subType | String | Subtype of item in a cart.Possible values are:Bonus—A bonus product.Gift—A gift product. | Small, 64.0 | 64.0 |
| totalAdjustment​BaseAmount | String | Total adjustment amount for the cart item. | Small, 56.0 | 56.0 |
| totalLineBase​Amount | String | Total amount for the cart item, based on sales price and quantity, not including adjustments. | Small, 56.0 | 56.0 |
| totalListBase​Amount | String | Total amount for the cart item, based on list price and quantity, not including adjustments. | Small, 56.0 | 56.0 |
| totalNetAmount | String | Total amount for the cart item, based on list price and quantity, including adjustments. | Small, 56.0 | 56.0 |
| type | String | Type of item in a cart. Values are:DeliveryChargeProduct | Small, 56.0 | 56.0 |

#### See Also

-   [Promotion Cart](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_cart.htm "A cart, its items, and its adjustment groups.")

-   [Promotion Evaluation](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_evaluation.htm "Results of a promotion evaluation.")

-   [Commerce Webstore Promotions, Evaluate Action](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.")

## Related Topics

- Promotion Cart Item Price Adjustment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_cart_item_price_adjustment.htm)
- Promotion Cart (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_cart.htm)
- Promotion Evaluation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_evaluation.htm)
- Commerce Webstore Promotions, Evaluate Action (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm)
