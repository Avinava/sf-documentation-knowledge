---
title: "Order Input"
domain: revenue-cloud
topic: order-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-07T00:37:37.782Z
estimatedTokens: 107
keywords: [Order, sort, item]
---

> Input representation of the sort order item request.

# Order Input

Input representation of the sort order item request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| direction | String | Direction to sort the list items, such as in ascending order or descending order. | Required | 60.0 |
| property | String | Property to use for the sorting of the list items. | Required | 60.0 |

## Code Examples

```
"sort":{
"orders":
[{
   "property": "name",
   "direction": "asc"
}]
}
```
