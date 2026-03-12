---
title: "Promotion Cart Input"
domain: chatterapi
topic: promotion-cart-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.573Z
estimatedTokens: 448
keywords: [Promotion, Cart, Input, evaluation]
---

# Promotion Cart Input

> Cart during promotion evaluation.

# Promotion Cart Input

Cart during promotion evaluation.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cartAdjustment​Groups | Promotion Cart Adjustment Group Input[] | Collection of cart adjustment groups associated with the items in the cart. | Optional | 60.0 |
| cartDelivery​Groups | Promotion Cart Delivery Group Input[] | Collection of cart delivery groups associated with the items in the cart. Available if shipping promotions are enabled. | Required when evaluating shipping promotions | 60.0 |
| cartItems | Promotion Cart Item Input[] | A collection of items in the cart. | Required | 56.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the cart. | Required for multi-currency orgs | 56.0 |
| id | String | ID of the cart. | Optional | 56.0 |

#### See Also

-   [Promotion Evaluation Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_evaluation_input.htm "Find promotions that the customer is eligible for and compute their discounts.")

-   [Commerce Webstore Promotions, Evaluate Action](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.")

## Code Examples

```
{
   "cartDeliveryGroups":[
      {
         "cartDeliveryGroupId":"0a7xx000000001dAAA",
         "cartDeliveryGroupMethods":[
            {
               "cartDeliveryMethodId":"2Dmxx0000004MMuCAM",
               "price":"25.00"
            },
            {
               "cartDeliveryMethodId":"2Dmxx0000004MMuCAG",
               "price":"25.00"
            }
         ]
      }
   ],
   "currencyIsoCode":"USD",
   "id":"3z6xx000000001eAAA",
   "cartAdjustmentGroups":[
      {
         "id":"01txx0000006i2SAAQ",
         "cartId":"3z6xx000000001eAAA",
         "priceAdjustmentCauseId":"0c8xx0000000001AAA",
         "adjustmentDescription":"test",
         "priority":2,
         "adjustmentType":"AdjustmentPercentage",
         "adjustmentValue":-10.0,
         "baseAmount":-1.8,
         "adjustmentBasisReference":null
      }
   ],
   "cartItems":[
      {
         "id":"01txx0000006i2SAAQ",
         "type":"Product",
         "product2Id":"01txx0000006i2SAAQ",
         "sku":null,
         "quantity":1,
         "salesPrice":20,
         "totalNetAmount":18,
         "cartDeliveryGroupId":"0a7xx000000001dAAA",
         "cartItemPriceAdjustments":[
            {
               "cartItemId":"01txx0000006i2SAAQ",
               "priceAdjustmentCauseId":"0c8xx0000000001AAA",
               "priority":1,
               "adjustmentDescription":null,
               "adjustmentType":"AdjustmentAmount",
               "adjustmentAmountScope":"Total",
               "adjustmentTargetType":"Item",
               "adjustmentBasisReference":null,
               "baseAmount":-2,
               "adjustmentValue":-2.0
            }
         ]
      }
   ]
}
```

## Related Topics

- Promotion Cart Adjustment Group Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_cart_adjustment_group_input.htm)
- Promotion Cart Delivery Group Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_cart_delivery_group_input.htm)
- Promotion Cart Item
                                            Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_cart_item_input.htm)
- Promotion Evaluation Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_evaluation_input.htm)
- Commerce Webstore Promotions, Evaluate Action (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm)
