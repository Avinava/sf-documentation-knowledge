---
title: "ConnectApi.PromotionCartDeliveryGroupInput"
domain: apex-reference
topic: connectapipromotioncartdeliverygroupinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.462Z
keywords: [ConnectApi.PromotionCartDeliveryGroupInput, See]
---

# ConnectApi.PromotionCartDeliveryGroupInput

# ConnectApi.PromotionCartDeliveryGroupInput

IDs of the cart delivery group and its delivery method.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cartDelivery​GroupId | String | ID of the cart delivery group. | Required | 57.0 |
| deliveryMethodId | String | ID of the order delivery method. | Required | 57.0 |

#### See Also

-   [ConnectApi.PromotionEvaluateInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_promotion_evaluate.htm "Find promotions that the customer is eligible for and compute their discounts.")
    
-   [evaluate(salesTransaction)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm#apex_ConnectAPI_CommercePromotions_evaluate_1 "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.")