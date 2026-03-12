---
title: "Promotion Cart Item Price Adjustment"
domain: chatterapi
topic: promotion-cart-item-price-adjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.674Z
estimatedTokens: 697
keywords: [Promotion, Cart, Item, Price, Adjustment, adjustments, applied]
---

# Promotion Cart Item Price Adjustment

> Price adjustments applied to a cart item.

# Promotion Cart Item Price Adjustment

Price adjustments applied to a cart item.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| adjustmentAmount​Scope | String | Scope of the price adjustment amount. Values are:Total—The adjustment scope is the total price.Unit—The adjustment scope is the unit price.UnproratedTotal—The adjustment scope is the unprorated total price. | Small, 56.0 | 56.0 |
| adjustmentBasis​Reference | String | ID of the associated coupon, if applicable. | Small, 56.0 | 56.0 |
| adjustmentDescription | String | Description of the adjustment. | Small, 56.0 | 56.0 |
| adjustmentTargetType | String | Level of the promotion target. Values are:Cart—The target is cart-level.Item—The target is item-level. | Small, 56.0 | 56.0 |
| adjustmentType | String | How the price adjustment amount is calculated. Values are:AdjustmentAmount—The adjustment is a fixed amount.AdjustmentPercentage—The adjustment is a percentage. | Small, 56.0 | 56.0 |
| adjustmentValue | String | Value of the price adjustment. | Small, 56.0 | 56.0 |
| baseAmount | String | Total adjustment amount. | Small, 56.0 | 56.0 |
| cartAdjustment​GroupId | String | ID of the associated cart adjustment group. | Small, 56.0 | 56.0 |
| cartItemId | String | ID of the associated cart item. | Small, 56.0 | 56.0 |
| id | String | ID of the cart item price adjustment. | Small, 56.0 | 56.0 |
| priceAdjustment​CauseId | String | ID of the associated promotion. | Small, 56.0 | 56.0 |
| priority | Integer | Where in the sequence of adjustments this adjustment was applied. | Small, 56.0 | 56.0 |

#### See Also

-   [Promotion Cart Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_cart_item.htm "A cart item and its adjustments.")

-   [Promotion Cart](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_cart.htm "A cart, its items, and its adjustment groups.")

-   [Promotion Evaluation](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_evaluation.htm "Results of a promotion evaluation.")

-   [Commerce Webstore Promotions, Evaluate Action](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.")

## Related Topics

- Promotion Cart Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_cart_item.htm)
- Promotion Cart (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_cart.htm)
- Promotion Evaluation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_evaluation.htm)
- Commerce Webstore Promotions, Evaluate Action (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm)
