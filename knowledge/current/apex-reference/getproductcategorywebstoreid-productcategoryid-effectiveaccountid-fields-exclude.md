---
title: "getProductCategory(webstoreId, productCategoryId,
      effectiveAccountId, fields, excludeFields, mediaGroups, excludeMedia)"
domain: apex-reference
topic: getproductcategorywebstoreid-productcategoryid-effectiveaccountid-fields-exclude
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.771Z
keywords: [getProductCategory, webstoreId, productCategoryId, effectiveAccountId, fields, excludeFields, mediaGroups, excludeMedia, Get, product, category., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters]
---

# getProductCategory(webstoreId, productCategoryId,
      effectiveAccountId, fields, excludeFields, mediaGroups, excludeMedia)

> Get a product category.

### getProductCategory(webstoreId, productCategoryId, effectiveAccountId, fields, excludeFields, mediaGroups, excludeMedia)

Get a product category.

#### API Version

49.0

#### Available to Guest Users

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ProductCategoryDetail getProductCategory(String webstoreId, String productCategoryId, String effectiveAccountId, List<String\> fields, Boolean excludeFields, List<String\> mediaGroups, Boolean excludeMedia)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

productCategoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the product category.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If null, the default value is determined from context.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of field names.

If this list is unspecified, all fields are returned. There is no limit to the number of fields you can specify. The number of fields and number of characters in the field name may affect the URL size limit. If excludeFields and fields are specified, the excludeFields parameter takes precedence.

excludeFields

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the fields are returned (false) or not (true). If unspecified, defaults to false.

mediaGroups

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of developer names of media group records.

If this list is empty or unspecified, all media groups are returned. If excludeMedia and mediaGroups are specified, the excludeMedia parameter takes precedence.

excludeMedia

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the media groups and default images of the product are returned (false) or not (true). If unspecified, defaults to false.

#### Return Value

Type: [ConnectApi.ProductCategoryDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_category_detail.htm "Details of a product category.")