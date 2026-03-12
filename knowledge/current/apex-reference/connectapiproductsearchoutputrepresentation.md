---
title: "ConnectApi.ProductSearchOutputRepresentation"
domain: apex-reference
topic: connectapiproductsearchoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.612Z
estimatedTokens: 246
keywords: [ConnectApi.ProductSearchOutputRepresentation, Output, representation, product, search, response]
---

# ConnectApi.ProductSearchOutputRepresentation

> Output representation of the product search response

# ConnectApi.ProductSearchOutputRepresentation

Output representation of the product search response

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the product. | 59.0 |
| facets | List<ConnectApi.ProductSearchFacetOutputRepresentation> | A list of facet names to filter the search.For example, ["size_medium", "color_red"]. | 59.0 |
| locale | String | Locale used for the product search. | 59.0 |
| pageNumber | Integer | Maximum number of search results pages to return. If you don't specify a value, the default is 1. | 59.0 |
| pageSize | Integer | Number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 20. | 59.0 |
| products | List<ConnectApi.ProductSearchProductOutputRepresentation> | List of products found by the search. | 59.0 |
| totalRecordsFound | Integer | Total products found. | 59.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.ProductSearchFacetOutputRepresentation> (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_facet_output.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.ProductSearchProductOutputRepresentation> (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_product_output.htm)
