---
title: "CommerceSearchConnectFamily Class"
domain: apex-reference
topic: commercesearchconnectfamily-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:17.808Z
estimatedTokens: 1355
namespace: ConnectApi
keywords: [CommerceSearchConnectFamily, Search, products, search, term, category, webstore., searchProducts, webstoreId, searchTerm, categoryId, sortRuleId, grouping, fields, refinements, pageParam, pageSize, effectiveAccountId, includeQuantityRule, API]
---

# CommerceSearchConnectFamily Class

> Search products by search term or category in a webstore.

**Namespace:** `ConnectApi`

# CommerceSearchConnectFamily Class

Search products by search term or category in a webstore.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CommerceSearchConnectFamily Methods

These methods are for CommerceSearchConnectFamily. All methods are static.

-   **[searchProducts(webstoreId, searchTerm, categoryId, sortRuleId, grouping, fields, refinements, pageParam, pageSize, effectiveAccountId, includeQuantityRule)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearchConnectFamily_static_methods.htm#apex_ConnectAPI_CommerceSearchConnectFamily_searchProducts_1)**
    Search products by search term or category in a webstore.

### searchProducts(webstoreId, searchTerm, categoryId, sortRuleId, grouping, fields, refinements, pageParam, pageSize, effectiveAccountId, includeQuantityRule)

Search products by search term or category in a webstore.

#### API Version

58.0

#### Available to Guest Users

58.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CommerceProductSearchResults searchProducts(String webstoreId, String searchTerm, String categoryId, String sortRuleId, String grouping, List<String\> fields, String refinements, Integer pageParam, Integer pageSize, String effectiveAccountId, Boolean includeQuantityRule)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

searchTerm

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

List of up to 32 space-separated search terms.

categoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Category ID returns results for products in this category or its subcategories.

sortRuleId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the sort rule that specifies the order of products in the search results. If unspecified, the default sort type is relevancy.

grouping

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Grouping option for search results. If unspecified, the default is the value specified in **Search** | **Results Display Settings** | **Results Grouping**.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Product fields to return in search results. Search results include fields you have access to.

refinements

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

List up to nine refinements (facets) for search results. Buyers or shoppers can select up to 20 values for each refinement. The refinements parameter is encoded as a Base64 string from the JSON representation of [ConnectApi.DistinctValueRefinementInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_distinct_value_refinement.htm "Attribute-based refinement with distinct values for product search.") .

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 200. If unspecified, defaults to 20.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context.

includeQuantityRule

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include purchase quantity rule information for products in search results (true) or not (false). If unspecified, defaults to false.

#### Return Value

Type: [ConnectApi.CommerceProductSearchResults](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_product_search_results.htm "Product search results information.")

#### Usage

Searching products respects buyer View Product entitlements and only users entitled to view product data can access this resource.

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- searchProducts(webstoreId, searchTerm, categoryId, sortRuleId, grouping, fields, refinements, pageParam, pageSize, effectiveAccountId, includeQuantityRule) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearchConnectFamily_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.DistinctValueRefinementInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_distinct_value_refinement.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.CommerceProductSearchResults (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_product_search_results.htm)
