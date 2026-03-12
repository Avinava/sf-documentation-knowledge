---
title: "Commerce Webstore Promotions, Execute Action"
domain: chatterapi
topic: commerce-webstore-promotions-execute-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.548Z
estimatedTokens: 540
keywords: [Commerce, Webstore, Promotions, Execute, Action, associated, promotion, discounts, cart, items]
---

# Commerce Webstore Promotions, Execute Action

> Applies associated promotion discounts to a cart and its items.

# Commerce Webstore Promotions, Execute Action

Applies associated promotion discounts to a cart and its items.

Resource

```

```

Available version

53.0–55.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

In version 56.0 and later, use [Commerce Webstore Promotions, Evaluate Action](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm "Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.").

HTTP methods

POST

Request body for POST

Root XML tag

<salesTransaction>

JSON example (percentage discount applied to entire transaction)

```

```

JSON example (specific adjustment amount applied to one item)

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the account for which the request is made. | Required | 53.0 |
| sales​Transaction | Map<String, Object> | Map of a cart, its items, and its price adjustments. The fields shown in the example are required. Additional fields are allowed but ignored.NoteThe CartItem.SalesPrice field is used to pass the unit price after all price adjustments (tiered discounts) have been applied. The value in this field corresponds to the value of the CartItem.UnitAdjustedPrice field (which is an ignored field).NoteIn error messages, the SalesPrice field is referred to as StartingUnitPrice. | Required | 53.0 |

Response body for POST

[Promotion Execution](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_execution.htm "Promotion discounts applied to a cart and its items.")

## Code Examples

```
/commerce/webstores/webstoreId/promotions/actions/execute
```

```
{
   "effectiveAccountId":"001RM000004ywq7YAA",
   "salesTransaction":{
      "attributes":{
         "type":"WebCart"
      },
      "Id":"0a6RM00000009XAYAY",
      "CurrencyIsoCode":"USD",
      "WebCartAdjustmentGroups":{
         "records":[
            {
               "attributes":{
                  "type":"WebCartAdjustmentGroup"
               },
               "AdjustmentSource":"Promotion",
               "AdjustmentType":"AdjustmentPercentage",
               "AdjustmentValue":-20,
               "PriceAdjustmentCauseId":"0c8RM0000004CrMYAU",
               "Priority":2
            }
         ]
      },
      "CartItems":{
         "records":[
            {
               "attributes":{
                  "type":"CartItem"
               },
               "Id":"0a9RM0000004OseYAE",
               "Product2Id":"01tRM000000QVWKYA4",
               "Quantity":15,
               "SalesPrice":45.00,
                "CartItemPriceAdjustments":{
                  "records":[
                     {
                        "attributes":{
                           "type":"CartItemPriceAdjustment"
                        },
                        "AdjustmentSource":"Promotion",
                        "AdjustmentType":"AdjustmentPercentage",
                        "AdjustmentValue":"-10.0",
                        "PriceAdjustmentCauseId":"0c8RM00000000xUYAQ",
                        "Priority":1
                     }
                  ]
               }
            },
            {
               "attributes":{
                  "type":"CartItem"
               },
               "Id":"0a9RM0000004OsfYAE",
               "Product2Id":"01tRM000000QVW7YAO",
               "Quantity":5,
               "SalesPrice":99.50
            }
         ]
      }
   }
}
```

```
{
   "effectiveAccountId":"001RM000004ywq7YAA",
   "salesTransaction":{
      "attributes":{
         "type":"WebCart"
      },
      "Id":"0a6RM00000009XAYAY",
      "CurrencyIsoCode":"USD",
      "WebCartAdjustmentGroups":{
         "records":[
            {
               "attributes":{
                  "type":"WebCartAdjustmentGroup"
               },
               "AdjustmentSource":"Promotion",
               "AdjustmentType":"AdjustmentPercentage",
               "AdjustmentValue":-20,
               "PriceAdjustmentCauseId":"0c8RM0000004CrMYAU",
               "Priority":2
            }
         ]
      },
      "CartItems":{
         "records":[
            {
               "attributes":{
                  "type":"CartItem"
               },
               "Id":"0a9RM0000004OseYAE",
               "Product2Id":"01tRM000000QVWKYA4",
               "Quantity":15,
               "SalesPrice":45.00,
                "CartItemPriceAdjustments":{
                  "records":[
                     {
                        "attributes":{
                           "type":"CartItemPriceAdjustment"
                        },
                        "AdjustmentSource":"Promotion",
                        "AdjustmentType":"AdjustmentAmount",
                        "AdjustmentAmountScope":"Unit",
                        "AdjustmentValue":"-10.0",
                        "PriceAdjustmentCauseId":"0c8RM00000000xUYAQ",
                        "Priority":1
                     }
                  ]
               }
            },
            {
               "attributes":{
                  "type":"CartItem"
               },
               "Id":"0a9RM0000004OsfYAE",
               "Product2Id":"01tRM000000QVW7YAO",
               "Quantity":5,
               "SalesPrice":99.50
            }
         ]
      }
   }
}
```

## Related Topics

- Commerce Webstore Promotions, Evaluate Action (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_promotions_actions_evaluate.htm)
- Promotion Execution (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_execution.htm)
