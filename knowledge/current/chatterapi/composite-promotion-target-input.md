---
title: "Composite Promotion Target Input"
domain: chatterapi
topic: composite-promotion-target-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.625Z
estimatedTokens: 333
keywords: [Composite, Promotion, Target, Input, representation]
---

# Composite Promotion Target Input

> Input representation of the promotion target.

# Composite Promotion Target Input

Input representation of the promotion target.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| adjustment​Type | String | Adjustment type for the promotion target. Possible values are:FixedAmountOff​LineItemTotal—Fixed amount off line item total.FixedAmountOff​Transaction—Fixed amount off transaction.FixedAmountOff​UnitPrice—Fixed amount off unit price.FixedPrice—Fixed price.PercentageDiscount—Percentage discount.TotalFixedPrice—Total fixed price. | Required | 62.0 |
| adjustment​Value | String | Discount value. | Required | 62.0 |
| currencyIso​Code | String | Three-letter ISO 4217 currency code associated with the promotion target. | Optional | 62.0 |
| isMinItem​CountRequired | Boolean | Indicates whether discount apply only when a cart reaches the quantity limit (true) or not (false). | Optional | 62.0 |
| restriction​Quantity | String | The maximum number of items that can receive the discount. | Optional | 62.0 |
| targetReference​Type | String | Reference type of the promotion target. Possible values are:ShippingTransaction | Required | 62.0 |
| targetReferences | Item Reference Input[] | List of products or categories associated with the promotion target. | Required | 62.0 |

## Code Examples

```
[
   {
      "adjustmentType": "PercentageDiscount",
      "adjustmentValue": "10",
      "currencyIsoCode": "USD",
      "isMinItemCountRequired": false,
      "restrictionQuantity": null,
      "ruleCriteriaType": "ANY",
      "targetReferences": [
         {
            "id": "01tSB0000002p01YAA",
            "itemReferenceType": "Product",
            "name": "Alpine Energy Drink Chai Post 0.5L PET - 6 pack",
            "operatorType": "EQUALS_TO",
            "value": "EnergyDrink"
         }
      ]
   }
]
```

## Related Topics

- Item Reference
                        Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_item_reference_input.htm)
