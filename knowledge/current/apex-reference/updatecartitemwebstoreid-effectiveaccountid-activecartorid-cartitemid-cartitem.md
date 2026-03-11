---
title: "updateCartItem(webstoreId, effectiveAccountId, activeCartOrId,
      cartItemId, cartItem)"
domain: apex-reference
topic: updatecartitemwebstoreid-effectiveaccountid-activecartorid-cartitemid-cartitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [updateCartItem, webstoreId, effectiveAccountId, activeCartOrId, cartItemId, cartItem, Update, item, cart., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateCartItem(webstoreId, effectiveAccountId, activeCartOrId,
      cartItemId, cartItem)

> Update an item in a cart.

### updateCartItem(webstoreId, effectiveAccountId, activeCartOrId, cartItemId, cartItem)

Update an item in a cart.

#### API Version

49.0

#### Available to Guest Users

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CartItem updateCartItem(String webstoreId, String effectiveAccountId, String activeCartOrId, String cartItemId, ConnectApi.CartItemInput cartItem)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If null, the default value is determined from context.

activeCartOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the cart, active, or current. The current value is available in version 50.0 and later and indicates a cart with a status that isn’t Closed or PendingDelete.

cartItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the cart item.

cartItem

Type: [ConnectApi.CartItemInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cart_item.htm "An item in a cart.")

A ConnectApi.CartItemInput object representing a cart item to update.

#### Return Value

Type: [ConnectApi.CartItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item.htm "An item in a cart.")

#### Usage

Buyers with read access to carts can add, update, and delete items in carts.

This method respects buyer View Product entitlements and only users entitled to view product data can access it.