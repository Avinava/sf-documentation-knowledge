---
title: "Error Response"
domain: revenue-cloud
topic: error-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-03T00:28:13.779Z
estimatedTokens: 86
keywords: [Error]
---

> Output representation of the details of the error.

# Error Response

Output representation of the details of the error.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | Code of the error. | Small, 63.0 | 63.0 |
| message | String | Description of the error. | Small, 63.0 | 63.0 |

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
