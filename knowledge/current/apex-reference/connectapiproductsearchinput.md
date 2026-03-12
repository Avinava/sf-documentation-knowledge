---
title: "ConnectApi.ProductSearchInput"
domain: apex-reference
topic: connectapiproductsearchinput
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:25.367Z
estimatedTokens: 544
keywords: [ConnectApi.ProductSearchInput, Product, search.]
---

# ConnectApi.ProductSearchInput

> Product search.

# ConnectApi.ProductSearchInput

Product search.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| categoryId | String | Category ID returns results for products in this category or its subcategories. If you omit categoryId from the request, all categories are searched. If you specify categoryId and searchTerm, only products in the specified category are searched. | Required if searchTerm isn’t specified | 52.0 |
| fields | List<String> | Product fields to return in search results. Search results include fields you have access to. If unspecified, returns the Name, Description, StockKeepingUnit, ProductCode, and Family fields. | Optional | 52.0 |
| grouping | ConnectApi.​ProductSearch​GroupingInput | Specifies whether to group products in search results and how to group them. If unspecified, the default is the value specified in Search \| Results Display Settings \| Results Grouping. | Optional | 52.0 |
| includePrices | Boolean | Specifies whether to include prices for products in search results (true) or not (false). If unspecified, defaults to false. | Optional | 52.0 |
| includeQuantity​Rule | Boolean | Specifies whether to include purchase quantity rule information for products in search results (true) or not (false). If unspecified, defaults to false. | Optional | 52.0 |
| page | Integer | Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned. | Optional | 52.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 200. If unspecified, the default is the value specified in Results per Page in Search \| Results Display Settings. | Optional | 52.0 |
| refinements | List<ConnectApi.​RefinementInput> | List up to nine refinements (facets) for search results. Buyers or shoppers can select up to 20 values for each refinement. | Optional | 52.0 |
| searchTerm | String | List of up to 32 space-separated search terms. | Required if categoryId isn’t specified | 52.0 |
| sortRuleId | String | ID of the sort rule that specifies the order of products in the search results. | Optional | 52.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ProductSearch​GroupingInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_product_search_grouping.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.​RefinementInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_refinement.htm)
