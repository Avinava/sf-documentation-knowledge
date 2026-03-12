---
title: "Promotion Execution Input"
domain: chatterapi
topic: promotion-execution-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.598Z
estimatedTokens: 363
keywords: [Promotion, Execution, Input, Cart, items, associated, discounts]
---

# Promotion Execution Input

> Cart and its items, with associated promotion discounts for the
			items.

# Promotion Execution Input

Cart and its items, with associated promotion discounts for the items.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This request body isn’t available in version 56.0 and later. In version 56.0 and later, use [Promotion Evaluation Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_evaluation_input.htm "Find promotions that the customer is eligible for and compute their discounts.").

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

## Code Examples

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

- Promotion Evaluation Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_evaluation_input.htm)
