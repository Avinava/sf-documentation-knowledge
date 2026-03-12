---
title: "Configurator Product Selling Model"
domain: revenue-cloud
topic: configurator-product-selling-model
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.270Z
estimatedTokens: 196
keywords: [Configurator, Product, Selling, Model, Output, representation, configuration]
---

# Configurator Product Selling Model

> Output representation of the product selling model in a product
    configuration.

# Configurator Product Selling Model

Output representation of the product selling model in a product configuration.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the product selling model. | Small, 60.0 | 60.0 |
| name | String | Name of the product selling model. | Small, 60.0 | 60.0 |
| pricing​Term | Integer | Pricing term of the product selling model. | Small, 60.0 | 60.0 |
| pricing​TermUnit | String | Pricing term unit of the product selling model. | Small, 60.0 | 60.0 |
| selling​ModelType | String | Selling model type of the product selling model. | Small, 60.0 | 60.0 |
| status | String | Status of the product selling model. | Small, 60.0 | 60.0 |

## Code Examples

```
"productSellingModel": {
         "id": "0jPxx0000000085EAA",
         "name": "Evergreen Annually",
         "pricingTerm": 1,
         "pricingTermUnit": "Annual",
         "sellingModelType": "Evergreen",
         "status": "Active"
  }
```
