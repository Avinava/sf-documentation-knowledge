---
title: "getCartPromotions(webstoreId, effectiveAccountId, activeCartOrId, currencyIsoCode)"
domain: apex-reference
topic: getcartpromotionswebstoreid-effectiveaccountid-activecartorid-currencyisocode
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [getCartPromotions, webstoreId, effectiveAccountId, activeCartOrId, currencyIsoCode, Get, promotions, cart, specific, currency., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# getCartPromotions(webstoreId, effectiveAccountId, activeCartOrId, currencyIsoCode)

> Get promotions for a cart in a specific currency.

### getCartPromotions(webstoreId, effectiveAccountId, activeCartOrId, currencyIsoCode)

Get promotions for a cart in a specific currency.

#### API Version

57.0

#### Available to Guest Users

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CartPromotionCollection getCartPromotions(String webstoreId, String effectiveAccountId, String activeCartOrId, String currencyIsoCode)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If null, the default value is determined from context.

activeCartOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the cart, active, or current. The current value indicates a cart with a status that isn’t Closed or PendingDelete. Use active only for B2B Aura stores; all other stores must use current.

currencyIsoCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Currency ISO code of the cart.

#### Return Value

Type: [ConnectApi.CartPromotionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_promotion_collection.htm "All the promotions associated with the cart.")