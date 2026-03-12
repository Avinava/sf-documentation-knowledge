---
title: "Warning Message"
domain: revenue-cloud
topic: warning-message
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.094Z
estimatedTokens: 136
keywords: [Message, Output, representation, records, triggered, specific]
---

# Warning Message

> Output representation of the details of records that triggered this specific
    warning.

# Warning Message

Output representation of the details of records that triggered this specific warning.

JSON example

This example shows a warning message with details.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| warningMessage | String | Human-readable warning message that describes the validation concern. | Big, 66.0 | 66.0 |
| warningDetails | Error Warning Details[] | Details of records that triggered this specific warning. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "warningMessages": [
    {
      "warningMessage": "PUR and RCE date ranges could be optimized for better performance",
      "warningDetails": [
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
