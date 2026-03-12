---
title: "Network Data Category Tree"
domain: chatterapi
topic: network-data-category-tree
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.932Z
estimatedTokens: 215
keywords: [Network, Data, Category, Tree, Experience, Cloud, site]
---

# Network Data Category Tree

> Get or update the network data category tree in an Experience Cloud site.

# Network Data Category Tree

Get or update the network data category tree in an Experience Cloud site.

Resource

```

```

Available version

59.0

HTTP methods

GET, PUT

Response body for GET

[Network Data Category Tree](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_network_data_category_tree.htm "Network data category tree.")

Request body for PUT

[Data Category Group Collection Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_data_category_group_collection_input.htm "Collection of data category groups.")

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
/connect/communities/communityId/data-category/network-data-category
```

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

- Network Data Category Tree (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_network_data_category_tree.htm)
- Data Category Group Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_data_category_group_collection_input.htm)
- Data Category Group Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_data_category_group_input.htm)
- Network Data Category Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_network_data_category_group.htm)
