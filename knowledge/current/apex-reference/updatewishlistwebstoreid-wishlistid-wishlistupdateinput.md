---
title: "updateWishlist(webstoreId, wishlistId,
      wishlistUpdateInput)"
domain: apex-reference
topic: updatewishlistwebstoreid-wishlistid-wishlistupdateinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.847Z
keywords: [updateWishlist, webstoreId, wishlistId, wishlistUpdateInput, Update, name, wishlist, context, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateWishlist(webstoreId, wishlistId,
      wishlistUpdateInput)

> Update the name of a wishlist for the context user.

### updateWishlist(webstoreId, wishlistId, wishlistUpdateInput)

Update the name of a wishlist for the context user.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.WishlistSummary updateWishlist(String webstoreId, String wishlistId, ConnectApi.WishlistUpdateInput wishlistUpdateInput)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

wishlistId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the wishlist.

wishlistUpdateInput

Type: [ConnectApi.WishlistUpdateInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_wishlist_update.htm "Update a wishlist name.")

A ConnectApi.WishlistUpdateInput body with the wishlist name to update.

#### Return Value

Type: [ConnectApi.WishlistSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_summary.htm "Summary of a wishlist.")