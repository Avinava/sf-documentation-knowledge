---
title: "Commerce Webstore Search Products"
domain: chatterapi
topic: commerce-webstore-search-products
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.585Z
estimatedTokens: 865
keywords: [Commerce, Webstore, Search, Products, term, category]
---

# Commerce Webstore Search Products

> Search products by search term or category in a
    webstore.

# Commerce Webstore Search Products

Search products by search term or category in a webstore.

Resource

```

```

Available version

58.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| categoryId | String | Category ID returns results for products in this category or its subcategories. | Required if searchTerm isn’t specified | 58.0 |
| effectiveAccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 58.0 |
| effectiveBuyerGroupIds | String[] | List containing an ID of the buyer group for which the request is made. This parameter accepts only a single ID in the list. | Optional | 62.0 |
| fields | String[] | Product fields to return in search results. Search results include fields you have access to. | Required | 58.0 |
| grouping | String | Grouping option for search results. If unspecified, the default is the value specified in Search \| Results Display Settings \| Results Grouping. Values are:NoGrouping—Search results aren’t grouped.VariationParent—Search results are grouped by the variation parent. | Optional | 58.0 |
| includeProduct​VariationInfo | Boolean | Specifies whether to include product variation information in search results (true) or not (false). If unspecified, defaults to false. | Optional | 63.0 |
| includeQuantityRule | Boolean | Specifies whether to include purchase quantity rule information for products in search results (true) or not (false). If unspecified, defaults to false. | Optional | 58.0 |
| page | Integer | Number of the page you want returned. Starts at 0. If you don’t specify a value or if you specify 0, the first page is returned. | Optional | 58.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 200. If unspecified, defaults to 20.When multiplying the page and pageSize property values together, they can’t exceed 5000. For example, for a pageSize of 20, you can specify a page value up to 250. | Optional | 58.0 |
| refinements | String | List up to nine refinements (facets) for search results. Buyers or shoppers can select up to 20 values for each distinct value refinement, as well as minimum or maximum values for a range refinement. The refinements parameter is encoded as a Base64 string from the JSON representation of the Distinct Value Refinement Input or Range Refinement Input. | Optional | 58.0 |
| searchFields | String[] | The subset of searchable fields to search. Only the fields specified in this parameter are searched. If you don't specify this parameter, or if the fields specified are invalid, all searchable fields are searched. To use the searchFields parameter, you must also specify the searchTerm parameter. The variation attribute field is not supported by the searchFields parameter. | Optional | 62.0 |
| searchTerm | String | List of up to 32 space-separated search terms. | Required if categoryId isn’t specified | 58.0 |
| sortRuleId | String | ID of the sort rule that specifies the order of products in the search results. If unspecified, the default sort type is relevancy. | Optional | 58.0 |

Response body for GET

[Commerce Product Search Results](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_product_search_results.htm "Product search results.")

## Code Examples

```
/commerce/webstores/webstoreId/search/products
```

## Related Topics

- Distinct Value Refinement Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_distinct_value_refinement_input.htm)
- Range Refinement Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_range_refinement_input.htm)
- Commerce Product Search Results (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_product_search_results.htm)
