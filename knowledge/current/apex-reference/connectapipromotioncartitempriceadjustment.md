---
title: "ConnectApi.PromotionCartItemPriceAdjustment"
domain: apex-reference
topic: connectapipromotioncartitempriceadjustment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:28.680Z
estimatedTokens: 675
keywords: [ConnectApi.PromotionCartItemPriceAdjustment, Price, adjustments, applied, cart, item.]
---

# ConnectApi.PromotionCartItemPriceAdjustment

> Price adjustments applied to a cart item.

# ConnectApi.PromotionCartItemPriceAdjustment

Price adjustments applied to a cart item.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| adjustmentAmount​Scope | ConnectApi.​AdjustmentAmount​Scope | Scope of the price adjustment amount. Values are:Total—The adjustment scope is the total price.Unit—The adjustment scope is the unit price.UnproratedTotal—The adjustment scope is the unprorated total price. | 57.0 |
| adjustmentBasis​Reference | String | ID of the associated coupon, if applicable. | 57.0 |
| adjustment​Description | String | Description of the adjustment. | 57.0 |
| adjustmentTarget​Type | ConnectApi.​CartPromotionType | Level of the promotion target. Values are:Cart—The target is cart-level.Item—The target is item-level. | 57.0 |
| adjustmentType | ConnectApi.​AdjustmentType | How the price adjustment amount is calculated. Values are:AdjustmentAmount—The adjustment is a fixed amount.AdjustmentPercentage—The adjustment is a percentage. | 57.0 |
| adjustmentValue | String | Value of the price adjustment. | 57.0 |
| baseAmount | String | Total adjustment amount. | 57.0 |
| cartAdjustment​GroupId | String | ID of the associated cart adjustment group. | 57.0 |
| cartItemId | String | ID of the associated cart item. | 57.0 |
| id | String | ID of the cart item price adjustment. | 57.0 |
| priceAdjustment​CauseId | String | ID of the associated promotion. | 57.0 |
| priority | Integer | Where in the sequence of adjustments this adjustment was applied. | 57.0 |

#### See Also

-   [ConnectApi.PromotionCartItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_promotion_cart_item.htm "A cart item and its adjustments.")

-   [ConnectApi.PromotionCart](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_promotion_cart.htm "A cart, its items, and its adjustment groups.")

-   [ConnectApi.PromotionEvaluation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_promotion_evaluation.htm "Results of a promotion evaluation.")

-   [evaluate(salesTransaction)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm#apex_ConnectAPI_CommercePromotions_evaluate_1 "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.")

## Related Topics

- ConnectApi.​AdjustmentAmount​Scope (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​CartPromotionType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​AdjustmentType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.PromotionCartItem (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_promotion_cart_item.htm)
- ConnectApi.PromotionCart (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_promotion_cart.htm)
- ConnectApi.PromotionEvaluation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_promotion_evaluation.htm)
- evaluate(salesTransaction) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm)
