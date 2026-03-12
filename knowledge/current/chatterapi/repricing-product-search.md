---
title: "Repricing, Product Search"
domain: chatterapi
topic: repricing-product-search
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.588Z
estimatedTokens: 294
keywords: [Repricing, Product, Search, webstore, products, term]
---

# Repricing, Product Search

> Search a webstore for products by search term.

# Repricing, Product Search

Search a webstore for products by search term.

Resource

```

```

Available version

59.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Required for B2B and D2C webstores | 59.0 |
| facets | String | A list of facet names to filter the search.For example, ["size_medium", "color_red"]is encoded to WyJzaXplX21lZGl1bSIsICJjb2xvcl9yZWQiXQ== | Optional | 59.0 |
| page | Integer | Maximum number of search results pages to return. If you don't specify a value, the default is 1. | Optional | 59.0 |
| pageSize | Integer | Number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 20. | Optional | 59.0 |
| searchTerm | String | Term used for the search. | Required | 59.0 |

Response body for GET

[Product Search](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_search_output.htm "Product search response.")

## Code Examples

```
/commerce/order-management/webstores/webstoreId/products
```

## Related Topics

- Product Search (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_search_output.htm)
