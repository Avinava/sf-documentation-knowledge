---
title: "Cancellation"
domain: revenue-cloud
topic: cancellation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.163Z
estimatedTokens: 173
keywords: [Cancellation, Output, representation, record]
---

# Cancellation

> Output representation of the details of a cancellation record.

# Cancellation

Output representation of the details of a cancellation record.

JSON example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cancellation​RecordId | String | ID of the cancellation record that’s created for a quote or an order. | Small, 62.0 | 62.0 |
| errors | ARC Base Error[] | Error responses if the creation of a cancellation record fails. | Small, 62.0 | 62.0 |
| requestId | String | Request ID that’s used to track the async request. | Small, 62.0 | 62.0 |
| success | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "cancellationRecordId": "0Q0xx0000004NsSCAU",
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
