---
title: "ConnectApi.PromotionEvaluation"
domain: apex-reference
topic: connectapipromotionevaluation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:28.725Z
estimatedTokens: 270
keywords: [ConnectApi.PromotionEvaluation, Results, promotion, evaluation]
---

# ConnectApi.PromotionEvaluation

> Results of a promotion evaluation.

# ConnectApi.PromotionEvaluation

Results of a promotion evaluation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| cart | ConnectApi.​PromotionCart | Cart and its items. | 57.0 |
| coupons | List<ConnectApi.​PromotionCoupon> | Collection of coupon codes to enable promotions. A customer can apply a maximum of two coupons. | 57.0 |

#### See Also

-   [evaluate(salesTransaction)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm#apex_ConnectAPI_CommercePromotions_evaluate_1 "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.")

## Related Topics

- ConnectApi.​PromotionCart (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_promotion_cart.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​PromotionCoupon (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_promotion_coupon.htm)
- evaluate(salesTransaction) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm)
