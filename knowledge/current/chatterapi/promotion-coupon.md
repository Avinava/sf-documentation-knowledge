---
title: "Promotion Coupon"
domain: chatterapi
topic: promotion-coupon
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.678Z
estimatedTokens: 337
keywords: [Promotion, Coupon]
---

# Promotion Coupon

> A coupon used in a promotion.

# Promotion Coupon

A coupon used in a promotion.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| couponCode | String | Coupon code. | Small, 56.0 | 56.0 |
| couponErrorCode | String | Error code returned if the coupon is invalid. | Small, 56.0 | 56.0 |
| id | String | ID of the coupon. | Small, 56.0 | 56.0 |
| isValidCoupon | Boolean | Indicates whether the coupon is valid (true) or invalid (false). | Small, 56.0 | 56.0 |

#### See Also

-   [Promotion Evaluation](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_evaluation.htm "Results of a promotion evaluation.")

-   [Commerce Webstore Promotions, Evaluate Action](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.")

## Related Topics

- Promotion Evaluation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_evaluation.htm)
- Commerce Webstore Promotions, Evaluate Action (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm)
