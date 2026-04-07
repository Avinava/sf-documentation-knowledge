---
title: "Promotion Product Categories Input"
domain: chatterapi
topic: promotion-product-categories-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:09.871Z
estimatedTokens: 97
keywords: [Promotion, Product, Categories, IDs, category]
---

> IDs of a product and associated category.

# Promotion Product Categories Input

IDs of a product and associated category.

Root XML tag

<productCategoriesPair>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| categoryId | String | ID of the category. | Required | 57.0 |
| productId | String | ID of the product. | Required | 57.0 |

## Code Examples

```
{
  "categoryId" : "001xx000003GZ6NAAW",
  "productId": "001xx000003GZ6NAAW"
}
```
