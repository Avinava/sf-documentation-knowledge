---
title: "Error Detail"
domain: insurance-developer-guide
topic: error-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:52.159Z
estimatedTokens: 80
keywords: [Error, Detail]
---

> Output representation of the error details.

# Error Detail

Output representation of the error details.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | Code associated with the error. | Small, 65.0 | 65.0 |
| message | String | Message for the error. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "isSuccess": false,
  "errors": [
    {
      "errorCode": "RESOURCE_NOT_FOUND",
      "message": "Specify a resource and try again."
    }
  ]
}
```
