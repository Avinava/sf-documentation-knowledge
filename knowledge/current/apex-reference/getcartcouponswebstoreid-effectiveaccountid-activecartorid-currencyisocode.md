---
title: "getCartCoupons(webstoreId, effectiveAccountId, activeCartOrId, currencyIsoCode)"
domain: apex-reference
topic: getcartcouponswebstoreid-effectiveaccountid-activecartorid-currencyisocode
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [getCartCoupons, webstoreId, effectiveAccountId, activeCartOrId, currencyIsoCode, Get, coupons, cart., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getCartCoupons(webstoreId, effectiveAccountId, activeCartOrId, currencyIsoCode)

> Get coupons for a cart.

### getCartCoupons(webstoreId, effectiveAccountId, activeCartOrId, currencyIsoCode)

Get coupons for a cart.

#### API Version

57.0

#### Available to Guest Users

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CartCouponCollection getCartCoupons(String webstoreId, String effectiveAccountId, String activeCartOrId, String currencyIsoCode)

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

#### Return Value

Type: [ConnectApi.CartCouponCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_coupon_collection.htm "Collection of coupons related to a cart.")