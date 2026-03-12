---
title: "Network Data Category Catalog Items"
domain: chatterapi
topic: network-data-category-catalog-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.679Z
estimatedTokens: 325
keywords: [Network, Data, Category, Catalog, Items, Experience, Cloud, site, org]
---

# Network Data Category Catalog Items

> Get catalog items for a network data category in an Experience Cloud site or
    org.

# Network Data Category Catalog Items

Get catalog items for a network data category in an Experience Cloud site or org.

Resource

```

```

```

```

Available version

59.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| pageNumber | Integer | Number of the page you want returned. Starts at 0. If you don’t specify a value or if you specify 0, the first page is returned. | Optional | 59.0 |
| pageSize | Integer | Number of items per page. Valid values are from 1 through 25. If unspecified, the default number of items is 3. | Optional | 59.0 |
| sortOrder | String | Sort order of the results. Valid values are:Ascending—Items are sorted in ascending alphabetical order (A–Z).Descending—Items are sorted in descending alphabetical order (Z–A).If unspecified, results are returned in ascending order. | Optional | 59.0 |
| sortedBy | String | Name of the field by which to sort results, such as Lable or LastModifiedDate. If unspecified, results are sorted by Lable. | Optional | 59.0 |

Response body for GET

[Service Catalog Item Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_service_catalog_item_collection.htm "Collection of service catalog items.")

## Code Examples

```
/connect/communities/communityId/network-data-category/networkDataCategoryId/catalog-item
```

```
/connect/network-data-category/networkDataCategoryId/catalog-item
```

## Related Topics

- Service Catalog Item Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_service_catalog_item_collection.htm)
