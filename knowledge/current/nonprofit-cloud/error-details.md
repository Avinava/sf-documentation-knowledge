---
title: "Error Details"
domain: nonprofit-cloud
topic: error-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.996Z
estimatedTokens: 98
keywords: [Error, Output, representation, errors, encountered, API]
---

# Error Details

> Output representation of the errors encountered during an API request.

# Error Details

Output representation of the errors encountered during an API request.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| field | String | Name of the field that has errors. | Small, 60.0 | 60.0 |
| message | String | Error message for the failed process. | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "errors": {
    "field": "string",
    "message": "string"
  }
}
```
