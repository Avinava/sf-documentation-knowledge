---
title: "addWishlistToCart(webstoreId, wishlistId,
      effectiveAccountId)"
domain: apex-reference
topic: addwishlisttocartwebstoreid-wishlistid-effectiveaccountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.847Z
keywords: [addWishlistToCart, webstoreId, wishlistId, effectiveAccountId, Add, wishlist, active, cart., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# addWishlistToCart(webstoreId, wishlistId,
      effectiveAccountId)

> Add a wishlist to the active cart.

### addWishlistToCart(webstoreId, wishlistId, effectiveAccountId)

Add a wishlist to the active cart.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.WishlistToCartResult addWishlistToCart(String webstoreId, String wishlistId, String effectiveAccountId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

wishlistId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the wishlist.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

#### Return Value

Type: [ConnectApi.WishlistToCartResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_to_cart_result.htm "Result of adding a wishlist to a cart.")

#### Usage

This method respects buyer View Product entitlements and only users entitled to view product data can access it.