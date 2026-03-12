---
title: "Repricing Class"
domain: apex-reference
topic: repricing-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.866Z
estimatedTokens: 1617
namespace: ConnectApi
keywords: [Repricing, Get, details, product, web, store., productDetails, webstoreId, skuOrProductId, effectiveAccountId, currencyCode, locale, API, Version, Requires, Chatter, searchProducts, searchTerm, pageParam, pageSize]
---

# Repricing Class

> Get details of a product in a web store.

**Namespace:** `ConnectApi`

# Repricing Class

Perform functions related to repricing orders in Order Management.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Repricing Methods

These methods are for Repricing. All methods are static.

-   **[productDetails(webstoreId, skuOrProductId, effectiveAccountId, currencyCode, locale)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Repricing_static_methods.htm#apex_ConnectAPI_Repricing_productDetails_1)**
    Get details of a product in a web store.
-   **[searchProducts(webstoreId, searchTerm, pageParam, pageSize, effectiveAccountId, facets)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Repricing_static_methods.htm#apex_ConnectAPI_Repricing_searchProducts_1)**
    Search products in a webstore.

### productDetails(webstoreId, skuOrProductId, effectiveAccountId, currencyCode, locale)

Get details of a product in a web store.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ProductDetailsOutputRepresentation productDetails(String webstoreId, String skuOrProductId, String effectiveAccountId, String currencyCode, String locale)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the WebStore.

skuOrProductId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

SKU or ID of the Product.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Effective Account ID. Required for B2B stores. For other stores, pass null.

currencyCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ISO currency code. If you pass null, the default store value is used.

locale

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Locale. If you pass null, the default store value is used.

excludeAttributeSetInfo

Type: [Bolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the attribute set information for the product is returned.

excludeBundleChildrenInfo

Type: [Bolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the child product information for the product bundle is returned.

excludeMedia

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the media groups and default images of the product are returned.

excludeQuantityRule

Type: [Bolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the quantity rule information for the product is returned.

excludeVariationInfo

Type: [Bolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the variation information for the product is returned.

excludePrices

Type: [Bolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the prices for the product is returned.

#### Return Value

Type: [ConnectApi.ProductDetailsOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_details_output.htm "Details about a product.")

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

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- productDetails(webstoreId, skuOrProductId, effectiveAccountId, currencyCode, locale) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Repricing_static_methods.htm)
- searchProducts(webstoreId, searchTerm, pageParam, pageSize, effectiveAccountId, facets) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Repricing_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Bolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.ProductDetailsOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_details_output.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.ProductSearchOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_output.htm)
