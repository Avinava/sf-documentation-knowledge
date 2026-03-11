---
title: "getProducts(webstoreId, effectiveAccountId, ids, skus, fields, excludeMedia, includeQuantityRule, includeProductSellingModels, includeAttributeSetInfo, includeGroupByAttributeVariationInfo, noCache)"
domain: apex-reference
topic: getproductswebstoreid-effectiveaccountid-ids-skus-fields-excludemedia-includequa
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.771Z
keywords: [getProducts, webstoreId, effectiveAccountId, ids, skus, fields, excludeMedia, includeQuantityRule, includeProductSellingModels, includeAttributeSetInfo, includeGroupByAttributeVariationInfo, noCache, Get, default, images, list, products., API, Version, Available]
---

# getProducts(webstoreId, effectiveAccountId, ids, skus, fields, excludeMedia, includeQuantityRule, includeProductSellingModels, includeAttributeSetInfo, includeGroupByAttributeVariationInfo, noCache)

> Get fields and default images for a list of products.

### getProducts(webstoreId, effectiveAccountId, ids, skus, fields, excludeMedia, includeQuantityRule, includeProductSellingModels, includeAttributeSetInfo, includeGroupByAttributeVariationInfo, noCache)

Get fields and default images for a list of products.

#### API Version

64.0

#### Available to Guest Users

64.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ProductOverviewCollection getProducts(String webstoreId, String effectiveAccountId, List<String\> ids, List<String\> skus, List<String\> fields, Boolean excludeMedia, Boolean includeQuantityRule, Boolean includeProductSellingModels, Boolean includeAttributeSetInfo, Boolean includeGroupByAttributeVariationInfo, String noCache)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made.

ids

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of product IDs. Specify either a list of up to 20 product IDs or SKUs, but not both.

skus

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of skus. Specify either a list of up to 20 SKUs or product IDs, but not both.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of field names to return for each product. If the list is empty or not specified, all fields are returned. You can specify any number of fields.

excludeMedia

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the media groups and default images of the product are returned (false) or not (true). If unspecified, defaults to false.

includeQuantityRule

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the quantity rule information for the product is returned (false) or not (true). If unspecified, defaults to false.

includeProductSellingModels

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether product selling models are returned (true) or not (false). The behavior of this parameter depends on whether you turn on the CommerceSubscription permission. If the permission is on, and if you set the parameter to false (or if you omit the parameter), product selling models are returned. If the permission is on, and if you set the parameter to true, product selling models are not returned. If the permission is off, product selling models are not returned, regardless of whether you omit the parameter or provide a value.

includeAttributeSetInfo

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the attribute set information for the product is returned (true) or not (false). If unspecified, defaults to false.

includeGroupByAttributeVariationInfo

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the attribute set information for the product is returned (true) or not (false). If unspecified, defaults to false.

noCache

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies whether to ignore cached data and return the latest response (true) or not (false).

#### Return Value

Type: [ConnectApi.ProductOverviewCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_overview_collection.htm "Collection of product overviews.")