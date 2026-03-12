---
title: "Product Catalog Management Error"
domain: revenue-cloud
topic: product-catalog-management-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.945Z
estimatedTokens: 113
keywords: [Product, Catalog, Management, Error, Output, representation, contains, error, details, including, codes, messages.]
---

# Product Catalog Management Error

> Output representation that contains error details, including error codes and
    messages.

# Product Catalog Management Error

Output representation that contains error details, including error codes and messages.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Error code that identifies the type of error. | Small, 66.0 | 66.0 |
| message | String | Message that explains the reason for the error. | Small, 66.0 | 66.0 |

## Code Examples

```
{
  "errorCode": "INSUFFICIENT_ACCESS",
  "message": "Insufficient access rights on cross-reference ID"
}
```
