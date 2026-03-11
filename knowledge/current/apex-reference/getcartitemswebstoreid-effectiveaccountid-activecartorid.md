---
title: "getCartItems(webstoreId, effectiveAccountId,
      activeCartOrId)"
domain: apex-reference
topic: getcartitemswebstoreid-effectiveaccountid-activecartorid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [getCartItems, webstoreId, effectiveAccountId, activeCartOrId, Get, items, cart., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getCartItems(webstoreId, effectiveAccountId,
      activeCartOrId)

> Get items in a cart.

### getCartItems(webstoreId, effectiveAccountId, activeCartOrId)

Get items in a cart.

#### API Version

49.0

#### Available to Guest Users

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CartItemCollection getCartItems(String webstoreId, String effectiveAccountId, String activeCartOrId)

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

#### Return Value

Type: [ConnectApi.CartItemCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item_collection.htm "A collection of items in a cart.")