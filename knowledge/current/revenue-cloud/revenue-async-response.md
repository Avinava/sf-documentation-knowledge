---
title: "Revenue Async Response"
domain: revenue-cloud
topic: revenue-async-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.403Z
estimatedTokens: 133
keywords: [Revenue, Async, Response, Output, representation, result, API, request, identifier.]
---

# Revenue Async Response

> Output representation of the result of the API request with the request
    identifier.

# Revenue Async Response

Output representation of the result of the API request with the request identifier.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response | Details of errors, if any. | Big, 62.0 | 62.0 |
| request​Identifier | String | Unique identifier of the request. | Big, 62.0 | 62.0 |
| success | Boolean | Indicates whether the API request is successful (true) or not (false). | Big, 62.0 | 62.0 |

## Code Examples

```
{
    "errors": null,
    "requestIdentifier": "ae6f23bc-f056-44b7-aa4d-c7f6fc5e0cf4",
    "success": true
}
```
