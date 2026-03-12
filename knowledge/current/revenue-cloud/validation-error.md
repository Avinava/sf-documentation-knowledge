---
title: "Validation Error"
domain: revenue-cloud
topic: validation-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.629Z
estimatedTokens: 124
keywords: [Validation, Error, Output, representation, validation, errors, grouped, rule, name.]
---

# Validation Error

> Output representation of the validation errors grouped by rule name.

# Validation Error

Output representation of the validation errors grouped by rule name.

JSON example

This example shows a validation error grouped by rule name.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| ruleName | String | Name of the validation rule. For example, Usage vs Rating Effectivity. | Big, 66.0 | 66.0 |
| errors | Errors[] | List of error code groups for this validation. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "validationErrors": [
    {
      "ruleName": "Usage vs Rating Effectivity",
      "errors": [
        {
          "errorCode": "EFFECTIVITY_MISMATCH",
          "errorMessages": []
        }
      ]
    }
  ]
}
```

## Related Topics

- Errors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_errors_output.htm)
