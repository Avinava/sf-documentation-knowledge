---
title: "Product Selling Model"
domain: revenue-cloud
topic: product-selling-model
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-07-26T01:59:43.800Z
estimatedTokens: 227
keywords: [Product, Selling, Model, definition]
---

> Product Selling Model Component output representation

# Product Selling Model

Product Selling Model Component output representation

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| doesAutoRenewByDefault | Boolean | Indicates whether the product is automatically renewed by default (true) or not (false). | Small, 67.0 | 67.0 |
| id | String | ID of the product selling model. | Small, 67.0 | 67.0 |
| name | String | Name of the product selling model. | Small, 67.0 | 67.0 |
| pricingTerm | Integer | Pricing term of the product selling model. | Small, 67.0 | 67.0 |
| pricingTermUnit | String | Pricing term unit of the product selling model. | Small, 67.0 | 67.0 |
| sellingModelType | String | Selling model type associated with the product selling model. | Small, 67.0 | 67.0 |
| status | String | Status of the product selling model. | Small, 67.0 | 67.0 |

## Code Examples

```
{
  "productSellingModel": {
    "doesAutoRenewByDefault": false,
    "id": "0jPSG000000Avcv2AC",
    "name": "One Time",
    "sellingModelType": "OneTime",
    "status": "Active"
  }
}
```

```
"productSellingModel": 
{
  "id": "0jPT10000004CAfMAM",
  "name": "OneTimePSM",
  "pricingTerm": 1,
  "pricingTermUnit": "Months",
  "sellingModelType": "TermDefined",
  "status": "Active"
}
}]
```
