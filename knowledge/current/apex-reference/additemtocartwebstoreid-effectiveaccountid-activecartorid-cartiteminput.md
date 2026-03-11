---
title: "addItemToCart(webstoreId, effectiveAccountId, activeCartOrId,
      cartItemInput)"
domain: apex-reference
topic: additemtocartwebstoreid-effectiveaccountid-activecartorid-cartiteminput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [addItemToCart, webstoreId, effectiveAccountId, activeCartOrId, cartItemInput, Add, item, cart., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# addItemToCart(webstoreId, effectiveAccountId, activeCartOrId,
      cartItemInput)

> Add an item to a cart.

### addItemToCart(webstoreId, effectiveAccountId, activeCartOrId, cartItemInput)

Add an item to a cart.

#### API Version

49.0

#### Available to Guest Users

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CartItem addItemToCart(String webstoreId, String effectiveAccountId, String activeCartOrId, ConnectApi.CartItemInput cartItemInput)

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

cartItemInput

Type: [ConnectApi.CartItemInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cart_item.htm "An item in a cart.")

A ConnectApi.CartItemInput object representing an item to add to the cart.

#### Return Value

Type: [ConnectApi.CartItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item.htm "An item in a cart.")

#### Usage

Buyers with read access to carts can add, update, and delete items in carts.

This method respects buyer View Product entitlements and only users entitled to view product data can access it.