---
title: "Rating Waterfall Response"
domain: revenue-cloud
topic: rating-waterfall-response
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:08.321Z
estimatedTokens: 184
keywords: [Rating, Waterfall, Response, Output, representation, rating, waterfall, request.]
---

# Rating Waterfall Response

> Output representation of a rating waterfall request.

# Rating Waterfall Response

Output representation of a rating waterfall request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fieldTo​TagName​Mapping | Map<String, String> | Mappings of field to tag names. | Small, 62.0 | 62.0 |
| input​Parameters | Map<String, Object> | Parameters of rating element input. | Small, 62.0 | 62.0 |
| output​Parameters | Map<String, Object> | Parameters of rating element output. | Small, 62.0 | 62.0 |
| pricing​Element | Adjustment Details | Details of the rate adjustment of a rating element. | Small, 62.0 | 62.0 |
| sequence | Integer | Sequence of rating element execution. | Small, 62.0 | 62.0 |

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

- Adjustment Details (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_rate_adjustment_detail.htm)
