---
title: "Search Data Category
    Input"
domain: chatterapi
topic: search-data-category-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.477Z
estimatedTokens: 221
keywords: [Search, Data, Category, Input]
---

# Search Data Category
    Input

> Data category input for object search.

# Search Data Category Input

Data category input for object search.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| groupName | String | Name of the data category group to filter. | Optional | 63.0 |
| operator | String | Data category operator. Values are:Above—Queries the data category and all of its parent categories.AboveOrBelow—Queries the data category, all of its parent categories, and all of its subcategories.At—Queries the data category.Below—Queries the data category and all of its subcategories. | Optional | 63.0 |
| categories | String[] | List of the data category names to filter. | Optional | 63.0 |

#### See Also

-   [Search Request Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_search_reques.htm "Search request input for searching an object.")

## Code Examples

```
{
  "groupName": "Renewals",
  "operator": "Below",
  "categories": [
    "Deal_Progression_Stage"
  ]
}
```

## Related Topics

- Search Request Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_search_reques.htm)
