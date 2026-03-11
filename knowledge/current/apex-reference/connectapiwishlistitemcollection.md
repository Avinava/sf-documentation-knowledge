---
title: "ConnectApi.WishlistItemCollection"
domain: apex-reference
topic: connectapiwishlistitemcollection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.225Z
keywords: [ConnectApi.WishlistItemCollection, See]
---

# ConnectApi.WishlistItemCollection

# ConnectApi.WishlistItemCollection

Collection of wishlist items.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the product. | 49.0 |
| currentPageToken | String | Token identifying the current page. | 49.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | 49.0 |
| hasErrors | Boolean | Specifies whether at least one of the results contains an error (true) or not (false). | 49.0 |
| items | List<ConnectApi.​WishlistItem> | Collection of wishlist items. | 49.0 |
| nextPageToken | String | Token identifying the next page, or null if there isn’t a next page. | 49.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | 49.0 |
| previousPageToken | String | Token identifying the previous page, or null if there isn’t a previous page. | 49.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | 49.0 |

#### See Also

-   [ConnectApi.Wishlist](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist.htm "Wishlist, including summary and items.")