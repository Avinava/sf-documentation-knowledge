---
title: "getWishlist(webstoreId, effectiveAccountId, wishlistId,
      productFields, sortItemsBy)"
domain: apex-reference
topic: getwishlistwebstoreid-effectiveaccountid-wishlistid-productfields-sortitemsby
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.847Z
keywords: [getWishlist, webstoreId, effectiveAccountId, wishlistId, productFields, sortItemsBy, Get, wishlist, product, fields, sorted, items., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getWishlist(webstoreId, effectiveAccountId, wishlistId,
      productFields, sortItemsBy)

> Get a wishlist with product fields sorted by items.

### getWishlist(webstoreId, effectiveAccountId, wishlistId, productFields, sortItemsBy)

Get a wishlist with product fields sorted by items.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Wishlist getWishlist(String webstoreId, String effectiveAccountId, String wishlistId, String productFields, ConnectApi.WishlistItemSortOrder sortItemsBy)

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

productFields

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of custom product fields. Fields aren’t case-sensitive. For example, ProductCode and productcode return the same results.

sortItemsBy

Type: [ConnectApi.WishlistItemSortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#WishlistItemSortOrderEnum)

Sort order for wishlist items. Values are:

-   CreatedDateAsc—Sorts by oldest creation date.
-   CreatedDateDesc—Sorts by most recent creation date.

The default sort order is CreatedDateDesc.

#### Return Value

Type: [ConnectApi.Wishlist](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist.htm "Wishlist, including summary and items.")