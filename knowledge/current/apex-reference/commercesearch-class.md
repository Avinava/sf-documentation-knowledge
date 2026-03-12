---
title: "CommerceSearch Class"
domain: apex-reference
topic: commercesearch-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:18.507Z
estimatedTokens: 1966
namespace: ConnectApi
keywords: [CommerceSearch, sort, rules, live, index, getSortRules, webstoreId, API, Version, Guest, Users, Requires, Chatter, getSuggestions, effectiveAccountId]
---

# CommerceSearch Class

> Get sort rules for the live index.

**Namespace:** `ConnectApi`

# CommerceSearch Class

Get sort rules for the live search index. Get product search suggestions. Search products.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CommerceSearch Methods

These methods are for CommerceSearch. All methods are static.

-   **[getSortRules(webstoreId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearch_static_methods.htm#apex_ConnectAPI_CommerceSearch_getSortRules_1)**
    Get sort rules for the live index.
-   **[getSuggestions(webstoreId, effectiveAccountId, searchTerm, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearch_static_methods.htm#apex_ConnectAPI_CommerceSearch_getSuggestions)**
    Get suggestions for product searches.
-   **[getSuggestions(webstoreId, effectiveAccountId, searchTerm, maxResults, includeSuggestedProducts, maxSuggestedProducts)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearch_static_methods.htm#apex_ConnectAPI_CommerceSearch_getSuggestions_1)**
    Get suggestions for product searches.
-   **[searchProducts(webstoreId, effectiveAccountId, productSearchInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearch_static_methods.htm#apex_ConnectAPI_CommerceSearch_productSearch_1)**
    Search products.

### getSortRules(webstoreId)

Get sort rules for the live index.

#### API Version

52.0

#### Available to Guest Users

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.SortRulesCollection getSortRules(String webstoreId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

#### Return Value

Type: [ConnectApi.SortRulesCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_sort_rules_collection_output.htm "Collection of sort rules.")

### getSuggestions(webstoreId, effectiveAccountId, searchTerm, maxResults)

Get suggestions for product searches.

#### API Version

52.0

#### Available to Guest Users

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ProductSearchSuggestionsResults getSuggestions(String webstoreId, String effectiveAccountId, String searchTerm, Integer maxResults)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If null, the default value is determined from context.

searchTerm

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Search term with up to 100 characters. If specified, the service returns autocomplete suggestions from the user’s recent searches. If unspecified, the service returns suggestions from the user’s recent searches.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of suggestions. Values are from 1 through 10. If unspecified, defaults to 10.

#### Return Value

Type: [ConnectApi.ProductSearchSuggestionsResults](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_suggestions_results.htm "Product search suggestions results.")

### getSuggestions(webstoreId, effectiveAccountId, searchTerm, maxResults, includeSuggestedProducts, maxSuggestedProducts)

Get suggestions for product searches.

#### API Version

58.0

#### Available to Guest Users

58.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ProductSearchSuggestionsResults getSuggestions(String webstoreId, String effectiveAccountId, String searchTerm, Integer maxResults, Boolean includeSuggestedProducts, Integer maxSuggestedProducts)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If null, the default value is determined from context.

searchTerm

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Search term with up to 100 characters. If specified, the service returns autocomplete suggestions from the user’s recent searches. If unspecified, the service returns suggestions from the user’s recent searches.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of suggestions. Values are from 1 through 10. If unspecified, defaults to 10.

includeSuggestedProducts

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether a search term returns product suggestions (true) or not (false). If unspecified, defaults to false. If true, the service returns the suggested product IDs.

maxSuggestedProducts

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Maximum number of product suggestions. Values are from 1 through 10. If unspecified, defaults to 6.

#### Return Value

Type: [ConnectApi.ProductSearchSuggestionsResults](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_suggestions_results.htm "Product search suggestions results.")

### searchProducts(webstoreId, effectiveAccountId, productSearchInput)

Search products.

#### API Version

52.0

#### Available to Guest Users

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ProductSearchResults searchProducts(String webstoreId, String effectiveAccountId, ConnectApi.ProductSearchInput productSearchInput)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If null, the default value is determined from context.

productSearchInput

Type: [ConnectApi.ProductSearchInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_product_search.htm "Product search.")

A ConnectApi.ProductSearchInput body with either a category ID or search terms.

#### Return Value

Type: [ConnectApi.ProductSearchResults](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_results.htm "Product search results.")

#### Usage

Searching products respects buyer View Product entitlements and only users entitled to view product data can access this resource.

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getSortRules(webstoreId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearch_static_methods.htm)
- getSuggestions(webstoreId, effectiveAccountId, searchTerm, maxResults) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearch_static_methods.htm)
- getSuggestions(webstoreId, effectiveAccountId, searchTerm, maxResults, includeSuggestedProducts, maxSuggestedProducts) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearch_static_methods.htm)
- searchProducts(webstoreId, effectiveAccountId, productSearchInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearch_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.SortRulesCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_sort_rules_collection_output.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.ProductSearchSuggestionsResults (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_suggestions_results.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
