---
title: "Interest Tag and Category Item Input"
domain: omnistudio
topic: interest-tag-and-category-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.351Z
keywords: [Interest, Tag, Category, Item, Input]
---

# Interest Tag and Category Item Input

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