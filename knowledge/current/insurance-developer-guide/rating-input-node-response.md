---
title: "Rating Input Node Response"
domain: insurance-developer-guide
topic: rating-input-node-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.761Z
estimatedTokens: 177
keywords: [Rating, Input, Node, Output, representation, hierarchy]
---

# Rating Input Node Response

> Output representation of a single node in the rating input hierarchy.

# Rating Input Node Response

Output representation of a single node in the rating input hierarchy.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Map<String, Object> | Map of additional fields that must be updated in the quote context. | Big, 66.0 | 66.0 |
| attributes | Map<String, Object> | Map of product-specific attributes in key-value pairs that are used to determine pricing. | Big, 66.0 | 66.0 |
| instanceKeys | String[] | List of the instance keys for the product hierarchy. | Big, 66.0 | 66.0 |
| productCode | String | Unique code to identify a product. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "additionalFields": {},
  "attributes": {},
  "instanceKeys": [
    "Key1"
  ],
  "productCode": "ProductCode1"
}
```
