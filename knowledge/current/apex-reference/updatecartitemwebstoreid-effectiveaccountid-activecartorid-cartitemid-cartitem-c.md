---
title: "updateCartItem(webstoreId, effectiveAccountId, activeCartOrId, cartItemId, cartItem, currencyIsoCode, includeCartData)"
domain: apex-reference
topic: updatecartitemwebstoreid-effectiveaccountid-activecartorid-cartitemid-cartitem-c
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [updateCartItem, webstoreId, effectiveAccountId, activeCartOrId, cartItemId, cartItem, currencyIsoCode, includeCartData, Update, item, cart, specific, currency., API, Version, Available, Guest, Users, Requires, Chatter]
---

# updateCartItem(webstoreId, effectiveAccountId, activeCartOrId, cartItemId, cartItem, currencyIsoCode, includeCartData)

> Update an item in a cart of a specific currency.

### updateCartItem(webstoreId, effectiveAccountId, activeCartOrId, cartItemId, cartItem, currencyIsoCode, includeCartData)

Update an item in a cart of a specific currency.

#### API Version

64.0

#### Available to Guest Users

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CartItem updateCartItem(String webstoreId, String effectiveAccountId, String activeCartOrId, String cartItemId, ConnectApi.CartItemInput cartItem, String currencyIsoCode, Boolean includeCartData)

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

cartItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the cart item.

cartItem

Type: [ConnectApi.CartItemInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cart_item.htm "An item in a cart.")

A ConnectApi.CartItemInput object representing a cart item to update.

currencyIsoCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The currency ISO code of the cart.

currencyIsoCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Description

includeCartData

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return a collection of cart items in the response (true) or not (false). If unspecified, the default value is false. This parameter is supported for D2C stores with Faster Add-to-Cart disabled. The cart must also have fewer than 25 items.

#### Return Value

Type: [ConnectApi.CartItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item.htm "An item in a cart.")

#### Usage

Buyers with read access to carts can add, update, and delete items in carts.

This method respects buyer View Product entitlements and only users entitled to view product data can access it.