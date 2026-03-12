---
title: "Data Category Group Collection Input"
domain: chatterapi
topic: data-category-group-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.468Z
estimatedTokens: 98
keywords: [Data, Category, Group, Collection, Input, groups]
---

# Data Category Group Collection Input

> Collection of data category groups.

# Data Category Group Collection Input

Collection of data category groups.

Root XML tag

<DataCategoryGroupCollectionInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dataCategory​Groups | Data Category Group Input[] | Collection of data category groups. | Required | 59.0 |

## Code Examples

```
{
  "dataCategoryGroups": [
    {
      "categoryGroupName": "Geographic",
      "rootCategory": {
        "categoryName": "WorldWide",
        "childCategories": [
          {
            "categoryName": "US",
            "childCategories": [
              {
                "categoryName": "America",
                "childCategories": [
                  {
                    "categoryName": "States",
                    "childCategories": [
                      {
                        "categoryName": "California"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ]
}
```

## Related Topics

- Data Category Group Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_data_category_group_input.htm)
