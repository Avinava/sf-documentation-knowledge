---
title: "Revenue Async Line Level"
domain: revenue-cloud
topic: revenue-async-line-level
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.398Z
estimatedTokens: 264
keywords: [Revenue, Async, Line, Level, Output, representation, result, API, request, async, line, level, operations.]
---

# Revenue Async Line Level

> Output representation of the result of the API request for the async line level
    operations.

# Revenue Async Line Level

Output representation of the result of the API request for the async line level operations.

JSON example

```

```

If the API request fails, the referenceLineErrorResults property contains a list of errors grouped by the invoice line IDs.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response | Details of errors, if any. | Big, 62.0 | 62.0 |
| referenceLine​Error​Results | Reference Line Error[] | List of errors grouped by the invoice line IDs if the API request fails. | Big, 62.0 | 62.0 |
| reference​Line​Type | String | Reference type for the reference line entity in the referenceLineErrorResults property. | Big, 62.0 | 62.0 |
| request​Identifier | String | Unique identifier of the request. | Big, 62.0 | 62.0 |
| status​URL | String | URL to track the status of the operation. | Big, 62.0 | 62.0 |
| success | Boolean | Indicates whether the API request is successful (true) or not (false). | Big, 62.0 | 62.0 |

## Code Examples

```
{
  "success": true,
  "requestIdentifier": "237e9877-e79b-12d4-a765-321741963000",
  "errors":[]
}
```

```
[
  {
    "referenceLineId": "5TV9A000007x2gz",
    "errors": [
      {
        "errorCode": "INVALID_INPUT",
        "message": "Invalid invoice line id"
      }
    ]
  }
]
```

## Related Topics

- Reference Line Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_reference_line_error.htm)
