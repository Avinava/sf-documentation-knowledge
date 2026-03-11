---
title: "getProductCategoryPath(webstoreId, productCategoryId,
      effectiveAccountId)"
domain: apex-reference
topic: getproductcategorypathwebstoreid-productcategoryid-effectiveaccountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.771Z
keywords: [getProductCategoryPath, webstoreId, productCategoryId, effectiveAccountId, Get, product, category, path, root, current, category., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters]
---

# getProductCategoryPath(webstoreId, productCategoryId,
      effectiveAccountId)

> Get the product category path from the root category to the current
      category.

### getProductCategoryPath(webstoreId, productCategoryId, effectiveAccountId)

Get the product category path from the root category to the current category.

#### API Version

49.0

#### Available to Guest Users

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ProductCategoryPath getProductCategoryPath(String webstoreId, String productCategoryId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

productCategoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the product category.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If null, the default value is determined from context.ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. This field is available in API version 65.0 and later.

#### Return Value

Type: [ConnectApi.ProductCategoryPath](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_category_path.htm "List of product categories in a path.")

#### Usage

This method respects buyer View Product entitlements and only users entitled to view product data can access it.