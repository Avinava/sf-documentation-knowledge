---
title: "Distinct Value Search Facet"
domain: chatterapi
topic: distinct-value-search-facet
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.295Z
estimatedTokens: 288
keywords: [Distinct, Search, Facet, product, results]
---

# Distinct Value Search Facet

> Facet with distinct values in product search results.

# Distinct Value Search Facet

Facet with distinct values in product search results.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributeType | String | Search attribute type. Values are:CustomPricebookEntryProductAttributeProductCategoryProduct2Standard | Small, 49.0 | 49.0 |
| displayName | String | Display name of the facet. | Small, 49.0 | 49.0 |
| displayRank | Integer | Display rank of the facet. Valid values are from 1 through 50. | Small, 49.0 | 49.0 |
| displayType | String | Display type of the facet. Values are:CategoryTreeDatePickerMultiSelectSingleSelect | Small, 49.0 | 49.0 |
| facetType | String | Search facet type. Value is:DistinctValueRange | Small, 49.0 | 49.0 |
| nameOrId | String | Reserved for internal use. | Small, 49.0 | 49.0 |
| values | Distinct Facet Value[] | Values of the facet found in the search result. Sorted by display name in alphabetical order. | Medium, 49.0 | 49.0 |

#### See Also

-   [Product Search Results](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_search_results.htm "Product search results.")

## Related Topics

- Distinct Facet Value (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_facet_value.htm)
- Product Search Results (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_search_results.htm)
