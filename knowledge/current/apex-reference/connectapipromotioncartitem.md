---
title: "ConnectApi.PromotionCartItem"
domain: apex-reference
topic: connectapipromotioncartitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:28.710Z
estimatedTokens: 630
keywords: [ConnectApi.PromotionCartItem, cart, item, adjustments]
---

# ConnectApi.PromotionCartItem

> A cart item and its adjustments.

# ConnectApi.PromotionCartItem

A cart item and its adjustments.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| cartDelivery​GroupId | String | ID of the associated cart delivery group. | 57.0 |
| cartId | String | ID of the associated cart. | 57.0 |
| cartItemPrice​Adjustments | List<ConnectApi.PromotionCartItemPriceAdjustment> | List of price adjustments applied to the cart item. | 57.0 |
| id | String | ID of the cart item. | 57.0 |
| itemDescription | String | Description of the cart item. | 57.0 |
| itemName | String | Name of the cart item. | 57.0 |
| listPrice | String | Unit list price of the cart item. | 57.0 |
| product2Id | String | ID of the product. | 57.0 |
| quantity | String | Quantity of the cart item. | 57.0 |
| salesPrice | String | Unit sales price of the cart item. | 57.0 |
| sku | String | Stock keeping unit of the cart item. | 57.0 |
| totalAdjustment​BaseAmount | String | Total adjustment amount for the cart item. | 57.0 |
| totalLine​BaseAmount | String | Total amount for the cart item, based on sales price and quantity, not including adjustments. | 57.0 |
| totalList​BaseAmount | String | Total amount for the cart item, based on list price and quantity, not including adjustments. | 57.0 |
| totalNetAmount | String | Total amount for the cart item, based on list price and quantity, including adjustments. | 57.0 |
| type | ConnectApi.​CartItemType | Type of item in a cart. Values are:DeliveryChargeProduct | 57.0 |

#### See Also

-   [ConnectApi.PromotionCart](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_promotion_cart.htm "A cart, its items, and its adjustment groups.")

-   [ConnectApi.PromotionEvaluation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_promotion_evaluation.htm "Results of a promotion evaluation.")

-   [evaluate(salesTransaction)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm#apex_ConnectAPI_CommercePromotions_evaluate_1 "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.PromotionCartItemPriceAdjustment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_promotion_cart_item_price_adjustment.htm)
- ConnectApi.​CartItemType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.PromotionCart (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_promotion_cart.htm)
- ConnectApi.PromotionEvaluation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_promotion_evaluation.htm)
- evaluate(salesTransaction) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm)
