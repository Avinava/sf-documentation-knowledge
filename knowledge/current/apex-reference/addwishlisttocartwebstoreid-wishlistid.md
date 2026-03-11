---
title: "addWishlistToCart(webstoreId, wishlistId)"
domain: apex-reference
topic: addwishlisttocartwebstoreid-wishlistid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.847Z
keywords: [addWishlistToCart, webstoreId, wishlistId, Add, wishlist, active, cart, context, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# addWishlistToCart(webstoreId, wishlistId)

> Add a wishlist to the active cart for the context
    user.

### addWishlistToCart(webstoreId, wishlistId)

Add a wishlist to the active cart for the context user.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.WishlistToCartResult addWishlistToCart(String webstoreId, String wishlistId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

wishlistId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the wishlist.

#### Return Value

Type: [ConnectApi.WishlistToCartResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_to_cart_result.htm "Result of adding a wishlist to a cart.")

#### Usage

This method respects buyer View Product entitlements and only users entitled to view product data can access it.