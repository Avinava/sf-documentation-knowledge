---
title: "getProductCartItems(webstoreId, effectiveAccountId, activeCartOrId, pageSize, pageNumber, currencyIsoCode)"
domain: apex-reference
topic: getproductcartitemswebstoreid-effectiveaccountid-activecartorid-pagesize-pagenum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [getProductCartItems, webstoreId, effectiveAccountId, activeCartOrId, pageSize, pageNumber, currencyIsoCode, Get, items, cart, sorted, product, ID., API, Version, Available, Guest, Users, Requires, Chatter]
---

# getProductCartItems(webstoreId, effectiveAccountId, activeCartOrId, pageSize, pageNumber, currencyIsoCode)

> Get the items in a cart, sorted by product ID.

### getProductCartItems(webstoreId, effectiveAccountId, activeCartOrId, pageSize, pageNumber, currencyIsoCode)

Get the items in a cart, sorted by product ID.

#### API Version

60.0

#### Available to Guest Users

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ProductCartItemCollection getProductCartItems(String webstoreId, String effectiveAccountId, String activeCartOrId, Integer pageSize, Integer pageNumber, String currencyIsoCode)

#### Parameters

activeCartOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the cart, active, or current. The current value is available in version 50.0 and later and indicates a cart with a status that isn’t Closed or PendingDelete. Use active only for B2B Aura stores; all other stores must use current.

currencyIsoCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Currency ISO code of the cart.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context.

pageNumber

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the requested page number.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 25.

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the web store.

#### Return Value

Type: [ConnectApi.ProductCartItemCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_cart_item_collection.htm "Items in the cart, grouped by product type.")