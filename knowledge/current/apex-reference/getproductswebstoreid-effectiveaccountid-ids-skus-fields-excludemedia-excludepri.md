---
title: "getProducts(webstoreId, effectiveAccountId, ids, skus, fields,
      excludeMedia, excludePrices)"
domain: apex-reference
topic: getproductswebstoreid-effectiveaccountid-ids-skus-fields-excludemedia-excludepri
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.771Z
keywords: [getProducts, webstoreId, effectiveAccountId, ids, skus, fields, excludeMedia, excludePrices, Get, prices, default, images, list, products., API, Version, Available, Guest, Users, Requires]
---

# getProducts(webstoreId, effectiveAccountId, ids, skus, fields,
      excludeMedia, excludePrices)

> Get fields, prices, and default images for a list of products.

### getProducts(webstoreId, effectiveAccountId, ids, skus, fields, excludeMedia, excludePrices)

Get fields, prices, and default images for a list of products.

#### API Version

54.0

Supported in API versions 54.0 to 63.0.

#### Available to Guest Users

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ProductOverviewCollection getProducts(String webstoreId, String effectiveAccountId, List<String\> ids, List<String\> skus, List<String\> fields, Boolean excludeMedia, Boolean excludePrices)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context.

ids

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of product IDs. Specify either a list of up to 20 product IDs or SKUs, but not both.

skus

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of SKUs. Specify either a list of up to 20 SKUs or product IDs, but not both.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of field names to return for each product. If the list is empty or not specified, all fields are returned. You can specify any number of fields.

excludeMedia

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether default images are returned for the products (false) or not (true). The default is false.

excludePrices

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether prices are returned for the products (false) or not (true). The default is false.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

In version 58.0 and later, prices aren’t returned for products regardless of this parameter. To get pricing information for products in version 58.0 and later, use the [CommerceStorePricing Class](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceStorePricing_static_methods.htm#apex_ConnectAPI_CommerceStorePricing_static_methods "Get product prices.").

#### Return Value

Type: [ConnectApi.ProductOverviewCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_overview_collection.htm "Collection of product overviews.")