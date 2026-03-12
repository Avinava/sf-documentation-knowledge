---
title: "Search Data
    Category"
domain: chatterapi
topic: search-data-category
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:18.175Z
estimatedTokens: 199
keywords: [Search, Data, Category]
---

# Search Data
    Category

> Data category parameter for object search.

# Search Data Category

Data category parameter for object search.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| groupName | String | Data category group name. | Small, 63.0 | 63.0 |
| operator | String | Data category operator. Values are:Above—Queries the data category and all of its parent categories.AboveOrBelow—Queries the data category, all of its parent categories, and all of its subcategories.At—Queries the data category.Below—Queries the data category and all of its subcategories. | Small, 63.0 | 63.0 |
| categories | String[] | Data category values. | Small, 63.0 | 63.0 |

#### See Also

-   [Parameters](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_parameter.htm "Search query parameters.")

## Related Topics

- Parameters (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_parameter.htm)
