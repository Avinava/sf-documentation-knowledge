---
title: "Category Output"
domain: revenue-cloud
topic: category-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.178Z
estimatedTokens: 383
keywords: [Category, Output, representation, definition]
---

# Category Output

> Output representation of the category definition.

# Category Output

Output representation of the category definition.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| catalogId | String | ID of the catalog that the category is associated with. | Small, 60.0 | 60.0 |
| code | String | Unique code of the product category. | Small, 60.0 | 60.0 |
| description | String | Description of the category. If data translation is set up and specified in the org, the translated description is available. | Small, 60.0 | 60.0 |
| hasSub​Categories | Boolean | Indicates whether the subcategories are available (true) or not (false). | Small, 60.0 | 60.0 |
| id | String | ID of the category. | Small, 60.0 | 60.0 |
| isNavigational | Boolean | Indicates whether the category node is navigational (true) or not (false). | Small, 62.0 | 62.0 |
| name | String | Name of the category. If data translation is set up and specified in the org, the translated name is available. | Small, 60.0 | 60.0 |
| numberOf​Products | Integer | Number of products associated with the category. | Small, 60.0 | 60.0 |
| parent​CategoryId | String | ID of the parent category. | Small, 60.0 | 60.0 |
| sort​Order | Integer | Display order of the product category relative to the siblings with the same parent category. | Small, 60.0 | 60.0 |
| sub​Categories | Category Output[] | List of subcategories, if available. This property is returned with the Categories List (GET) API response. | Small, 60.0 | 60.0 |

## Code Examples

```
"categories": [
    {
      "catalogId": "0ZS1Q000000XbZAWA0",
      "code": "B2B Category",
      "description": "Products Category",
      "hasSubCategories": true,
      "id": "0ZG1Q000000XbVGWA0",
      "name": "Unified Computing",
      "numberOfProducts": 2,
      "parentCategoryId": "0ZGT100000000qlOAA",
      "sortOrder": 2,
      "subCategories": [],
      "isNavigational: false
    }
  ]
```
