---
title: "Interest Tag and Category Item Input"
domain: omnistudio
topic: interest-tag-and-category-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.503Z
estimatedTokens: 206
keywords: [Interest, Tag, Category, Item, Input, representation, creating, categories, interest, tags, simultaneously.]
---

# Interest Tag and Category Item Input

> Input representation for creating categories and interest tags
         simultaneously.

# Interest Tag and Category Item Input

Input representation for creating categories and interest tags simultaneously.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| categoryName | String | Name of the category for an interest tag. | Required if categoryId isn't specified. | 65.0 |
| categoryDescription | String | Description for the category of an interest tag. | Optional | 65.0 |
| categoryIcon | String | Icon for the category of an interest tag. | Optional | 65.0 |
| categoryId | String | Category ID of an interest tag. | Required if categoryName isn't specified. | 65.0 |
| tags | Interest Tag Item Input[] | List of interest tag items. | Required to create tag.Optional if you want to create only category. | 65.0 |

## Code Examples

```
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
```

## Related Topics

- Interest Tag Item Input[] (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_interest_tag_item_input.htm)
