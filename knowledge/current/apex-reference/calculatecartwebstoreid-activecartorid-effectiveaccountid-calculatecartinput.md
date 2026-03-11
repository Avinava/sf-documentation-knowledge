---
title: "calculateCart(webstoreId, activeCartOrId, effectiveAccountId, calculateCartInput)"
domain: apex-reference
topic: calculatecartwebstoreid-activecartorid-effectiveaccountid-calculatecartinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [calculateCart, webstoreId, activeCartOrId, effectiveAccountId, calculateCartInput, Calculate, cart., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# calculateCart(webstoreId, activeCartOrId, effectiveAccountId, calculateCartInput)

> Calculate a cart.

### calculateCart(webstoreId, activeCartOrId, effectiveAccountId, calculateCartInput)

Calculate a cart.

#### API Version

63.0

#### Available to Guest Users

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CalculateCartResult calculateCart(String webstoreId, String activeCartOrId, String effectiveAccountId, ConnectApi.CalculateCartInput calculateCartInput)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

activeCartOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the cart, active, or current. The current value indicates a cart with a status that isn’t Closed or PendingDelete. Use active only for B2B Aura stores; all other stores must use current.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If null, the default value is determined from context.

calculateCartInput

Type: [ConnectApi.CalculateCartInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cart_calculate.htm "Custom fields for a cart calculation.")

A ConnectApi.CalculateCartInput object representing any custom fields for the cart.

#### Return Value

Type: [ConnectApi.CalculateCartResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_summary_result.htm "Result of a cart calculate request. Includes a cart summary with calculated cart values.")

#### Usage

Buyers with read access to carts can add, update, and delete items in carts.

This method respects buyer View Product entitlements and only users entitled to view product data can access it.