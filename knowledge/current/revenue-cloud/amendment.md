---
title: "Amendment"
domain: revenue-cloud
topic: amendment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.054Z
estimatedTokens: 170
keywords: [Amendment, Output, representation, record]
---

# Amendment

> Output representation of the details of an amendment record.

# Amendment

Output representation of the details of an amendment record.

JSON example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| amendment​RecordId | String | ID of the amendment record that’s created for a quote or an order. | Small, 62.0 | 62.0 |
| errors | ARC Base Error[] | Error responses if the creation of an amendment record fails. | Small, 62.0 | 62.0 |
| request​Id | String | Request ID that’s used to track an async request. | Small, 62.0 | 62.0 |
| success | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "amendmenRecordId": "0Q0xx0000004NsSCAU",
  "errors": [
    {
      "errorCode": "REQUIRED_FIELD_MISSING",
      "errorMessage": "Specify a value for quantityChange, and try again."
    }
  ],
  "requestId": "16Pxx0000004NIy",
  "success": true
}
```

## Related Topics

- ARC Base
                      Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_assets_arc_error.htm)
