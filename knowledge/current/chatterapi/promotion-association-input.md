---
title: "Promotion Association Input"
domain: chatterapi
topic: promotion-association-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.555Z
estimatedTokens: 310
keywords: [Promotion, Association, Input, Cart, items, any, discounts, associated]
---

# Promotion Association Input

> Cart and its cart items before any promotion discounts are
			associated with them.

# Promotion Association Input

Cart and its cart items before any promotion discounts are associated with them.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This request body isn’t available in version 56.0 and later. In version 56.0 and later, use [Promotion Evaluation Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_evaluation_input.htm "Find promotions that the customer is eligible for and compute their discounts.").

Root XML tag

<salesTransaction>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| couponCodes | List<String> | List of coupon codes applied to the transaction. You can apply a maximum of two coupons. | Optional | 54.0 |
| effective​AccountId | String | ID of the account for which the request is made. | Required | 53.0 |
| sales​Transaction | Map<String, Object> | Map of a cart and its items. The fields shown in the example are required to process promotions. Additional fields are allowed but ignored.NoteIn error messages, the TotalPriceAfterAllAdjustments field is referred to as TotalPrice. | Required | 53.0 |

## Code Examples

```
{
   "effectiveAccountId":"001RM000004ywq7YAA",
   "couponCodes": ["CODEA", "CODEB"],
   "salesTransaction":{
      "attributes":{
         "type":"WebCart"
      },
      "Id":"0a6RM00000009XAYAY",
      "CurrencyIsoCode":"USD",
      "TotalAmount":1479.00,
      "CartItems":{
         "records":[
            {
               "attributes":{
                  "type":"CartItem"
               },
               "Id":"0a9RM0000004OseYAE",
               "Product2Id":"01tRM000000QVWKYA4",
               "Quantity":15,
               "TotalPriceAfterAllAdjustments":660.00
            },
            {
               "attributes":{
                  "type":"CartItem"
               },
               "Id":"0a9RM0000004OsfYAE",
               "Product2Id":"01tRM000000QVW7YAO",
               "Quantity":5,
               "TotalPriceAfterAllAdjustments":202.50
            },
            {
               "attributes":{
                  "type":"CartItem"
               },
               "Id":"0a9RM0000004OsgYAE",
               "Product2Id":"01tRM000000QVWFYA4",
               "Quantity":6,
               "TotalPriceAfterAllAdjustments":594.00
            }
         ]
      }
   }
}
```

## Related Topics

- Promotion Evaluation Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_promotion_evaluation_input.htm)
