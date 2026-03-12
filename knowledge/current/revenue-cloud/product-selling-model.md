---
title: "Product Selling Model"
domain: revenue-cloud
topic: product-selling-model
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.776Z
estimatedTokens: 203
keywords: [Product, Selling, Model, Output, representation, definition]
---

# Product Selling Model

> Output representation of the definition of the product selling model.

# Product Selling Model

Output representation of the definition of the product selling model.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the record. | Small, 60.0 | 60.0 |
| name | String | Name of the record. | Small, 60.0 | 60.0 |
| pricing​Term | Integer | Duration of the selling model. | Small, 60.0 | 60.0 |
| pricing​Term​Unit | String | Units of the pricing term. | Small, 60.0 | 60.0 |
| selling​Model​Type | String | Different models of selling the product. Valid values are:OneTimeTermDefinedEvergreen | Small, 60.0 | 60.0 |
| status | String | Status of the selling model. For example, whether the selling model is active and can be used in transactions. | Small, 60.0 | 60.0 |

## Code Examples

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
