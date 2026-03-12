---
title: "Error Details"
domain: revenue-cloud
topic: error-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.700Z
estimatedTokens: 150
keywords: [Error, Details, Output, representation, top-level, error, detail, validation, fails.]
---

# Error Details

> Output representation of the top-level error detail when validation fails.

# Error Details

Output representation of the top-level error detail when validation fails.

JSON example

This example shows a sample error response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Standardized error code. For example, VALIDATION_FAILED. | Big, 66.0 | 66.0 |
| message | String | Human-readable error message that describes the overall validation failure. | Big, 66.0 | 66.0 |
| products | Product Validation Result[] | List of product validation results. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "errors": [
    {
      "errorCode": "VALIDATION_FAILED",
      "message": "Product validation completed with cross-entity errors",
      "products": [
        {
          "productId": "01txx0000006i2gAAA",
          "validationResult": {
            "validationErrors": [],
            "validationWarnings": []
          }
        }
      ]
    }
  ]
}
```

## Related Topics

- Product Validation Result (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_product_validation_result_output.htm)
