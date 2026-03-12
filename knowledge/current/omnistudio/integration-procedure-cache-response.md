---
title: "Integration Procedure Cache Response"
domain: omnistudio
topic: integration-procedure-cache-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.320Z
estimatedTokens: 113
keywords: [Integration, Procedure, Cache, Response, Output, representation, response, error, message, status.]
---

# Integration Procedure Cache Response

> Output representation of the response with error message and status.

# Integration Procedure Cache Response

Output representation of the response with error message and status.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | String | Error message if the operation fails. | Small, 64.0 | 64.0 |
| status | Boolean | Indicates whether the cache is cleared successfully (true) or not (false). | Small, 64.0 | 64.0 |

## Code Examples

```
{
  "error": "Specify a valid cache key",
  "status": false
}
```
