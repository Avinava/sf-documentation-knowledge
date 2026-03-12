---
title: "Commerce Webstore Product Search Suggestions"
domain: chatterapi
topic: commerce-webstore-product-search-suggestions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.594Z
estimatedTokens: 573
keywords: [Commerce, Webstore, Product, Search, Suggestions, searches]
---

# Commerce Webstore Product Search Suggestions

> Get suggestions for product searches.

# Commerce Webstore Product Search Suggestions

Get suggestions for product searches.

Resource

```

```

Available version

52.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 52.0 |
| include​Suggested​Products | Boolean | Specifies whether a search term returns product suggestions (true) or not (false). If unspecified, defaults to false. If true, the service returns the suggested product IDs. | Optional | 58.0 |
| include​Suggested​Terms | Boolean | Specifies whether a request returns search term suggestions (true) or not (false). If unspecified, defaults to true. The value returned can include recent or popular term suggestions. At least one of includeSuggestedTerms or includeSuggestedProducts must be set to true. | Optional | 64.0 |
| maxResults | Integer | Maximum number of suggestions. Values are from 1 through 10. If unspecified, defaults to 10. | Optional | 52.0 |
| maxSuggested​Products | Integer | Maximum number of product suggestions. Values are from 1 through 10. If unspecified, defaults to 6. | Optional | 58.0 |
| popularProducts​CategoryId | String | ID of the category that identifies a store's popular products. This category can be configured on the search input component. If popularProducts​CategoryId is populated, the search term for a request is empty, and includeSuggested​Products is true, product suggestions are returned from the specified category. If a search term is specified, popularProducts​CategoryId is ignored and suggestions are based on the search term instead. | Optional | 64.0 |
| searchTerm | String | Search term with up to 100 characters. If specified, the service returns autocomplete suggestions from the user’s recent searches. If unspecified, the service returns suggestions from the user’s recent searches. | Optional | 52.0 |

Response body for GET

[Product Search Suggestions Results](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_search_suggestions_results.htm "Product search suggestions results.")

## Code Examples

```
/commerce/webstores/webstoreId/search/suggestions
```

## Related Topics

- Product Search Suggestions Results (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_search_suggestions_results.htm)
