---
title: "Network Data Category Child Category"
domain: chatterapi
topic: network-data-category-child-category
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.939Z
estimatedTokens: 340
keywords: [Network, Data, Category, Child, Retrieve, categories, Experience, Cloud, site]
---

# Network Data Category Child Category

> Retrieve child categories of a network data category in an Experience Cloud
    site.

# Network Data Category Child Category

Retrieve child categories of a network data category in an Experience Cloud site.

Resource

```

```

Available version

60.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| language | String | Language of the child categories to retrieve. Default is the user's org language. | Optional | 60.0 |
| pageNumber | Integer | Page number of the result to return. Default is the first page. | Optional | 60.0 |
| pageSize | Integer | Number of results to retrieve per page. The maximum is 25. Default is 3. | Optional | 60.0 |
| sortOrder | String | Sort order of the fields. This can be ascending or descending. Values are:Ascending—Items are in ascending alphabetical order (A-Z).Descending—Items are in descending alphabetical order (Z-A).MostRecentlyViewed—Items are in descending chronological order by view. This sort order is valid only for Chatter feed streams.Default is Descending. | Optional | 60.0 |
| sortedBy | String | The field name to sort child categories by. Default is the title. | Optional | 60.0 |

Response body for GET

[Network Data Category Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_network_data_category_collection.htm "List of network data categories.")

## Code Examples

```
/connect/communities/communityId/network-data-category/networkDataCategoryId/child-category
```

## Related Topics

- Network Data Category Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_network_data_category_collection.htm)
