---
title: "Warnings"
domain: revenue-cloud
topic: warnings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.648Z
estimatedTokens: 139
keywords: [Warnings, Output, representation, group, warning, messages, same, code.]
---

# Warnings

> Output representation of a group of warning messages with the same warning
    code.

# Warnings

Output representation of a group of warning messages with the same warning code.

JSON example

This example shows a group of warning messages with the same warning code.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| warningCode | String | Standardized warning code. For example, PERFORMANCE_SUBOPTIMAL. | Big, 66.0 | 66.0 |
| warningMessages | Warning Message[] | List of warning messages for records that triggered with this warning. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "warnings": [
    {
      "warningCode": "PERFORMANCE_SUBOPTIMAL",
      "warningMessages": [
        {
          "warningMessage": "PUR and RCE date ranges could be optimized for better performance",
          "warningDetails": []
        }
      ]
    }
  ]
}
```

## Related Topics

- Warning Message (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_warning_message_output.htm)
