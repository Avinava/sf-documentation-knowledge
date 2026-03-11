---
title: "searchProducts(webstoreId, searchTerm, pageParam, pageSize,
      effectiveAccountId, facets)"
domain: apex-reference
topic: searchproductswebstoreid-searchterm-pageparam-pagesize-effectiveaccountid-facets
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.729Z
keywords: [searchProducts, webstoreId, searchTerm, pageParam, pageSize, effectiveAccountId, facets, Search, products, webstore., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# searchProducts(webstoreId, searchTerm, pageParam, pageSize,
      effectiveAccountId, facets)

> Search products in a webstore.

### searchProducts(webstoreId, searchTerm, pageParam, pageSize, effectiveAccountId, facets)

Search products in a webstore.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ProductSearchOutputRepresentation searchProducts(String webstoreId, String searchTerm, Integer pageParam, Integer pageSize, String effectiveAccountId, String facets)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

searchTerm

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Term used for the search.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of search results pages to return. If you don't specify a value, the default is 1.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 20.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user.

facets

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A list of facet names to filter the search.For example, \["size\_medium", "color\_red"\]is encoded to WyJzaXplX21lZGl1bSIsICJjb2xvcl9yZWQiXQ==

#### Return Value

Type: [ConnectApi.ProductSearchOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_output.htm "Output representation of the product search response")