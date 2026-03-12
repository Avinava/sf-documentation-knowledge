---
title: "Product Cart Item Collection"
domain: chatterapi
topic: product-cart-item-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.452Z
estimatedTokens: 241
keywords: [Product, Cart, Item, Collection, Items, grouped]
---

# Product Cart Item Collection

> Items in the cart, grouped by product type.

# Product Cart Item Collection

Items in the cart, grouped by product type.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| count | Integer | Number of cart items returned on the current page. | Small, 60.0 | 60.0 |
| currentPage | Integer | Current page of cart items. The value matches the requested page number, unless the requested page number exceeds the total number of pages. In this scenario, the current page is the highest available page number. | Small, 60.0 | 60.0 |
| hasErrors | Boolean | Indicates whether at least one of the results contains an error (True) or not (False). | Small, 60.0 | 60.0 |
| products | Product Cart Item[] | Products in the cart. | Big, 60.0 | 60.0 |
| totalItemCount | Integer | Total number of unique products in the cart. | Small, 60.0 | 60.0 |
| totalNumberOfPages | Integer | Total number of pages for the given page size. | Small, 60.0 | 60.0 |

## Related Topics

- Product Cart Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_cart_item.htm)
