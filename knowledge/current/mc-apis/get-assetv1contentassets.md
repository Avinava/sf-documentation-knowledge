---
title: "GET /asset/v1/content/assets"
domain: mc-apis
topic: get-assetv1contentassets
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:20.194Z
estimatedTokens: 522
keywords: [asset, content, assets, collection, simple, $filter, **Overview**, Sort, Filter, Operators]
---

# GET /asset/v1/content/assets

> Gets an asset collection by simple $filter parameters.

# GET /asset/v1/content/assets

## **Overview**

Gets an asset collection by simple $filter parameters.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| $page | number |  | Page number to return from the paged results. Start with 1 and continue until you get zero results. Typically provided along with the $pagesize parameter. |
| $pagesize | number |  | Number of results per page to return. Typically provided along with the $page parameter. |
| $orderBy | string |  | Determines which asset property to use for sorting, and also determines the direction in which to sort the data. If you don't provide the $orderBy parameter, the results are sorted by asset ID in ascending order. |
| $filter | string |  | Filter by an asset's property using a simple operator and value. |
| $fields | string |  | Comma delimited string of asset properties used to reduce the size of your results to only the properties you need. |

### Sort Syntax

The sort syntax is the asset property name followed by the order direction, either asc or desc, with a space in between. Sort by multiple property names by separating each sequence with a comma. This example sorts by name in descending order: /asset/v1/content/assets?$orderBy=name asc.

### Filter Syntax

Each filter is separated by %20. To use AND and OR operators or to filter by sub-properties, use the [POST /asset/v1/content/assets/query](atlas.en-us.noversion.mc-apis.meta/mc-apis/assetAdvancedQuery.htm) resource. The following example filters all assets whose name is similar to the value hello world: /asset/v1/content/assets?$filter=Name%20like%20'hello%20world'

### Filter Operators

| Operator | Description |
| --- | --- |
| eq | Equals. Compares numbers and strings. |
| neq | Is not equal to. Compares numbers and strings. |
| lt | Is less than. Compares numbers only. |
| lte | Is less than or equal to. Compares numbers only. |
| gt | Is greater than. Compares numbers only. |
| gte | Is greater than or equal to. Compares numbers only. |
| like | Is similar to. Compares strings only. |

Last Updated: Jun 8, 2021

## Related Topics

- POST /asset/v1/content/assets/query (atlas.en-us.noversion.mc-apis.meta/mc-apis/assetAdvancedQuery.htm)
