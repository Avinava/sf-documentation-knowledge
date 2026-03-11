---
title: "addItemToWishlist(webstoreId, effectiveAccountId, wishlistId,
      wishlistItemInput)"
domain: apex-reference
topic: additemtowishlistwebstoreid-effectiveaccountid-wishlistid-wishlistiteminput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.847Z
keywords: [addItemToWishlist, webstoreId, effectiveAccountId, wishlistId, wishlistItemInput, Add, item, wishlist., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# addItemToWishlist(webstoreId, effectiveAccountId, wishlistId,
      wishlistItemInput)

> Add an item to a wishlist.

### addItemToWishlist(webstoreId, effectiveAccountId, wishlistId, wishlistItemInput)

Add an item to a wishlist.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.WishlistItem addItemToWishlist(String webstoreId, String effectiveAccountId, String wishlistId, ConnectApi.WishlistItemInput wishlistItemInput)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

wishlistId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the wishlist.

wishlistItemInput

Type: [ConnectApi.WishlistItemInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_wishlist_item.htm "Item to update or add to a wishlist.")

A ConnectApi.WishlistItemInput body with the item to add to the wishlist.

#### Return Value

Type: [ConnectApi.WishlistItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_item.htm "Item in a wishlist.")

#### Usage

This method respects buyer View Product entitlements and only users entitled to view product data can access it.