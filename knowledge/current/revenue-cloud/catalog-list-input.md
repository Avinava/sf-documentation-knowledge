---
title: "Catalog List Input"
domain: revenue-cloud
topic: catalog-list-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.868Z
estimatedTokens: 195
keywords: [Catalog, List, Input, representation, request, get, list, catalogs.]
---

# Catalog List Input

> Input representation of the request to get a list of catalogs.

# Catalog List Input

Input representation of the request to get a list of catalogs.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlation​Id | String | Unique identifier value that’s attached to the requests and messages, and accepts references to a particular transaction or event chain. | Optional | 60.0 |
| limit | Integer | Number of items to include in the response. | Optional | 60.0 |
| offset | Integer | Offset size from which to get the catalog count. | Optional | 60.0 |
| order​By | String[] | Sort order for the catalogs. | Optional | 60.0 |
| user​Context | User Context Input | User context details. For example, account ID or contact ID. | Optional | 60.0 |

## Code Examples

```
{
    "correlationId": "9cbb9650-48c5-11ed-96d1-0afcf185843b",
    "limit": 10,
    "offset": 0,
    "orderBy": [
        "name:asc",
        "id:desc"
    ],
    "userContext": {
        "accountId": "001xx0000000001AAA",
        "contactId": "003xx00000000D7AAI"
    }
    }
```

## Related Topics

- User Context
                        Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_user_context_input.htm)
