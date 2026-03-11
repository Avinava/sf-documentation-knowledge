---
title: "getProductPrice(webstoreId, productId,
      effectiveAccountId)"
domain: apex-reference
topic: getproductpricewebstoreid-productid-effectiveaccountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.812Z
keywords: [getProductPrice, webstoreId, productId, effectiveAccountId, Get, list, buyer, price, product., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getProductPrice(webstoreId, productId,
      effectiveAccountId)

> Get the list and buyer price for a product.

### getProductPrice(webstoreId, productId, effectiveAccountId)

Get the list and buyer price for a product.

#### API Version

49.0

#### Available to Guest Users

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ProductPrice getProductPrice(String webstoreId, String productId, String effectiveAccountId)

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

#### Return Value

Type: [ConnectApi.ProductPrice](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_price.htm "Pricing information for a product.")

#### Usage

This method respects buyer entitlements and only users entitled to view product and price data can access it.

If a store is segmented into markets, this API looks at the language parameter appended to the URL to determine the shopper’s locale and returns the appropriate values.