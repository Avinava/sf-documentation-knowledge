---
title: "deleteWishlist(webstoreId, effectiveAccountId,
      wishlistId)"
domain: apex-reference
topic: deletewishlistwebstoreid-effectiveaccountid-wishlistid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.847Z
keywords: [deleteWishlist, webstoreId, effectiveAccountId, wishlistId, Delete, wishlist., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# deleteWishlist(webstoreId, effectiveAccountId,
      wishlistId)

> Delete a wishlist.

### deleteWishlist(webstoreId, effectiveAccountId, wishlistId)

Delete a wishlist.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static Void deleteWishlist(String webstoreId, String effectiveAccountId, String wishlistId)

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

#### Return Value

Type: Void