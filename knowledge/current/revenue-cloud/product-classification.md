---
title: "Product Classification"
domain: revenue-cloud
topic: product-classification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.187Z
estimatedTokens: 193
keywords: [Product, Classification, Output, representation, product, classification, details.]
---

# Product Classification

> Output representation of the product classification details.

# Product Classification

Output representation of the product classification details.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | Code of the product classification record. | Small, 61.0 | 61.0 |
| id | String | ID of the product classification record. | Small, 60.0 | 60.0 |
| name | String | Name of the product classification record. If data translation is set up and specified in the org, the translated description is available. | Small, 61.0 | 61.0 |
| parentProduct​Classification​Id | String | ID of the parent product classification. | Small, 65.0 | 65.0 |
| status | String | Status of the product classification record. | Small, 61.0 | 61.0 |

## Code Examples

```
{
  "productClassification": {
    "id": "11BT10000004C9SMAU",
    "name": "class",
    "code": "code",
    "parentProductClassificationId": "11BDU0000004JXq2AM",
    "status": "Active"
  }
}
```
