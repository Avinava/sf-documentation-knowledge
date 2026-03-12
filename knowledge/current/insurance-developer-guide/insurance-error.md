---
title: "Insurance Error"
domain: insurance-developer-guide
topic: insurance-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.573Z
estimatedTokens: 127
keywords: [Insurance, Error, Output, representation, occurred, census, management, operation]
---

# Insurance Error

> Output representation for an error that occurred during a census management operation.

# Insurance Error

Output representation for an error that occurred during a census management operation.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additionalInfo | Map | Map of additional details about the error, such as the ID of the record that caused the failure. | Small, 65.0 | 65.0 |
| code | String | Error code. | Small, 65.0 | 65.0 |
| message | String | Error message. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "code": "RESOURCE_NOT_FOUND",
  "message": "The requested resource does not exist",
  "additionalInfo": {
    "memberId": "0r6RM0000000h1pYAA"
  }
}
```
