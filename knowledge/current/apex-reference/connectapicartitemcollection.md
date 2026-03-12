---
title: "ConnectApi.CartItemCollection"
domain: apex-reference
topic: connectapicartitemcollection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.339Z
estimatedTokens: 442
keywords: [ConnectApi.CartItemCollection, collection, items, cart.]
---

# ConnectApi.CartItemCollection

> A collection of items in a cart.

# ConnectApi.CartItemCollection

A collection of items in a cart.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| approaching​Discounts | List<String> | List of approaching discounts for the cart items. | 64.0 |
| cartCoupons | ConnectApi.​CartCouponCollection | Collection of coupons in the cart. | 59.0 |
| cartItems | List<ConnectApi.​CartItemResult> | Collection of cart item results. | 49.0 |
| cartPromotions | ConnectApi.​CartPromotionCollection | Collection of promotions in the cart. | 59.0 |
| cartSummary | ConnectApi.​CartSummary | Summary of the cart. | 49.0 |
| currentPage | Integer | Current page of cart items. The value matches the requested page number, unless the requested page number exceeds the total number of pages. In this scenario, the current page is the highest available page number. | 60.0 |
| currentPageToken | String | Token identifying the current page. | 49.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | 49.0 |
| hasErrors | Boolean | Specifies whether at least one of the results contains an error. | 49.0 |
| nextPageToken | String | Token identifying the next page, or null if there isn’t a next page. | 49.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | 49.0 |
| previousPageToken | String | Token identifying the previous page, or null if there isn’t a previous page. | 49.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | 49.0 |
| totalItemCount | Integer | Total number of unique products in the cart. | 60.0 |
| totalNumberOfPages | Integer | Total number of pages for the given page size. | 60.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​CartCouponCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_coupon_collection.htm)
- ConnectApi.​CartItemResult (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item_result.htm)
- ConnectApi.​CartPromotionCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_promotion_collection.htm)
- ConnectApi.​CartSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_summary.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
