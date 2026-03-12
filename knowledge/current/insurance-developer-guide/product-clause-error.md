---
title: "Product Clause Error"
domain: insurance-developer-guide
topic: product-clause-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.661Z
estimatedTokens: 103
keywords: [Product, Clause, Error, Output, representation, occurred, operation]
---

# Product Clause Error

> Output representation of an error that occurred during the product clause
  operation.

# Product Clause Error

Output representation of an error that occurred during the product clause operation.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | Error code that identifies the type of error. | Big, 65.0 | 65.0 |
| message | String | Message that describes the error. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "code": "DUPLICATE_API_NAME",
  "message": "A product clause with this API name already exists."
}
```
