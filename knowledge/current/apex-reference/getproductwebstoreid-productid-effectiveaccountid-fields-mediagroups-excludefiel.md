---
title: "getProduct(webstoreId, productId, effectiveAccountId, fields, mediaGroups, excludeFields, excludeMedia, excludePrimaryProductCategory, excludeVariationInfo, excludeAttributeSetInfo, excludeQuantityRule, excludeProductSellingModels, noCache)"
domain: apex-reference
topic: getproductwebstoreid-productid-effectiveaccountid-fields-mediagroups-excludefiel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.771Z
keywords: [getProduct, webstoreId, productId, effectiveAccountId, fields, mediaGroups, excludeFields, excludeMedia, excludePrimaryProductCategory, excludeVariationInfo, excludeAttributeSetInfo, excludeQuantityRule, excludeProductSellingModels, noCache, Get, detailed, information, product, without, its]
---

# getProduct(webstoreId, productId, effectiveAccountId, fields, mediaGroups, excludeFields, excludeMedia, excludePrimaryProductCategory, excludeVariationInfo, excludeAttributeSetInfo, excludeQuantityRule, excludeProductSellingModels, noCache)

> Get detailed information for a product without its entitlement
      information.

### getProduct(webstoreId, productId, effectiveAccountId, fields, mediaGroups, excludeFields, excludeMedia, excludePrimaryProductCategory, excludeVariationInfo, excludeAttributeSetInfo, excludeQuantityRule, excludeProductSellingModels, noCache)

Get detailed information for a product without its entitlement information.

#### API Version

64.0

#### Available to Guest Users

64.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ProductDetail getProduct(String webstoreId, String productId, String effectiveAccountId, List<String\> fields, List<String\> mediaGroups, Boolean excludeFields, Boolean excludeMedia, Boolean excludePrimaryProductCategory, Boolean excludeVariationInfo, Boolean excludeAttributeSetInfo, Boolean excludeQuantityRule, Boolean excludeProductSellingModels, String noCache)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

productId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the product.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of field names.

If this list is unspecified, all fields are returned. There is no limit to the number of fields you can specify. The number of fields and number of characters in the field name may affect the URL size limit. If excludeFields and fields are specified, the excludeFields parameter takes precedence.

mediaGroups

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of developer names of media group records.

If this list is empty or unspecified, all media groups are returned. If excludeMedia and mediaGroups are specified, the excludeMedia parameter takes precedence.

excludeFields

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the fields are returned (false) or not (true). If unspecified, defaults to false.

excludeMedia

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the media groups and default images of the product are returned (false) or not (true). If unspecified, defaults to false.

excludePrimaryProductCategory

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the primary category path of the product is returned (false) or not (true). If unspecified, defaults to false.

excludeVariationInfo

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the variation information for the product is returned (false) or not (true). If unspecified, defaults to false.

excludeAttributeSetInfo

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the attribute set information for the product is returned (false) or not (true). If unspecified, defaults to false.

excludeQuantityRule

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the quantity rule information for the product is returned (false) or not (true). If unspecified, defaults to false.

excludeProductSellingModels

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether product selling models are returned or not. The behavior of this parameter depends on whether you turn on the CommerceSubscription permission. If the permission is on, and if you set the parameter to false (or if you omit the parameter), product selling models are returned. If the permission is on, and if you set the parameter to true, product selling models are not returned. If the permission is off, product selling models are not returned, regardless of whether you omit the parameter or provide a value.

noCache

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies whether to ignore cached data and return the latest response (true) or not (false).

#### Return Value

Type: [ConnectApi.ProductDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_detail.htm "Details of a product.")

#### Usage

This method respects buyer View Product entitlements and only users entitled to view product data can access it.