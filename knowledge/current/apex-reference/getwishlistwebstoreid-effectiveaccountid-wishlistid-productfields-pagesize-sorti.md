---
title: "getWishlist(webstoreId, effectiveAccountId, wishlistId,
      productFields, pageSize, sortItemsBy)"
domain: apex-reference
topic: getwishlistwebstoreid-effectiveaccountid-wishlistid-productfields-pagesize-sorti
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.847Z
keywords: [getWishlist, webstoreId, effectiveAccountId, wishlistId, productFields, pageSize, sortItemsBy, Get, wishlist, product, fields, sorted, items, specified, number, per, page., API, Version, Requires]
---

# getWishlist(webstoreId, effectiveAccountId, wishlistId,
      productFields, pageSize, sortItemsBy)

> Get a wishlist with product fields sorted by items with a specified
      number of items per page.

### getWishlist(webstoreId, effectiveAccountId, wishlistId, productFields, pageSize, sortItemsBy)

Get a wishlist with product fields sorted by items with a specified number of items per page.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Wishlist getWishlist(String webstoreId, String effectiveAccountId, String wishlistId, String productFields, Integer pageSize, ConnectApi.WishlistItemSortOrder sortItemsBy)

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

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortItemsBy

Type: [ConnectApi.WishlistItemSortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#WishlistItemSortOrderEnum)

Sort order for wishlist items. Values are:

-   CreatedDateAsc—Sorts by oldest creation date.
-   CreatedDateDesc—Sorts by most recent creation date.

The default sort order is CreatedDateDesc.

#### Return Value

Type: [ConnectApi.Wishlist](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist.htm "Wishlist, including summary and items.")