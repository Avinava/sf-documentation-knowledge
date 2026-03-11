---
title: "ConnectApi.PromotionCart"
domain: apex-reference
topic: connectapipromotioncart
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:39.771Z
keywords: [ConnectApi.PromotionCart, See]
---

# ConnectApi.PromotionCart

# ConnectApi.PromotionCart

A cart, its items, and its adjustment groups.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| cartAdjustment​Groups | List<ConnectApi.PromotionCartAdjustmentGroup> | Cart adjustment groups belonging to the cart. | 57.0 |
| cartItems | List<ConnectApi.PromotionCartItem> | Cart items belonging to the cart. | 57.0 |
| currencyIsoCode | String | Currency code of the cart. | 57.0 |
| id | String | ID of the cart. | 57.0 |
| totalAdjustment​BaseAmount | String | Total adjustment base amount for the cart. | 57.0 |
| totalNetAmount | String | Total price of the cart, including adjustments. | 57.0 |
| totalProduct​BaseAmount | String | Total price of all cart items in the cart. | 57.0 |

#### See Also

-   [ConnectApi.PromotionEvaluation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_promotion_evaluation.htm "Results of a promotion evaluation.")
    
-   [evaluate(salesTransaction)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm#apex_ConnectAPI_CommercePromotions_evaluate_1 "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.")