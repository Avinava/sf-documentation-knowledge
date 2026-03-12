---
title: "Tag Category with Parent"
domain: psc-api
topic: tag-category-with-parent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.279Z
estimatedTokens: 171
keywords: [Tag, Category, Parent, Output, representation]
---

# Tag Category with Parent

> Output representation of a category with its parent
    category.

# Tag Category with Parent

Output representation of a category with its parent category.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| categoryId | String | The ID of the tag category. | Small, 54.0 | 54.0 |
| icon | String | The icon name of the tag category. | Small, 54.0 | 54.0 |
| name | String | The name of the tag category. | Small, 54.0 | 54.0 |
| parentCategoryId | String | The parent category ID of the tag category. | Small, 54.0 | 54.0 |
| tagCategoryAssignmentId | String | The tag category assignment ID of a tag category and an Interest Tag. | Small, 54.0 | 54.0 |

## Code Examples

```
{
   "categoryId" : "0qRxx00000004TREAY",
   "icon" : "custom:custom45",
   "name" : "LiCate13",
   "parentCategoryId" : "0qRxx00000004GXEAY",
   "tagCategoryAssignmentId" : "0qTxx00000006JxEAI"
}
```
