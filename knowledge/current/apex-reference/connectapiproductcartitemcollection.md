---
title: "ConnectApi.ProductCartItemCollection"
domain: apex-reference
topic: connectapiproductcartitemcollection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.662Z
keywords: [ConnectApi.ProductCartItemCollection]
---

# ConnectApi.ProductCartItemCollection

# ConnectApi.ProductCartItemCollection

Items in the cart, grouped by product type.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| count | Integer | Number of cart items returned on the current page | 60.0 |
| currentPage | Integer | Current page of cart items. The value matches the requested page number, unless the requested page number exceeds the total number of pages. In this scenario, the current page is the highest available page number. | 60.0 |
| hasErrors | Boolean | Indicates whether at least one of the results contains an error (True) or not (False). | 60.0 |
| products | List<ConnectApi.​ProductCartItem> | Products in the cart. | 60.0 |
| totalItemCount | Integer | Total number of unique products in the cart. | 60.0 |
| totalNumberOfPages | Integer | Total number of pages for the given page size. | 60.0 |