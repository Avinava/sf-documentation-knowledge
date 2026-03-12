---
title: "CommerceWishlist Class"
domain: apex-reference
topic: commercewishlist-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:18.560Z
estimatedTokens: 9205
namespace: ConnectApi
keywords: [CommerceWishlist, Add, item, wishlist, context, user, addItemToWishlist, webstoreId, wishlistId, wishlistItemInput, API, Version, Requires, Chatter, Usage]
---

# CommerceWishlist Class

> Add an item to a wishlist for the context user.

**Namespace:** `ConnectApi`

# CommerceWishlist Class

Get, create, update, and delete wishlists. Add wishlists to carts. Get wishlist items, add items to wishlists, and delete wishlist items.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CommerceWishlist Methods

These methods are for CommerceWishlist. All methods are static.

-   **[addItemToWishlist(webstoreId, wishlistId, wishlistItemInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_addItemToWishlist_4)**
    Add an item to a wishlist for the context user.
-   **[addItemToWishlist(webstoreId, effectiveAccountId, wishlistId, wishlistItemInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_addItemToWishlist_5)**
    Add an item to a wishlist.
-   **[addWishlistToCart(webstoreId, wishlistId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_addWishlistToCart_1)**
    Add a wishlist to the active cart for the context user.
-   **[addWishlistToCart(webstoreId, wishlistId, effectiveAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_addWishlistToCart_1a)**
    Add a wishlist to the active cart.
-   **[addWishlistToCartWithCartId(webstoreId, wishlistId, cartId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_addWishlistToCartWithCartId_3)**
    Add a wishlist to a cart.
-   **[addWishlistToCartWithCartId(webstoreId, wishlistId, cartId, effectiveAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_addWishlistToCartWithCartId_4)**
    Add a wishlist to a cart.
-   **[createWishlist(webstoreId, wishlistInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_createWishlist_3)**
    Create a wishlist for the context user.
-   **[createWishlist(webstoreId, effectiveAccountId, wishlistInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_createWishlist_4)**
    Create a wishlist.
-   **[deleteWishlist(webstoreId, wishlistId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_deleteWishlist_1)**
    Delete a wishlist for the context user.
-   **[deleteWishlist(webstoreId, effectiveAccountId, wishlistId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_deleteWishlist_2)**
    Delete a wishlist.
-   **[getWishlist(webstoreId, effectiveAccountId, wishlistId, productFields, sortItemsBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_getWishlist_7)**
    Get a wishlist with product fields sorted by items.
-   **[getWishlist(webstoreId, effectiveAccountId, wishlistId, productFields, pageSize, sortItemsBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_getWishlist_12)**
    Get a wishlist with product fields sorted by items with a specified number of items per page.
-   **[getWishlistItems(webstoreId, effectiveAccountId, wishlistId, productFields, pageParam, sortItemsBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_getWishlistItems_8)**
    Get a page of sorted wishlist items with product fields.
-   **[getWishlistItems(webstoreId, effectiveAccountId, wishlistId, productFields, pageParam, pageSize, sortItemsBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_getWishlistItems_4)**
    Get a page of specified size of sorted wishlist items with product fields.
-   **[getWishlistSummaries(webstoreId, effectiveAccountId, includeDisplayedList)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_getWishlistSummaries_3)**
    Get wishlist summaries.
-   **[getWishlistSummaries(webstoreId, effectiveAccountId, includeDisplayedList, productFields, sortItemsBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_getWishlistSummaries_9)**
    Get wishlist summaries with product fields sorted by items.
-   **[getWishlistSummaries(webstoreId, effectiveAccountId, includeDisplayedList, productFields, pageSize, sortItemsBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_getWishlistSummaries_13)**
    Get wishlist summaries with product fields sorted by items with a specified number of items per page.
-   **[removeWishlistItem(webstoreId, effectiveAccountId, wishlistId, wishlistItemId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_removeWishlistItem_1)**
    Remove an item from a wishlist.
-   **[updateWishlist(webstoreId, wishlistId, wishlistUpdateInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_updateWishlist_4)**
    Update the name of a wishlist for the context user.
-   **[updateWishlist(webstoreId, effectiveAccountId, wishlistId, wishlistUpdateInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm#apex_ConnectAPI_CommerceWishlist_updateWishlist_5)**
    Update the name of a wishlist.

### addItemToWishlist(webstoreId, wishlistId, wishlistItemInput)

Add an item to a wishlist for the context user.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.WishlistItem addItemToWishlist(String webstoreId, String wishlistId, ConnectApi.WishlistItemInput wishlistItemInput)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

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

### addWishlistToCart(webstoreId, wishlistId)

Add a wishlist to the active cart for the context user.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.WishlistToCartResult addWishlistToCart(String webstoreId, String wishlistId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

wishlistId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the wishlist.

#### Return Value

Type: [ConnectApi.WishlistToCartResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_to_cart_result.htm "Result of adding a wishlist to a cart.")

#### Usage

This method respects buyer View Product entitlements and only users entitled to view product data can access it.

### addWishlistToCart(webstoreId, wishlistId, effectiveAccountId)

Add a wishlist to the active cart.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.WishlistToCartResult addWishlistToCart(String webstoreId, String wishlistId, String effectiveAccountId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

wishlistId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the wishlist.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

#### Return Value

Type: [ConnectApi.WishlistToCartResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_to_cart_result.htm "Result of adding a wishlist to a cart.")

#### Usage

This method respects buyer View Product entitlements and only users entitled to view product data can access it.

### addWishlistToCartWithCartId(webstoreId, wishlistId, cartId)

Add a wishlist to a cart.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.WishlistToCartResult addWishlistToCartWithCartId(String webstoreId, String wishlistId, String cartId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

wishlistId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the wishlist.

cartId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the cart. If null, wishlist items are added to the active cart.

#### Return Value

Type: [ConnectApi.WishlistToCartResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_to_cart_result.htm "Result of adding a wishlist to a cart.")

#### Usage

This method respects buyer View Product entitlements and only users entitled to view product data can access it.

### addWishlistToCartWithCartId(webstoreId, wishlistId, cartId, effectiveAccountId)

Add a wishlist to a cart.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.WishlistToCartResult addWishlistToCartWithCartId(String webstoreId, String wishlistId, String cartId, String effectiveAccountId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

wishlistId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the wishlist.

cartId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the cart. If null, wishlist items are added to the active cart.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

#### Return Value

Type: [ConnectApi.WishlistToCartResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_to_cart_result.htm "Result of adding a wishlist to a cart.")

#### Usage

This method respects buyer View Product entitlements and only users entitled to view product data can access it.

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

### deleteWishlist(webstoreId, wishlistId)

Delete a wishlist for the context user.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

public static Void deleteWishlist(String webstoreId, String wishlistId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

wishlistId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the wishlist.

#### Return Value

Type: Void

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

### getWishlistItems(webstoreId, effectiveAccountId, wishlistId, productFields, pageParam, sortItemsBy)

Get a page of sorted wishlist items with product fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.WishlistItemCollection getWishlistItems(String webstoreId, String effectiveAccountId, String wishlistId, String productFields, String pageParam, ConnectApi.WishlistItemSortOrder sortItemsBy)

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

sortItemsBy

Type: [ConnectApi.WishlistItemSortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#WishlistItemSortOrderEnum)

Sort order for wishlist items. Values are:

-   CreatedDateAsc—Sorts by oldest creation date.
-   CreatedDateDesc—Sorts by most recent creation date.

The default sort order is CreatedDateDesc.

#### Return Value

Type: [ConnectApi.WishlistItemCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_item_collection.htm "Collection of wishlist items.")

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

### getWishlistSummaries(webstoreId, effectiveAccountId, includeDisplayedList)

Get wishlist summaries.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.WishlistsSummary getWishlistSummaries(String webstoreId, String effectiveAccountId, Boolean includeDisplayedList)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

includeDisplayedList

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include the displayed list (true) or not (false). If null, defaults to false.

#### Return Value

Type: [ConnectApi.WishlistsSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_summaries.htm "List of wishlist summaries and the displayed list for the context user.")

### getWishlistSummaries(webstoreId, effectiveAccountId, includeDisplayedList, productFields, sortItemsBy)

Get wishlist summaries with product fields sorted by items.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.WishlistsSummary getWishlistSummaries(String webstoreId, String effectiveAccountId, Boolean includeDisplayedList, String productFields, ConnectApi.WishlistItemSortOrder sortItemsBy)

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

sortItemsBy

Type: [ConnectApi.WishlistItemSortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#WishlistItemSortOrderEnum)

Sort order for wishlist items. Values are:

-   CreatedDateAsc—Sorts by oldest creation date.
-   CreatedDateDesc—Sorts by most recent creation date.

The default sort order is CreatedDateDesc.

If includeDisplayedList is false, sortItemsBy is ignored.

#### Return Value

Type: [ConnectApi.WishlistsSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_summaries.htm "List of wishlist summaries and the displayed list for the context user.")

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

### updateWishlist(webstoreId, effectiveAccountId, wishlistId, wishlistUpdateInput)

Update the name of a wishlist.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.WishlistSummary updateWishlist(String webstoreId, String effectiveAccountId, String wishlistId, ConnectApi.WishlistUpdateInput wishlistUpdateInput)

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

wishlistUpdateInput

Type: [ConnectApi.WishlistUpdateInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_wishlist_update.htm "Update a wishlist name.")

A ConnectApi.WishlistUpdateInput body with the wishlist name to update.

#### Return Value

Type: [ConnectApi.WishlistSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_summary.htm "Summary of a wishlist.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- addItemToWishlist(webstoreId, wishlistId, wishlistItemInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm)
- addItemToWishlist(webstoreId, effectiveAccountId, wishlistId, wishlistItemInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm)
- addWishlistToCart(webstoreId, wishlistId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm)
- addWishlistToCart(webstoreId, wishlistId, effectiveAccountId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm)
- addWishlistToCartWithCartId(webstoreId, wishlistId, cartId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm)
- addWishlistToCartWithCartId(webstoreId, wishlistId, cartId, effectiveAccountId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm)
- createWishlist(webstoreId, wishlistInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm)
- createWishlist(webstoreId, effectiveAccountId, wishlistInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm)
- deleteWishlist(webstoreId, wishlistId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceWishlist_static_methods.htm)
