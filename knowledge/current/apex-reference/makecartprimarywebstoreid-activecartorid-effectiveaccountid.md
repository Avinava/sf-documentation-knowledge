---
title: "makeCartPrimary(webstoreId, activeCartOrId, effectiveAccountId)"
domain: apex-reference
topic: makecartprimarywebstoreid-activecartorid-effectiveaccountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [makeCartPrimary, webstoreId, activeCartOrId, effectiveAccountId, secondary, cart, primary, cart., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# makeCartPrimary(webstoreId, activeCartOrId, effectiveAccountId)

> Make a secondary cart a primary cart.

### makeCartPrimary(webstoreId, activeCartOrId, effectiveAccountId)

Make a secondary cart a primary cart.

#### API Version

53.0

#### Available to Guest Users

56.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.CommerceActionResult makeCartPrimary(String webstoreId, String activeCartOrId, String effectiveAccountId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

activeCartOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the cart, active, or current. The current value is available in version 50.0 and later and indicates a cart with a status that isn’t Closed or PendingDelete. Use active only for B2B Aura stores; all other stores must use current.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If null, the default value is determined from context.

#### Return Value

Type: [ConnectApi.CommerceActionResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_action_result.htm "Result of executing a commerce action.")