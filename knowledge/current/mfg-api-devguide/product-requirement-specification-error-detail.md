---
title: "Product Requirement Specification Error Detail"
domain: mfg-api-devguide
topic: product-requirement-specification-error-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.990Z
estimatedTokens: 142
keywords: [Product, Requirement, Specification, Error, Detail, representation, operations, operation, successful]
---

# Product Requirement Specification Error Detail

> Error representation for Product Requirement Specification operations. Null if the
    operation was successful.

# Product Requirement Specification Error Detail

Error representation for Product Requirement Specification operations. Null if the operation was successful.

JSON example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | An error code identifying the issue | Small, 66.0 | 66.0 |
| field | String | The API name of the field that caused the error, if applicable | Small, 66.0 | 66.0 |
| message | String | A description of the error | Small, 66.0 | 66.0 |

## Code Examples

```
{
    "field": "name",
    "message": "Name is required and cannot be empty",
    "code": "REQUIRED_FIELD_MISSING"
  }
```
