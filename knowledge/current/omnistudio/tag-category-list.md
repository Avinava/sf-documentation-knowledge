---
title: "Tag Category List"
domain: omnistudio
topic: tag-category-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.794Z
estimatedTokens: 89
keywords: [Tag, Category, List, Output, representation, list, tag, categories, assigned, Interest, Tag.]
---

# Tag Category List

> Output representation of a list of tag categories assigned to an
      Interest Tag.

# Tag Category List

Output representation of a list of tag categories assigned to an Interest Tag.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| categories | Tag Category with Parent[] | List of tag categories for an Interest Tag. | Small, 54.0 | 54.0 |

## Code Examples

```
{
  "categories" : [ {
    "categoryId" : "0qRxx00000004TREAY",
    "icon" : "custom:custom45",
    "name" : "LiCate13",
    "parentCategoryId" : "0qRxx00000004GXEAY",
    "tagCategoryAssignmentId" : "0qTxx00000006JxEAI"
  } ]
}
```

## Related Topics

- Tag Category with Parent (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_tag_category_with_parent.htm)
