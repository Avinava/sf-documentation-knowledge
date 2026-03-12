---
title: "Data Mapper Cache Response"
domain: psc-api
topic: data-mapper-cache-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.813Z
estimatedTokens: 110
keywords: [Data, Mapper, Cache, Output, representation, error, message, status]
---

# Data Mapper Cache Response

> Output representation of the response with error message and status.

# Data Mapper Cache Response

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
  "responseList": [
    {
      "status": true
    }
  ]
}
```
