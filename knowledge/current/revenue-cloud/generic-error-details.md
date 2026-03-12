---
title: "Generic Error Details"
domain: revenue-cloud
topic: generic-error-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.744Z
estimatedTokens: 110
keywords: [Generic, Error, Details, Output, representation, error, details, encountered, during, API, request.]
---

# Generic Error Details

> Output representation of the error details encountered during the API
    request.

# Generic Error Details

Output representation of the error details encountered during the API request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Error code that represents the type of error. | Big, 66.0 | 66.0 |
| message | String | Detailed error message that specifies the cause of failure. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "data": [],
  "error": {
    "errorCode": "INVALID_API_INPUT",
    "message": "Liable summary IDs cannot be null or empty."
  },
  "success": false
}
```
