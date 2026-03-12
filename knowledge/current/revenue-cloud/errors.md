---
title: "Errors"
domain: revenue-cloud
topic: errors
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.401Z
estimatedTokens: 134
keywords: [Errors, Output, representation, group, error, messages, code]
---

# Errors

> Output representation of the group of error messages with the same error code.

# Errors

Output representation of the group of error messages with the same error code.

JSON example

This example shows a group of error messages with the same error code.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Standardized error code. For example, EFFECTIVITY_MISMATCH. | Big, 66.0 | 66.0 |
| errorMessages | Error Message[] | List of error messages for records that failed with this error code. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "errors": [
    {
      "errorCode": "EFFECTIVITY_MISMATCH",
      "errorMessages": [
        {
          "errorMessage": "PUR and RCE effective date ranges must have overlap for proper rating functionality",
          "errorDetails": []
        }
      ]
    }
  ]
}
```

## Related Topics

- Error Message (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_error_message_output.htm)
