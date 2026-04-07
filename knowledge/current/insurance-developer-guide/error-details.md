---
title: "Error Details"
domain: insurance-developer-guide
topic: error-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:52.170Z
estimatedTokens: 87
keywords: [Error, code, message]
---

> Output representation for the details of the error code and error message.

# Error Details

Output representation for the details of the error code and error message.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | Error code. | Small, 62.0 | 62.0 |
| message | String | Error message. | Small, 62.0 | 62.0 |

## Code Examples

```
{
      "code": "DATE_FIELD_MUST_BE_IN_ISO_FORMAT",
      "message": "Specify a date in the yyyy-MM-dd format."
    }
```
