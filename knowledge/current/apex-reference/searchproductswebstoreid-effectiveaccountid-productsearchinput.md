---
title: "searchProducts(webstoreId, effectiveAccountId,
      productSearchInput)"
domain: apex-reference
topic: searchproductswebstoreid-effectiveaccountid-productsearchinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.799Z
keywords: [searchProducts, webstoreId, effectiveAccountId, productSearchInput, Search, products., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# searchProducts(webstoreId, effectiveAccountId,
      productSearchInput)

> Search products.

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