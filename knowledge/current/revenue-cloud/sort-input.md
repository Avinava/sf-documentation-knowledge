---
title: "Sort Input"
domain: revenue-cloud
topic: sort-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.510Z
estimatedTokens: 75
keywords: [Sort, Input, representation, sort, request.]
---

# Sort Input

> Input representation of the sort request.

# Sort Input

Input representation of the sort request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| orders | Order[] | Details of the sort order. | Required if the sort property is specified. | 60.0 |

## Code Examples

```
"sort":
{
"orders": 
[{
"property": "name", 
"direction": "asc"
}] 
}
```

## Related Topics

- Order (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_order.htm)
