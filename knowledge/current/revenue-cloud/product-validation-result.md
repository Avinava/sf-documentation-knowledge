---
title: "Product Validation Result"
domain: revenue-cloud
topic: product-validation-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.783Z
estimatedTokens: 121
keywords: [Product, Validation, Result, Output, representation, specific]
---

# Product Validation Result

> Output representation of the validation result for a specific product.

# Product Validation Result

Output representation of the validation result for a specific product.

JSON example

This example shows the product validation result.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| productId | String | Unique product ID that's being validated. | Big, 66.0 | 66.0 |
| validationResult | Validation Result | Validation results grouped by rule name. | Big, 66.0 | 66.0 |

## Code Examples

```
{
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
```

## Related Topics

- Validation Result (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_validation_result_output.htm)
