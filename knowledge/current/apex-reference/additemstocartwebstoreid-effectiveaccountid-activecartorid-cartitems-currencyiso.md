---
title: "addItemsToCart(webstoreId, effectiveAccountId, activeCartOrId, cartItems, currencyIsoCode)"
domain: apex-reference
topic: additemstocartwebstoreid-effectiveaccountid-activecartorid-cartitems-currencyiso
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [addItemsToCart, webstoreId, effectiveAccountId, activeCartOrId, cartItems, currencyIsoCode, Add, batch, 100, items, cart, specific, currency., API, Version, Available, Guest, Users, Requires, Chatter]
---

# addItemsToCart(webstoreId, effectiveAccountId, activeCartOrId, cartItems, currencyIsoCode)

> Add a batch of up to 100 items to a cart of a specific
    currency.

### addItemsToCart(webstoreId, effectiveAccountId, activeCartOrId, cartItems, currencyIsoCode)

Add a batch of up to 100 items to a cart of a specific currency.

#### API Version

57.0

#### Available to Guest Users

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BatchResult\[\] addItemsToCart(String webstoreId, String effectiveAccountId, String activeCartOrId, List<ConnectApi.BatchInput> cartItems, String currencyIsoCode)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If null, the default value is determined from context.

activeCartOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the cart, active, or current. The current value is available in version 50.0 and later and indicates a cart with a status that isn’t Closed or PendingDelete. Use active only for B2B Aura stores; all other stores must use current.

cartItems

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[ConnectApi.BatchInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_batch.htm "Construct a set of inputs to be passed into a method at the same time.")\>

The list can contain up to 100 ConnectApi.BatchInput objects. In the ConnectApi.BatchInput constructor, the input object must be [ConnectApi.CartItemInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cart_item.htm "An item in a cart.").

currencyIsoCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The currency ISO code of the cart.

#### Return Value

Type: [ConnectApi.BatchResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm "The result of an operation returned by a batch method.")\[\]

The ConnectApi.BatchResult.getResult() method returns a [ConnectApi.CartItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item.htm "An item in a cart.") object.

The returned objects correspond to each of the input objects and are returned in the same order as the input objects.

The method call fails only if an error occurs that affects the entire operation (such as a parsing failure). If an individual object causes an error, the error is embedded within the ConnectApi.BatchResult list.

#### Usage

Buyers with read access to carts can add, update, and delete items in carts.

This method respects buyer View Product entitlements and only users entitled to view product data can access it.