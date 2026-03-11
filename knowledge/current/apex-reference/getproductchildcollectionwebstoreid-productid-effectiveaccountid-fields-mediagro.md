---
title: "getProductChildCollection(webstoreId, productId, effectiveAccountId, fields, mediaGroups, excludeFields, excludeMedia, excludeAttributeSetInfo, excludeQuantityRule, includeProductSellingModels, includeRequiredChildrenOnly, excludeDynamicAttributeInfo, pageToken, pageSize, noCache)"
domain: apex-reference
topic: getproductchildcollectionwebstoreid-productid-effectiveaccountid-fields-mediagro
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.771Z
keywords: [getProductChildCollection, webstoreId, productId, effectiveAccountId, fields, mediaGroups, excludeFields, excludeMedia, excludeAttributeSetInfo, excludeQuantityRule, includeProductSellingModels, includeRequiredChildrenOnly, excludeDynamicAttributeInfo, pageToken, pageSize, noCache, Get, collection, child, products]
---

# getProductChildCollection(webstoreId, productId, effectiveAccountId, fields, mediaGroups, excludeFields, excludeMedia, excludeAttributeSetInfo, excludeQuantityRule, includeProductSellingModels, includeRequiredChildrenOnly, excludeDynamicAttributeInfo, pageToken, pageSize, noCache)

> Get a collection of child products related to a parent product.

### getProductChildCollection(webstoreId, productId, effectiveAccountId, fields, mediaGroups, excludeFields, excludeMedia, excludeAttributeSetInfo, excludeQuantityRule, includeProductSellingModels, includeRequiredChildrenOnly, excludeDynamicAttributeInfo, pageToken, pageSize, noCache)

Get a collection of child products related to a parent product.

#### API Version

66.0

#### Available to Guest Users

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ProductChildCollection getProductChildCollection(String webstoreId, String productId, String effectiveAccountId, List<String\> fields, List<String\> mediaGroups, Boolean excludeFields, Boolean excludeMedia, Boolean excludeAttributeSetInfo, Boolean excludeQuantityRule, Boolean includeProductSellingModels, Boolean includeRequiredChildrenOnly, Boolean excludeDynamicAttributeInfo, String pageToken, Integer pageSize, String noCache)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

productId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the product.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of field names.

If this list is empty or unspecified, all fields are returned. There’s no limit to the number of fields you can specify. The number of fields and number of characters in the field name may affect the URL size limit. If excludeFields and fields are specified, the excludeFields parameter takes precedence.

mediaGroups

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Comma-separated list of developer names of media group records. Possible values:

-   Attachment
-   productDetailImage
-   productListImage

If this list is empty or unspecified, all media groups are returned. If excludeMedia and mediaGroups are specified, the excludeMedia parameter takes precedence.

For product bundles, only the producListImage is returned.

excludeFields

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the fields are returned (false) or not (true). If unspecified, defaults to false.

excludeMedia

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the media groups and default images of the product are returned (false) or not (true). If unspecified, defaults to false.

excludeAttributeSetInfo

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the attribute set information for the product is returned (false) or not (true). If unspecified, defaults to false.

excludeQuantityRule

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the quantity rule information for the product is returned (false) or not (true). If unspecified, defaults to false.

includeProductSellingModels

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether product selling models are returned or not. The behavior of this parameter depends on whether you turn on the CommerceSubscription permission. If the permission is on, and if you set the parameter to false (or if you omit the parameter), product selling models are returned. If the permission is on, and if you set the parameter to true, product selling models are not returned. If the permission is off, product selling models are not returned, regardless of whether you omit the parameter or provide a value.

includeRequiredChildrenOnly

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include only the required children for the product (true) or not (false). If unspecified, defaults to true.

excludeDynamicAttributeInfo

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to exclue the dynamic attribute information for the product (true) or not (false). If unspecified, defaults to true.

pageToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the base64 encoded page token. Page tokens are returned as part of the response. If unspecified, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 20.

noCache

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies whether to ignore cached data and return the latest response (true) or not (false).

#### Return Value

Type: [ConnectApi.ProductChildCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_child_collection.htm "Collection of child products related to a parent product.")