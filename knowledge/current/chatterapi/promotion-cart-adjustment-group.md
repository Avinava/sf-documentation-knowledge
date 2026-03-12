---
title: "Promotion Cart Adjustment Group"
domain: chatterapi
topic: promotion-cart-adjustment-group
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.645Z
estimatedTokens: 522
keywords: [Promotion, Cart, Adjustment, Group, associated]
---

# Promotion Cart Adjustment Group

> Adjustment group associated with a cart.

# Promotion Cart Adjustment Group

Adjustment group associated with a cart.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| adjustmentBasis​Reference | String | ID of the associated coupon, if applicable. | Small, 57.0 | 57.0 |
| adjustmentDescription | String | Description of the adjustment. | Small, 57.0 | 57.0 |
| adjustmentType | String | How the price adjustment amount is calculated. Values are:AdjustmentAmount—The adjustment is a fixed amount.AdjustmentPercentage—The adjustment is a percentage. | Small, 57.0 | 57.0 |
| adjustmentValue | String | Price value of the adjustment. | Small, 57.0 | 57.0 |
| baseAmount | String | Total amount of the adjustment. | Small, 57.0 | 57.0 |
| cartId | String | ID of the cart. | Small, 57.0 | 57.0 |
| id | String | ID of the cart adjustment group. | Small, 57.0 | 57.0 |
| priceAdjustment​CauseId | String | ID of the related promotion. | Small, 57.0 | 57.0 |
| priority | Integer | Where in the sequence of adjustments this adjustment was applied. | Small, 57.0 | 57.0 |

#### See Also

-   [Promotion Cart](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_cart.htm "A cart, its items, and its adjustment groups.")

-   [Promotion Evaluation](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_evaluation.htm "Results of a promotion evaluation.")

-   [Commerce Webstore Promotions, Evaluate Action](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.")

## Related Topics

- Promotion Cart (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_cart.htm)
- Promotion Evaluation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_evaluation.htm)
- Commerce Webstore Promotions, Evaluate Action (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm)
