---
title: "Product Requirement Specification Error"
domain: mfg-api-devguide
topic: product-requirement-specification-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.987Z
estimatedTokens: 163
keywords: [Product, Requirement, Specification, Error, representation, operations]
---

# Product Requirement Specification Error

> Error representation for Product Requirement Specification operations.

# Product Requirement Specification Error

Error representation for Product Requirement Specification operations.

JSON example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| details | Product Requirement Specification Error Detail[] | A list of specific errors that occurred | Small, 66.0 | 66.0 |
| message | String | A high-level message describing the error | Small, 66.0 | 66.0 |
| requestUniqueId | String | The unique ID from the request, used for tracing | Small, 66.0 | 66.0 |
| status | String | The status of the operation | Small, 66.0 | 66.0 |

## Code Examples

```
{
    "requestUniqueId": "req-12345-abcde",
    "status": "ERROR",
    "message": "Validation failed for Product Requirement Specification",
    "details": [
      {
        "field": "name",
        "message": "Name is required and cannot be empty",
        "code": "REQUIRED_FIELD_MISSING"
      },
      {
        "field": "accountId",
        "message": "Invalid Account ID format",
        "code": "INVALID_ID_FORMAT"
      }
    ]
  }
```

## Related Topics

- Product Requirement Specification Error
                      Detail (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/connect_responses_product_requirement_specification_error_detail.htm)
