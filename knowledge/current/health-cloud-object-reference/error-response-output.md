---
title: "Error Response Output"
domain: health-cloud-object-reference
topic: error-response-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:53.641Z
estimatedTokens: 87
keywords: [Error, Output, representation]
---

# Error Response Output

> Error response representation.

# Error Response Output

Error response representation.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Error code. | Small, 55.0 | 55.0 |
| message | String | Message stating the reason for error, if any. | Small, 55.0 | 55.0 |

## Code Examples

```
{
  "error": {
    "code": "INVALID_INPUT",
    "message": "The ReceivedDocument field doesn’t exist in the specified DocumentChecklistItem object."
  }
}
```
