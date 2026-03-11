---
title: "getOrCreateActiveCartSummary(webstoreId, effectiveAccountId, activeCartOrId, currencyIsoCode)"
domain: apex-reference
topic: getorcreateactivecartsummarywebstoreid-effectiveaccountid-activecartorid-currenc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [getOrCreateActiveCartSummary, webstoreId, effectiveAccountId, activeCartOrId, currencyIsoCode, Get, cart, specific, currency, create, active, doesn’t, exist., API, Version, Available, Guest, Users, Requires, Chatter]
---

# getOrCreateActiveCartSummary(webstoreId, effectiveAccountId, activeCartOrId, currencyIsoCode)

> Get a cart in a specific currency, or create an active cart if one
      doesn’t exist.

### getOrCreateActiveCartSummary(webstoreId, effectiveAccountId, activeCartOrId, currencyIsoCode)

Get a cart in a specific currency, or create an active cart if one doesn’t exist.

#### API Version

57.0

#### Available to Guest Users

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CartSummary getOrCreateActiveCartSummary(String webstoreId, String effectiveAccountId, String activeCartOrId, String currencyIsoCode)

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

currencyIsoCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Currency ISO code of the cart.

#### Return Value

Type: [ConnectApi.CartSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_summary.htm "A cart summary.")

#### Usage

Buyers with read access to carts can create and delete carts.