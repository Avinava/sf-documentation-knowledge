---
title: "Sales Transaction Error Response"
domain: revenue-cloud
topic: sales-transaction-error-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.996Z
estimatedTokens: 138
keywords: [Sales, Transaction, Error, Response, Output, representation, error, details, associated, API, request.]
---

# Sales Transaction Error Response

> Output representation of the error details associated with the API request.

# Sales Transaction Error Response

Output representation of the error details associated with the API request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Code for the resultant error. | Small, 63.0 | 63.0 |
| message | String | Error message for the resultant error. | Small, 63.0 | 63.0 |
| referenceId | String | Unique ID that’s associated with the specific error for tracking and reference purposes. | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "errorResponse": {
    "errorCode": "INVALID_API_INPUT",
    "message": "Include record type and method in the request and try again.",
    "referenceId": "refQuoteItem2"
  }
}
```
