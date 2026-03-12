---
title: "ConnectApi.PromotionEvaluateInput"
domain: apex-reference
topic: connectapipromotionevaluateinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:25.398Z
estimatedTokens: 647
keywords: [ConnectApi.PromotionEvaluateInput, Find, promotions, customer, eligible, compute, their, discounts.]
---

# ConnectApi.PromotionEvaluateInput

> Find promotions that the customer is eligible for and compute their discounts.

# ConnectApi.PromotionEvaluateInput

Find promotions that the customer is eligible for and compute their discounts.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cart | ConnectApi.PromotionCart​Input | Cart and its items. | Required | 57.0 |
| cartDelivery​Groups | List<ConnectApi.PromotionCartDeliveryGroupInput> | List of cart delivery groups associated with the items in the cart. Available if shipping promotions are enabled. | Required when evaluating shipping promotions | 57.0 |
| couponCodes | List<String> | Collection of coupon codes to enable promotions. A customer can apply a maximum of two coupons per cart. | Optional | 57.0 |
| effectiveAccount​Id | String | ID of the account for which the request is made. | Required if segments isn’t specified | 57.0 |
| isItemizeHeader​Adjustments | Boolean | Specifies whether order-level adjustments are itemized (true) or not (false). If unspecified, the default value is false. | Optional | 57.0 |
| parentProducts | List<ConnectApi.​PromotionParent​ProductsInput> | Collection of parent product IDs mapped to their variation product IDs. | Optional | 57.0 |
| productCategories | List<ConnectApi.​PromotionProduct​CategoriesInput> | Collection of product IDs mapped to their associated category IDs. | Optional | 57.0 |
| segments | List<String> | All promotions associated with promotion segments specified in this collection are active and can be evaluated against the cart. Additionally, any segments associated with a store or buyer group are also still evaluated against the cart. If this field is not present, only the promotions associated with a store or buyer group are evaluated. | Optional | 57.0 |
| webStoreId | String | ID of the store for which the request is made. If unspecified, defined segments must be used instead. | Optional | 57.0 |

#### See Also

-   [evaluate(salesTransaction)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm#apex_ConnectAPI_CommercePromotions_evaluate_1 "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.")

## Related Topics

- ConnectApi.PromotionCart​Input (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_promotion_cart.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.PromotionCartDeliveryGroupInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_promotion_cart_delivery_group.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​PromotionParent​ProductsInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_promotion_parent_products.htm)
- ConnectApi.​PromotionProduct​CategoriesInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_promotion_product_categories.htm)
- evaluate(salesTransaction) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm)
