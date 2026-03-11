---
title: "getSuggestions(webstoreId, effectiveAccountId, searchTerm,
      maxResults, includeSuggestedProducts, maxSuggestedProducts)"
domain: apex-reference
topic: getsuggestionswebstoreid-effectiveaccountid-searchterm-maxresults-includesuggest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.799Z
keywords: [getSuggestions, webstoreId, effectiveAccountId, searchTerm, maxResults, includeSuggestedProducts, maxSuggestedProducts, Get, suggestions, product, searches., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters]
---

# getSuggestions(webstoreId, effectiveAccountId, searchTerm,
      maxResults, includeSuggestedProducts, maxSuggestedProducts)

> Get suggestions for product searches.

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