---
title: "Product Search"
domain: chatterapi
topic: product-search
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.577Z
estimatedTokens: 242
keywords: [Product, Search]
---

# Product Search

> Product search response.

# Product Search

Product search response.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the product. | Big, 59.0 | 59.0 |
| facets | Product Search Facet[] | A list of facet names to filter the search.For example, ["size_medium", "color_red"]. | Big, 59.0 | 59.0 |
| locale | String | Locale used for the product search. | Big, 59.0 | 59.0 |
| pageNumber | Integer | Maximum number of search results pages to return. If you don't specify a value, the default is 1. | Big, 59.0 | 59.0 |
| pageSize | Integer | Number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 20. | Big, 59.0 | 59.0 |
| products | Product Search[] | Array of products found by the search. | Big, 59.0 | 59.0 |
| totalRecordsFound | Integer | Total products found. | Big, 59.0 | 59.0 |

## Related Topics

- Product Search Facet (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_search_facet_output.htm)
