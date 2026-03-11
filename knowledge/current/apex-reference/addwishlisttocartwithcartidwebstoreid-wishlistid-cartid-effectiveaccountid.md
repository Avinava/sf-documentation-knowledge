---
title: "addWishlistToCartWithCartId(webstoreId, wishlistId, cartId,
      effectiveAccountId)"
domain: apex-reference
topic: addwishlisttocartwithcartidwebstoreid-wishlistid-cartid-effectiveaccountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.847Z
keywords: [addWishlistToCartWithCartId, webstoreId, wishlistId, cartId, effectiveAccountId, Add, wishlist, cart., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# addWishlistToCartWithCartId(webstoreId, wishlistId, cartId,
      effectiveAccountId)

> Add a wishlist to a cart.

### addWishlistToCartWithCartId(webstoreId, wishlistId, cartId, effectiveAccountId)

Add a wishlist to a cart.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.WishlistToCartResult addWishlistToCartWithCartId(String webstoreId, String wishlistId, String cartId, String effectiveAccountId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

wishlistId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the wishlist.

cartId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the cart. If null, wishlist items are added to the active cart.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

#### Return Value

Type: [ConnectApi.WishlistToCartResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_to_cart_result.htm "Result of adding a wishlist to a cart.")

#### Usage

This method respects buyer View Product entitlements and only users entitled to view product data can access it.