---
title: "Usage Product Validation"
domain: revenue-cloud
topic: usage-product-validation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.067Z
estimatedTokens: 129
keywords: [Usage, Product, Validation, Output, representation, performed, validations]
---

# Usage Product Validation

> Output representation of all the performed validations.

# Usage Product Validation

Output representation of all the performed validations.

JSON example

This example shows the validation output with errors and warnings.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| success | Boolean | Indicates whether the product validation passed (true) or failed (false). | Big, 66.0 | 66.0 |
| errors | Error Details[] | List of top-level error details when validation fails. | Big, 66.0 | 66.0 |

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
            "validationErrors": [
              {
                "errors": [
                  {
                    "errorCode": "EFFECTIVITY_MISMATCH",
                    "errorMessages": [
                      {
                        "errorMessage": "PUR and RCE effective date ranges must have overlap for proper rating functionality",
                        "errorDetails": [
                          {
                            "relatedObjectAPIName": "ProductUsageRule",
                            "records": [
                              {
                                "id": "a0bxx0000004CqZAAU",
                                "name": "PUR-001"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ],
                "ruleName": "Usage vs Rating Effectivity"
              }
            ],
            "validationWarnings": []
          }
        }
      ]
    }
  ],
  "success": false
}
```

## Related Topics

- Error Details (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_error_output.htm)
