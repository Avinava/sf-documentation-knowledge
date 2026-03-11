---
title: "evaluateTaxes(webstoreId, activeCartOrId, effectiveAccountId, cartEvaluateTaxInput)"
domain: apex-reference
topic: evaluatetaxeswebstoreid-activecartorid-effectiveaccountid-cartevaluatetaxinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [evaluateTaxes, webstoreId, activeCartOrId, effectiveAccountId, cartEvaluateTaxInput, Evaluate, taxes, cart., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# evaluateTaxes(webstoreId, activeCartOrId, effectiveAccountId, cartEvaluateTaxInput)

> Evaluate taxes for a cart.

### evaluateTaxes(webstoreId, activeCartOrId, effectiveAccountId, cartEvaluateTaxInput)

Evaluate taxes for a cart.

#### API Version

63.0

#### Available to Guest Users

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CalculateCartResult evaluateTaxes(String webstoreId, String activeCartOrId, String effectiveAccountId, ConnectApi.CartEvaluateTaxInput cartEvaluateTaxInput)

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

cartEvaluateTaxInput

Type: [ConnectApi.CartEvaluateTaxInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cart_evaluate_tax.htm "Shipping address and custom fields used to calculate taxes for a cart.")

A ConnectApi.CartEvaluateTaxInput object representing a shipping address and any custom fields.

#### Return Value

Type: [ConnectApi.CalculateCartResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_summary_result.htm "Result of a cart calculate request. Includes a cart summary with calculated cart values.")

#### Usage

Buyers with read access to carts can add, update, and delete items in carts.

This method respects buyer View Product entitlements and only users entitled to view product data can access it.