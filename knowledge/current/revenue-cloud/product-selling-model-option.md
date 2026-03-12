---
title: "Product Selling Model Option"
domain: revenue-cloud
topic: product-selling-model-option
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.226Z
estimatedTokens: 242
keywords: [Product, Selling, Model, Option, Output, representation, definition, product, selling, model, option., Important]
---

# Product Selling Model Option

> Output representation of the definition of the product selling model option.

# Product Selling Model Option

Output representation of the definition of the product selling model option.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the record. | Small, 60.0 | 60.0 |
| isDefault | Boolean | Indicates whether this model option is the default product selling model option (true) or not (false). | Small, 60.0 | 60.0 |
| product​Id | String | ID of the product. | Small, 60.0 | 60.0 |
| product​Selling​Model | Product Selling Model | Master-detail field to the product selling model. | Small, 60.0 | 60.0 |

## Code Examples

```
"productSellingModelOptions": [
   {
    "id": "0iOT10000004CMrMAM",
    "isDefault": false,
    "productId": "01tT1000000F0YyIAK",
    "productSellingModel": {
    "id": "0jPT10000004CAfMAM",
    "name": "OneTimePSM",
    "pricingTerm": 1,
    "pricingTermUnit": "Months",
    "sellingModelType": "TermDefined",
    "status": "Active"
  }
}]
```

## Related Topics

- Product Selling Model (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_product_selling_model_output.htm)
