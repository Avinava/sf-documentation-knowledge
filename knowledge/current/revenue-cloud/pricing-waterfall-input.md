---
title: "Pricing Waterfall Input"
domain: revenue-cloud
topic: pricing-waterfall-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.298Z
estimatedTokens: 180
keywords: [Pricing, Waterfall, Input, representation, pricing, waterfall, details.]
---

# Pricing Waterfall Input

> Input representation of the pricing waterfall details.

# Pricing Waterfall Input

Input representation of the pricing waterfall details.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldTo​TagName​Mapping | Map<String, String> | Mappings of field to tag names. | Optional | 60.0 |
| input​Parameters | Map<String, Object> | Input parameters of the pricing element. | Optional | 60.0 |
| output​Parameters | Map<String, Object> | Output parameters of the pricing element. | Optional | 60.0 |
| pricing​Element | Adjustment Details Input | Details of the pricing element. | Optional | 60.0 |
| sequence | Integer | Sequence of the pricing element execution. | Optional | 60.0 |

## Code Examples

```
"waterfall": [{
        "fieldToTagNameMapping": {
            "Product2Id": "ItemProduct",
            "Subtotal": "Subtotal",
            "Pricebook2Id": "Pricebook",
            "Quantity": "ItemQuantity",
            "LineItemId": "SalesTransactionSource",
            "ListPrice": "ItemListPrice"
  },
      "inputParameters": {
          "Product2Id": "01txx0000006i44AAA",
          "Pricebook2Id": "01sxx0000005q9xAAA",
          "Quantity": 5,
          "LineItemId": "item1"
    },
      "outputParameters": {
          "Subtotal": 50,
          "ListPrice": 10
      },
      "pricingElement": {
          "adjustments": [{
              "AdjustmentValue": "95.00",
              "AdjustmentType": "Amount"
           }],
          "description": null,
          "elementType": "ListPrice",
          "name": "List Price"
      },
          "sequence": 1
    },
    {
        "fieldToTagNameMapping": {
            "PriceAdjustmentScheduleId": "ItemDescription",
            "NetUnitPrice": "ItemNetUnitPrice",
            "Product2Id": "ItemProduct",
            "LowerBound": "ItemQuantity",
            "UpperBound": "ItemQuantity",
            "Subtotal": "Subtotal",
            "Quantity": "ItemQuantity",
            "LineItemId": "SalesTransactionSource",
            "InputUnitPrice": "ItemListPrice"
      },
        "inputParameters": {
            "PriceAdjustmentScheduleId": "84Xxx0000004CGSEA2",
            "Product2Id": "01txx0000006i44AAA",
            "LowerBound": 5,
            "UpperBound": 5,
            "Quantity": 5,
            "LineItemId": "item1",
            "InputUnitPrice": 10
       },
        "outputParameters": {
              "NetUnitPrice": 8.5,
              "Subtotal": 42.5
  },
        "pricingElement": {
              "adjustments": [{
              "AdjustmentValue": "15.00",
              "AdjustmentType": "Percentage"
  }],
      "description": null,
      "elementType": "VolumeDiscount",
      "name": "Volume Discount"
    },
      "sequence": 2
      }
  ]
```

## Related Topics

- Adjustment
                        Details Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_adjustment_details_input.htm)
