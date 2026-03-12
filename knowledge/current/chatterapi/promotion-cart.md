---
title: "Promotion Cart"
domain: chatterapi
topic: promotion-cart
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.638Z
estimatedTokens: 424
keywords: [Promotion, Cart, items, adjustment, groups]
---

# Promotion Cart

> A cart, its items, and its adjustment groups.

# Promotion Cart

A cart, its items, and its adjustment groups.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cartAdjustment​Groups | Promotion Cart Adjustment Group[] | Cart adjustment groups belonging to the cart. | Small, 56.0 | 56.0 |
| cartItems | Promotion Cart Item[] | Cart items belonging to the cart. | Small, 56.0 | 56.0 |
| currencyIsoCode | String | Currency code of the cart. | Small, 56.0 | 56.0 |
| id | String | ID of the cart. | Small, 56.0 | 56.0 |
| totalAdjustment​BaseAmount | String | Total adjustment base amount for the cart. | Small, 56.0 | 56.0 |
| totalNetAmount | String | Total price of the cart, including adjustments. | Small, 56.0 | 56.0 |
| totalProduct​BaseAmount | String | Total price of all cart items in the cart. | Small, 56.0 | 56.0 |

#### See Also

-   [Promotion Evaluation](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_evaluation.htm "Results of a promotion evaluation.")

-   [Commerce Webstore Promotions, Evaluate Action](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.")

## Related Topics

- Promotion Cart Adjustment Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_cart_adjustment_group.htm)
- Promotion Cart Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_cart_item.htm)
- Promotion Evaluation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_evaluation.htm)
- Commerce Webstore Promotions, Evaluate Action (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm)
