---
title: "copyCartToWishlist(webstoreId, effectiveAccountId,
      activeCartOrId, cartToWishlistInput)"
domain: apex-reference
topic: copycarttowishlistwebstoreid-effectiveaccountid-activecartorid-carttowishlistinp
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [copyCartToWishlist, webstoreId, effectiveAccountId, activeCartOrId, cartToWishlistInput, Copy, products, cart, wishlist., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# copyCartToWishlist(webstoreId, effectiveAccountId,
      activeCartOrId, cartToWishlistInput)

> Copy the products from a cart to a wishlist.

### copyCartToWishlist(webstoreId, effectiveAccountId, activeCartOrId, cartToWishlistInput)

Copy the products from a cart to a wishlist.

#### API Version

50.0

#### Available to Guest Users

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CartToWishlistResult copyCartToWishlist(String webstoreId, String effectiveAccountId, String activeCartOrId, ConnectApi.CartToWishlistInput cartToWishlistInput)

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

cartToWishlistInput

Type: [ConnectApi.CartToWishlistInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cart_to_wishlist.htm "Copy products from a cart to a wishlist.")

A ConnectApi.CartToWishlistInput object indicating the wishlist to copy products to.

#### Return Value

Type: [ConnectApi.CartToWishlistResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_to_wishlist_result.htm "Result of copying products from a cart to a wishlist.")