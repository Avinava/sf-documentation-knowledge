---
title: "getProductCartItem(webstoreId, effectiveAccountId, activeCartOrId, productId, currencyIsoCode)"
domain: apex-reference
topic: getproductcartitemwebstoreid-effectiveaccountid-activecartorid-productid-currenc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [getProductCartItem, webstoreId, effectiveAccountId, activeCartOrId, productId, currencyIsoCode, Get, cart, items, specific, product., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters]
---

# getProductCartItem(webstoreId, effectiveAccountId, activeCartOrId, productId, currencyIsoCode)

> Get cart items of a specific product.

### getProductCartItem(webstoreId, effectiveAccountId, activeCartOrId, productId, currencyIsoCode)

Get cart items of a specific product.

#### API Version

60.0

#### Available to Guest Users

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ProductCartItem getProductCartItem(String webstoreId, String effectiveAccountId, String activeCartOrId, String productId, String currencyIsoCode)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the web store.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context.

activeCartOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the cart, active, or current. The current value is available in version 50.0 and later and indicates a cart with a status that isn’t Closed or PendingDelete. Use active only for B2B Aura stores; all other stores must use current.

currencyIsoCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Currency ISO code of the cart.

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the product.

#### Return Value

Type: [ConnectApi.ProductCartItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_cart_item.htm "Cart items of a specific product type.")