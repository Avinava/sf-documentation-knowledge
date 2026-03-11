---
title: "ConnectApi.PromotionCartInput"
domain: apex-reference
topic: connectapipromotioncartinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.460Z
keywords: [ConnectApi.PromotionCartInput, See]
---

# ConnectApi.PromotionCartInput

# ConnectApi.PromotionCartInput

Cart during promotion evaluation.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cartAdjustment​Groups | ConnectApi.​PromotionCart​AdjustmentGroupInput[] | Collection of cart adjustment groups associated with the items in the cart. | Optional | 60.0 |
| cartDelivery​Groups | ConnectApi.​PromotionCart​DeliveryGroupInput[] | Collection of cart delivery groups associated with the items in the cart. Available if shipping promotions are enabled. | Required when evaluating shipping promotions | 60.0 |
| cartItems | List<ConnectApi.​PromotionCart​ItemInput> | A collection of items in the cart. | Required | 57.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the cart. | Required for multi-currency orgs | 57.0 |
| id | String | ID of the cart. | Optional | 57.0 |

#### See Also

-   [ConnectApi.PromotionEvaluateInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_promotion_evaluate.htm "Find promotions that the customer is eligible for and compute their discounts.")
    
-   [evaluate(salesTransaction)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm#apex_ConnectAPI_CommercePromotions_evaluate_1 "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.")