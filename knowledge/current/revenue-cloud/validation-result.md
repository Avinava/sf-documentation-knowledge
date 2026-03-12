---
title: "Validation Result"
domain: revenue-cloud
topic: validation-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.080Z
estimatedTokens: 132
keywords: [Validation, Result, Output, representation, results, grouped, rule]
---

# Validation Result

> Output representation of the validation results grouped by rule name.

# Validation Result

Output representation of the validation results grouped by rule name.

JSON example

This example shows a validation result with errors and warnings.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| validationErrors | Validation Error[] | List of validation errors grouped by rule name. | Big, 66.0 | 66.0 |
| validationWarnings | Validation Warning[] | List of validation warnings grouped by rule name. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "validationResult": {
    "validationErrors": [
      {
        "ruleName": "Usage vs Rating Effectivity",
        "errors": []
      }
    ],
    "validationWarnings": [
      {
        "ruleName": "Performance Optimization",
        "warnings": []
      }
    ]
  }
}
```

## Related Topics

- Validation Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_validation_error_output.htm)
- Validation Warning (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_validation_warning_output.htm)
