---
title: "createWishlist(webstoreId, wishlistInput)"
domain: apex-reference
topic: createwishlistwebstoreid-wishlistinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.847Z
keywords: [createWishlist, webstoreId, wishlistInput, Create, wishlist, context, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# createWishlist(webstoreId, wishlistInput)

> Create a wishlist for the context user.

### createWishlist(webstoreId, wishlistInput)

Create a wishlist for the context user.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Wishlist createWishlist(String webstoreId, ConnectApi.WishlistInput wishlistInput)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

wishlistInput

Type: [ConnectApi.WishlistInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_wishlist.htm "Create a wishlist.")

A ConnectApi.WishlistInput body that includes the wishlist name and items.

#### Return Value

Type: [ConnectApi.Wishlist](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist.htm "Wishlist, including summary and items.")