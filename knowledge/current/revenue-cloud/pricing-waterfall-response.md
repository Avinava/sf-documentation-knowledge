---
title: "Pricing Waterfall Response"
domain: revenue-cloud
topic: pricing-waterfall-response
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:09.634Z
estimatedTokens: 186
keywords: [Pricing, Waterfall, Output, representation]
---

# Pricing Waterfall Response

> Output representation of a pricing waterfall request.

# Pricing Waterfall Response

Output representation of a pricing waterfall request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fieldTo​TagName​Mapping | Map<String, String> | Mappings of field to tag names. | Small, 60.0 | 60.0 |
| input​Parameters | Map<String, Object> | Parameters of pricing element input. | Small, 60.0 | 60.0 |
| output​Parameters | Map<String, Object> | Parameters of pricing element output. | Small, 60.0 | 60.0 |
| pricing​Element | Adjustment Details | Details of the price adjustment of a pricing element. | Small, 60.0 | 60.0 |
| sequence | Integer | Sequence of pricing element execution. | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "inputParameters": {
    "productId": "01txx0000006i2SAAQ",
    "pricebookId": "01sxx0000005ptpAAA",
    "pricingModelType": "OneTime"
  },
  "fieldToTagNameMapping": {
    "Product2Id": "ItemProduct",
    "Subtotal": "Subtotal",
    "Pricebook2Id": "Pricebook",
    "Quantity": "ItemQuantity",
    "LineItemId": "SalesTransactionSource",
    "ListPrice": "ItemListPrice"
  },
  "sequence": 0,
  "outputParameters": {
    "listPrice": "10"
  },
  "pricingElement": {
    "adjustments": [
      {
        "adjustmentType": null,
        "adjustmentValue": null
      }
    ],
    "name": "List Price"
  }
}
```

## Related Topics

- Adjustment
                  Details (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_adjustment_detail.htm)
