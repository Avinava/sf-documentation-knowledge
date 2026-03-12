---
title: "Promotion Evaluation"
domain: chatterapi
topic: promotion-evaluation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.681Z
estimatedTokens: 274
keywords: [Promotion, Evaluation, Results]
---

# Promotion Evaluation

> Results of a promotion evaluation.

# Promotion Evaluation

Results of a promotion evaluation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cart | Promotion Cart | Cart and its items. | Small, 56.0 | 56.0 |
| coupons | Promotion Coupon[] | Collection of coupon codes to enable promotions. A customer can apply a maximum of two coupons. | Small, 56.0 | 56.0 |

#### See Also

-   [Commerce Webstore Promotions, Evaluate Action](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.")

## Related Topics

- Promotion Cart (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_cart.htm)
- Promotion Coupon (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_coupon.htm)
- Commerce Webstore Promotions, Evaluate Action (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm)
