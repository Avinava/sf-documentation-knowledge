---
title: "Reference Line Error"
domain: revenue-cloud
topic: reference-line-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.338Z
estimatedTokens: 161
keywords: [Reference, Line, Error, Output, representation, details, line, level, errors.]
---

# Reference Line Error

> Output representation of the details of the line level errors.

# Reference Line Error

Output representation of the details of the line level errors.

JSON example

If the API request fails, the referenceLineErrorResults property contains a list of errors grouped by the invoice line IDs.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response | List of errors with error code and error message for the specified invoice line ID. | Big, 62.0 | 62.0 |
| reference​LineId | String | ID of the invoice line specified in the API request that has an issue, causing the API request to fail. | Small, 62.0 | 62.0 |

## Code Examples

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
