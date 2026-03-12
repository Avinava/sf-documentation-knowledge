---
title: "Error Message"
domain: revenue-cloud
topic: error-message
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.696Z
estimatedTokens: 133
keywords: [Error, Message, Output, representation, details, records, failed, specific, error.]
---

# Error Message

> Output representation of the details of records that failed with this specific
    error.

# Error Message

Output representation of the details of records that failed with this specific error.

JSON example

This example shows an error message with details.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorMessage | String | Human-readable error message that describes the validation failure. | Big, 66.0 | 66.0 |
| errorDetails | Error Warning Details[] | Details of records that failed with this specific error. | Big, 66.0 | 66.0 |

## Code Examples

```
{
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
```

## Related Topics

- Error Warning Details (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_error_warning_details_output.htm)
