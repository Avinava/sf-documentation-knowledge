---
title: "Network Data Category Parent Path"
domain: chatterapi
topic: network-data-category-parent-path
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.942Z
estimatedTokens: 184
keywords: [Network, Data, Category, Parent, Path, Retrieve, hierarchy, categories, Experience, Cloud, site, API]
---

# Network Data Category Parent Path

> Retrieve the hierarchy of the network data categories in an Experience Cloud site. This
    API returns the network data category path from the parent category to the specified
    category.

# Network Data Category Parent Path

Retrieve the hierarchy of the network data categories in an Experience Cloud site. This API returns the network data category path from the parent category to the specified category.

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
| language | String | Language of the parent path to retrieve. Default is the user's org language. | Optional | 60.0 |

Response body for GET

[Network Data Category Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_network_data_category_collection.htm "List of network data categories.")

## Code Examples

```
/connect/communities/communityId/network-data-category/networkDataCategoryId/parent-path
```

## Related Topics

- Network Data Category Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_network_data_category_collection.htm)
