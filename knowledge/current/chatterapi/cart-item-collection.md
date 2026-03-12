---
title: "Cart Item Collection"
domain: chatterapi
topic: cart-item-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.538Z
estimatedTokens: 487
keywords: [Cart, Item, Collection, items]
---

# Cart Item Collection

> A collection of items in a cart.

# Cart Item Collection

A collection of items in a cart.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| approaching​Discounts | String[] | List of approaching discounts for the cart items. | Small, 64.0 | 64.0 |
| cartCoupons | Cart Coupon Collection | Collection of coupons in the cart. | Small, 59.0 | 59.0 |
| cartItems | Cart Item Result[] | Collection of cart item results. | Big, 49.0 | 49.0 |
| cartPromotions | Cart Promotion Collection | Collection of promotions in the cart. | Small, 59.0 | 59.0 |
| cartSummary | Cart Summary | Summary of the cart. | Small, 49.0 | 49.0 |
| currentPage | Integer | Current page of cart items. The value matches the requested page number, unless the requested page number exceeds the total number of pages. In this scenario, the current page is the highest available page number. | Small, 60.0 | 60.0 |
| currentPageToken | String | Token identifying the current page. | Small, 49.0 | 49.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | Small, 49.0 | 49.0 |
| hasErrors | Boolean | Specifies whether at least one of the results contains an error. | Small, 49.0 | 49.0 |
| nextPageToken | String | Token identifying the next page, or null if there isn’t a next page. | Small, 49.0 | 49.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | Small, 49.0 | 49.0 |
| previousPageToken | String | Token identifying the previous page, or null if there isn’t a previous page. | Small, 49.0 | 49.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | Small, 49.0 | 49.0 |
| totalItemCount | Integer | Total number of unique products in the cart. | Small, 60.0 | 60.0 |
| totalNumberOfPages | Integer | Total number of pages for the given page size. | Small, 60.0 | 60.0 |

## Related Topics

- Cart Coupon Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_coupon_collection.htm)
- Cart Item Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_result.htm)
- Cart Promotion Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_promotion_collection.htm)
- Cart Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_summary.htm)
