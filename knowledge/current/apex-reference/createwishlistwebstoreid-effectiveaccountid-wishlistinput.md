---
title: "createWishlist(webstoreId, effectiveAccountId,
      wishlistInput)"
domain: apex-reference
topic: createwishlistwebstoreid-effectiveaccountid-wishlistinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.847Z
keywords: [createWishlist, webstoreId, effectiveAccountId, wishlistInput, Create, wishlist., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# createWishlist(webstoreId, effectiveAccountId,
      wishlistInput)

> Create a wishlist.

### createWishlist(webstoreId, effectiveAccountId, wishlistInput)

Create a wishlist.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Wishlist createWishlist(String webstoreId, String effectiveAccountId, ConnectApi.WishlistInput wishlistInput)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

wishlistInput

Type: [ConnectApi.WishlistInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_wishlist.htm "Create a wishlist.")

A ConnectApi.WishlistInput body that includes the wishlist name and items.

#### Return Value

Type: [ConnectApi.Wishlist](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist.htm "Wishlist, including summary and items.")