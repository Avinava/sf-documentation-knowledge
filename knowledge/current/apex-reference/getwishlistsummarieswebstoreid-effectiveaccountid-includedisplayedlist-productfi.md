---
title: "getWishlistSummaries(webstoreId, effectiveAccountId,
      includeDisplayedList, productFields, pageSize, sortItemsBy)"
domain: apex-reference
topic: getwishlistsummarieswebstoreid-effectiveaccountid-includedisplayedlist-productfi
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.847Z
keywords: [getWishlistSummaries, webstoreId, effectiveAccountId, includeDisplayedList, productFields, pageSize, sortItemsBy, Get, wishlist, summaries, product, fields, sorted, items, specified, number, per, page., API, Version]
---

# getWishlistSummaries(webstoreId, effectiveAccountId,
      includeDisplayedList, productFields, pageSize, sortItemsBy)

> Get wishlist summaries with product fields sorted by items with a
      specified number of items per page.

### getWishlistSummaries(webstoreId, effectiveAccountId, includeDisplayedList, productFields, pageSize, sortItemsBy)

Get wishlist summaries with product fields sorted by items with a specified number of items per page.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.WishlistsSummary getWishlistSummaries(String webstoreId, String effectiveAccountId, Boolean includeDisplayedList, Integer pageSize, String productFields, pageSize, ConnectApi.WishlistItemSortOrder sortItemsBy)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

includeDisplayedList

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include the displayed list (true) or not (false).

productFields

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of custom product fields. Fields aren’t case-sensitive. For example, ProductCode and productcode return the same results.

If includeDisplayedList is false, productFields is ignored.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortItemsBy

Type: [ConnectApi.WishlistItemSortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#WishlistItemSortOrderEnum)

Sort order for wishlist items. Values are:

-   CreatedDateAsc—Sorts by oldest creation date.
-   CreatedDateDesc—Sorts by most recent creation date.

The default sort order is CreatedDateDesc.

If includeDisplayedList is false, sortItemsBy is ignored.

#### Return Value

Type: [ConnectApi.WishlistsSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_summaries.htm "List of wishlist summaries and the displayed list for the context user.")