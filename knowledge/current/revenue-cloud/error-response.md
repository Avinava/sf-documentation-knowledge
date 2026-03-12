---
title: "Error Response"
domain: revenue-cloud
topic: error-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.466Z
estimatedTokens: 86
keywords: [Error, Response, Output, representation, details, error., error, encountered, during, API, request.]
---

# Error Response

> Output representation of the error details encountered during the API
    request.

# Error Response

Output representation of the error details encountered during the API request.

JSON example

This example shows a sample error response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Code that indicates the type of error. | Big, 66.0 | 66.0 |
| message | String | Message stating the reason for error, if any. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "errors": [
    {
      "code": "BAD_REQUEST",
      "message": "MISSING_REFERENCEOBJECTID"
    }
  ]
}
```

```
{
  "errors": [
    {
      "errorCode": "INVALID_STATUS",
      "message": "CreditMemo 50gxx00000000XtAAI is not in the Posted status."
    }
  ]
}
```
