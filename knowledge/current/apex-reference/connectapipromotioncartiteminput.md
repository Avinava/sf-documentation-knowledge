---
title: "ConnectApi.PromotionCartItemInput"
domain: apex-reference
topic: connectapipromotioncartiteminput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.468Z
keywords: [ConnectApi.PromotionCartItemInput, See]
---

# ConnectApi.PromotionCartItemInput

# ConnectApi.PromotionCartItemInput

Item in a cart during promotion evaluation.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cartDelivery​GroupId | String | ID of the cart delivery group. | Required when evaluating shipping promotions | 57.0 |
| cartId | String | ID of the cart. | Optional | 57.0 |
| id | String | ID of the cart item. Must be unique across all items in the cart. | Required | 57.0 |
| itemDescription | String | Description of the cart item. | Optional | 57.0 |
| itemName | String | Name of the cart item. | Optional | 57.0 |
| listPrice | String | List price of the cart item. | Optional | 57.0 |
| product2Id | String | Product ID of the cart item. | Required if sku isn’t specified | 57.0 |
| quantity | String | Number of items in the cart. | Required | 57.0 |
| salesPrice | String | Sales price of the cart item. This is the price per quantity and the value used to compute the discount. If salesPrice and totalLineBaseAmount are specified, totalLineBaseAmount is used. | Required if totalLineBaseAmount isn’t specified | 57.0 |
| sku | String | Stock keeping unit (SKU) of the cart item. | Required if product2Id isn’t specified | 57.0 |
| subType | ConnectApi.​CartItemSubType | Subtype of item in a cart.Possible values are:Bonus—A bonus product.Gift—A gift product. | Optional | 64.0 |
| totalLineBase​Amount | String | Total amount for the cart item, equal to sales price multiplied by quantity. This value is used to compute the discount. If salesPrice and totalLineBaseAmount are specified, totalLineBaseAmount is used. | Required if salesPrice isn’t specified | 57.0 |
| totalListBase​Amount | String | Total amount for the cart item based on list price and quantity. | Optional | 57.0 |
| type | ConnectApi.​CartItemType | Type of item in a cart. Values are:DeliveryChargeProduct | Required when evaluating shipping promotions | 57.0 |

#### See Also

-   [ConnectApi.PromotionCartInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_promotion_cart.htm "Cart during promotion evaluation.")
    
-   [ConnectApi.PromotionEvaluateInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_promotion_evaluate.htm "Find promotions that the customer is eligible for and compute their discounts.")
    
-   [evaluate(salesTransaction)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm#apex_ConnectAPI_CommercePromotions_evaluate_1 "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.")