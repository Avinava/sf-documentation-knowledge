---
title: "Promotion Evaluation Input"
domain: chatterapi
topic: promotion-evaluation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.592Z
estimatedTokens: 683
keywords: [Promotion, Evaluation, Input, promotions, customer, eligible, compute, their, discounts]
---

# Promotion Evaluation Input

> Find promotions that the customer is eligible for and compute their
      discounts.

# Promotion Evaluation Input

Find promotions that the customer is eligible for and compute their discounts.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cart | Promotion Cart Input | Cart and its items. | Required | 56.0 |
| cartDelivery​Groups | Promotion Cart Delivery Group Input[] | List of cart delivery groups associated with the items in the cart. Available if shipping promotions are enabled. | Required when evaluating shipping promotions | 57.0 |
| couponCodes | String[] | Collection of coupon codes to enable promotions. A customer can apply a maximum of two coupons per cart. | Optional | 56.0 |
| effectiveAccountId | String | ID of the account for which the request is made. | Optional | 56.0 |
| isItemizeHeader​Adjustments | Boolean | Specifies whether order-level adjustments are itemized (true) or not (false). If unspecified, the default value is false. | Optional | 56.0 |
| parentProducts | Promotion Parent Products Input[] | Collection of parent product IDs mapped to their variation product IDs. | Optional | 56.0 |
| productCategories | Promotion Product Categories Input[] | Collection of product IDs mapped to their associated category IDs. | Optional | 56.0 |
| scope | String | Promotion evaluation scope. Valid values are:CartDeliveryIf no value is provided, default is Cart. If you want any shipping promotions to be evaluated, set to Delivery. | Optional | 60.0 |
| segments | String[] | All promotions associated with promotion segments specified in this collection are active and can be evaluated against the cart. Additionally, any segments associated with a store or buyer group are also still evaluated against the cart. If this field is not present, only the promotions associated with a store or buyer group are evaluated. | Optional | 56.0 |
| webStoreId | List<String> | ID of the store for which the request is made. If unspecified, defined segments must be used instead. | Optional | 56.0 |

#### See Also

-   [Commerce Webstore Promotions, Evaluate Action](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.")

## Code Examples

```
{
   "cart":{
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
            "id":"0m9xx0000006j3SAAQ",
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
                  "id":"0U1xx0000006f1DCAQ",
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
   },
   "couponCodes":[
      
   ],
   "effectiveAccountId":null,
   "webStoreId":"0ZExx0000000002GAA",
   "isItemizeHeaderAdjustments":"false",
   "scope":"Delivery"
}
```

## Related Topics

- Promotion Cart Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_cart_input.htm)
- Promotion Cart Delivery Group Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_cart_delivery_group_input.htm)
- Promotion Parent Products Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_parent_products_input.htm)
- Promotion Product Categories Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_product_categories_input.htm)
- Commerce Webstore Promotions, Evaluate Action (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm)
