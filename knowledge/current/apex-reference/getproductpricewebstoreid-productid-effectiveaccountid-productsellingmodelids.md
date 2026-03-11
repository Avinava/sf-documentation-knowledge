---
title: "getProductPrice(webstoreId, productId, effectiveAccountId,
            productSellingModelIds)"
domain: apex-reference
topic: getproductpricewebstoreid-productid-effectiveaccountid-productsellingmodelids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.812Z
keywords: [getProductPrice, webstoreId, productId, effectiveAccountId, productSellingModelIds, Get, product’s, list, buyer, price, specified, product, selling, models., API, Version, Available, Guest, Users, Requires]
---

# getProductPrice(webstoreId, productId, effectiveAccountId,
            productSellingModelIds)

> Get a product’s list and buyer price for specified product selling
            models.

### getProductPrice(webstoreId, productId, effectiveAccountId, productSellingModelIds)

Get a product’s list and buyer price for specified product selling models.

#### API Version

56.0

#### Available to Guest Users

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ProductPrice getProductPrice(String webstoreId, String productId, String effectiveAccountId, List<String\> productSellingModelIds)

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

productSellingModelIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of product selling model IDs for the product.

#### Return Value

Type: [ConnectApi.ProductPrice](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_price.htm "Pricing information for a product.")