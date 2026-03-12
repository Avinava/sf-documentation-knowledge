---
title: "Status"
domain: revenue-cloud
topic: status
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.010Z
estimatedTokens: 100
keywords: [Status, Output, representation]
---

# Status

> Output representation of the status of the request.

# Status

Output representation of the status of the request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | Code of the error message. | Small, 60.0 | 60.0 |
| errors | Error[] | Details of the error. | Small, 60.0 | 60.0 |
| message | String | Error message. | Small, 60.0 | 60.0 |

## Code Examples

```
"status": {
    "code": "200",
    "errors": [],
    "message": "Successfully fetched the catalog records."
  }
```

## Related Topics

- Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_epc_error_output.htm)
