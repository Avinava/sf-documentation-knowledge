---
title: "Renewal"
domain: revenue-cloud
topic: renewal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.374Z
estimatedTokens: 168
keywords: [Renewal, Output, representation, details, renewal, record.]
---

# Renewal

> Output representation of the details of a renewal record.

# Renewal

Output representation of the details of a renewal record.

JSON example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | ARC Base Error[] | Error responses if the creation of a renewal record fails. | Small, 62.0 | 62.0 |
| renewal​RecordId | String | ID of the renewal record that’s created for the Quote or Order record. | Small, 62.0 | 62.0 |
| requestId | String | Request ID that’s used to track the async request. | Small, 62.0 | 62.0 |
| success | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "renewalRecordId": "0Q0xx0000004NsSCAU",
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
