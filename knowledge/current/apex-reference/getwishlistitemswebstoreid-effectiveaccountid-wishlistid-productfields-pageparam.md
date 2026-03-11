---
title: "getWishlistItems(webstoreId, effectiveAccountId, wishlistId,
      productFields, pageParam, pageSize, sortItemsBy)"
domain: apex-reference
topic: getwishlistitemswebstoreid-effectiveaccountid-wishlistid-productfields-pageparam
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.847Z
keywords: [getWishlistItems, webstoreId, effectiveAccountId, wishlistId, productFields, pageParam, pageSize, sortItemsBy, Get, page, specified, size, sorted, wishlist, items, product, fields., API, Version, Requires]
---

# getWishlistItems(webstoreId, effectiveAccountId, wishlistId,
      productFields, pageParam, pageSize, sortItemsBy)

> Get a page of specified size of sorted wishlist items with product
      fields.

### getWishlistItems(webstoreId, effectiveAccountId, wishlistId, productFields, pageParam, pageSize, sortItemsBy)

Get a page of specified size of sorted wishlist items with product fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.WishlistItemCollection getWishlistItems(String webstoreId, String effectiveAccountId, String wishlistId, String productFields, String pageParam, Integer pageSize, ConnectApi.WishlistItemSortOrder sortItemsBy)

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

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 200. If you pass in null, the default size is 25.

sortItemsBy

Type: [ConnectApi.WishlistItemSortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#WishlistItemSortOrderEnum)

Sort order for wishlist items. Values are:

-   CreatedDateAsc—Sorts by oldest creation date.
-   CreatedDateDesc—Sorts by most recent creation date.

The default sort order is CreatedDateDesc.

#### Return Value

Type: [ConnectApi.WishlistItemCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_item_collection.htm "Collection of wishlist items.")