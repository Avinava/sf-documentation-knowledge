---
title: "getCartItems(webstoreId, effectiveAccountId, activeCartOrId, productFields, pageParam, pageSize, sortParam, currencyIsoCode, includePromotions, includeCoupons, pageNumber)"
domain: apex-reference
topic: getcartitemswebstoreid-effectiveaccountid-activecartorid-productfields-pageparam
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.705Z
keywords: [getCartItems, webstoreId, effectiveAccountId, activeCartOrId, productFields, pageParam, pageSize, sortParam, currencyIsoCode, includePromotions, includeCoupons, pageNumber, Get, specific, sorted, page, items, cart, including, coupons]
---

# getCartItems(webstoreId, effectiveAccountId, activeCartOrId, productFields, pageParam, pageSize, sortParam, currencyIsoCode, includePromotions, includeCoupons, pageNumber)

> Get a specific, sorted page of items in a cart, including coupons and
    promotions.

### getCartItems(webstoreId, effectiveAccountId, activeCartOrId, productFields, pageParam, pageSize, sortParam, currencyIsoCode, includePromotions, includeCoupons, pageNumber)

Get a specific, sorted page of items in a cart, including coupons and promotions.

#### API Version

60.0

#### Available to Guest Users

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CartItemCollection getCartItems(String webstoreId, String effectiveAccountId, String activeCartOrId, String productFields, String pageParam, Integer pageSize, ConnectApi.CartItemSortOrder sortParam, String currencyIsoCode, Boolean includePromotions, Boolean includeCoupons, Integer pageNumber)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If null, the default value is determined from context.

activeCartOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the cart, active, or current. The current value is available in version 50.0 and later and indicates a cart with a status that isn’t Closed or PendingDelete. Use active only for B2B Aura stores; all other stores must use current.

productFields

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of up to 15 product fields. Results include fields that you have access to. Some product fields (such as productName and sku) are returned even when not included in the productFields parameter.

pageParam

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

Description

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortParam

Type: [ConnectApi.CartItemSortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#cartItemSortOrderEnum)

Sort order for items in a cart. Values are:

-   CreatedDateAsc—Sorts by oldest creation date.
-   CreatedDateDesc—Sorts by most recent creation date.
-   NameAsc—Sorts by name in ascending alphabetical order (A–Z).
-   NameDesc—Sorts by name in descending alphabetical order (Z–A).
-   SalesPriceAsc—Sorts from lowest to highest negotiated price.
-   SalesPriceDesc—Sorts from highest to lowest negotiated price.

If null, the default is CreatedDateDesc.

includePromotions

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether to include coupons (True) or not (False)

includeCoupons

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether to include promotions (True) or not (False).

pageNumber

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the requested page number.

#### Return Value

Type: [ConnectApi.CartItemCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item_collection.htm "A collection of items in a cart.")