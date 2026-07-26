---
title: "Product Variants Input"
domain: revenue-cloud
topic: product-variants-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-07-26T01:59:41.118Z
estimatedTokens: 227
keywords: [Product, Variants, retrieve, variation, products, parent, variant]
---

> Input representation of the request to retrieve the variation products associated with
    parent variant products.

# Product Variants Input

Input representation of the request to retrieve the variation products associated with parent variant products.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlation​Id | String | Unique ID to track and associate related events or transactions. If unspecified, a Universally Unique Identifier (UUID) is generated. | Optional | 67.0 |
| parent​Variants​Ids | String[] | List of product IDs for parent variant products whose variations you want to retrieve.If any product ID is blank, invalid, or not found, the API skips that ID and processes the remaining valid IDs. The skipped IDs appear in the inValidProductIds response property. If a product ID is valid but isn't a parent variant product, the API includes it in the nonVariantParentIds response property. | Required | 67.0 |

## Code Examples

```
{
  "correlationId": "9b6bc520-3c82-4d6c-a458-47590370681a",
  "parentVariantsIds": [
    "01tT1000000F0afIAC",
    "01tT1000000F0agIAC"
  ]
}
```
