---
title: "Interest Tag and Category Create Input"
domain: omnistudio
topic: interest-tag-and-category-create-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.493Z
estimatedTokens: 96
keywords: [Interest, Tag, Category, Input, representation, creating, tags, categories, simultaneously]
---

# Interest Tag and Category Create Input

> Input representation for creating interest tags and categories
         simultaneously.

# Interest Tag and Category Create Input

Input representation for creating interest tags and categories simultaneously.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| interestTags | Interest Tag and Category Item Input[] | List of tag categories and interest tags. | Required | 65.0 |

## Code Examples

```
{
  "interestTags": [
    {
      "categoryName": "Financial Planning",
      "categoryDescription": "Financial planning description.",
      "categoryIcon": "custom:custom45",
      "categoryId": "0qRxx000000001dEAA",
      "tags": [
        {
          "tagName": "Budgeting",
          "tagDescription": "Budgeting description.",
          "recordId": "001xx000003DGQyAAO",
          "tagId": "0qOxx0000004CKKEA2"
        }
      ]
    }
  ]
}
```

## Related Topics

- Interest Tag and Category Item
                                    Input[] (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_interest_tag_and_category_item_input.htm)
