---
title: "Validation Warning"
domain: revenue-cloud
topic: validation-warning
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.635Z
estimatedTokens: 127
keywords: [Validation, Warning, Output, representation, validation, warnings, grouped, rule, name.]
---

# Validation Warning

> Output representation of the validation warnings grouped by rule name.

# Validation Warning

Output representation of the validation warnings grouped by rule name.

JSON example

This example shows a validation warning grouped by rule name.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| ruleName | String | Name of the validation rule. For example, Performance Optimization. | Big, 66.0 | 66.0 |
| warnings | Warnings[] | List of warning code groups for this validation. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "validationWarnings": [
    {
      "ruleName": "Performance Optimization",
      "warnings": [
        {
          "warningCode": "PERFORMANCE_SUBOPTIMAL",
          "warningMessages": []
        }
      ]
    }
  ]
}
```

## Related Topics

- Warnings (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_warnings_output.htm)
