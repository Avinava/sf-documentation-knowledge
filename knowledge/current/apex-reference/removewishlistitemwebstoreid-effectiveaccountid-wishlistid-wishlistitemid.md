---
title: "removeWishlistItem(webstoreId, effectiveAccountId, wishlistId,
      wishlistItemId)"
domain: apex-reference
topic: removewishlistitemwebstoreid-effectiveaccountid-wishlistid-wishlistitemid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.847Z
keywords: [removeWishlistItem, webstoreId, effectiveAccountId, wishlistId, wishlistItemId, Remove, item, wishlist., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# removeWishlistItem(webstoreId, effectiveAccountId, wishlistId,
      wishlistItemId)

> Remove an item from a wishlist.

### removeWishlistItem(webstoreId, effectiveAccountId, wishlistId, wishlistItemId)

Remove an item from a wishlist.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

public static Void removeWishlistItem(String webstoreId, String effectiveAccountId, String wishlistId, String wishlistItemId)

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

wishlistItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the wishlist item to remove.

#### Return Value

Type: Void