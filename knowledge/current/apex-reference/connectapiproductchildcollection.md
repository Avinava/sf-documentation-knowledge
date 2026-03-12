---
title: "ConnectApi.ProductChildCollection"
domain: apex-reference
topic: connectapiproductchildcollection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.566Z
estimatedTokens: 346
keywords: [ConnectApi.ProductChildCollection, Collection, child, products, parent, product]
---

# ConnectApi.ProductChildCollection

> Collection of child products related to a parent
    product.

# ConnectApi.ProductChildCollection

Collection of child products related to a parent product.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| count | Integer | Number of child products returned on this page. | 57.0 |
| currentPageToken | String | Current page token, if any. | 57.0 |
| currentPageUrl | String | URL of the current page in the response. | 57.0 |
| items | List<ConnectApi.​ProductChild> | List of child products related to the parent product. The child products are sorted by their configured sequence values, in ascending order, with null values sorted last. If there are no configured sequence values, the child products are sorted by createdDate, in ascending order. | 57.0 |
| nextPageToken | String | Token for the next page, if any. A value is included in the response only if a value is returned for nextPageUrl. | 57.0 |
| nextPageUrl | String | URL of the next page, if any. | 57.0 |
| previousPageToken | String | Token for the previous page, if any. A value is included in the response only if a value is returned for previousPageUrl. | 57.0 |
| previousPageUrl | String | URL of the previous page, if any. | 57.0 |
| productClass | ConnectApi.​ProductClass | Class of product. Values are:BundleSetSimpleVariationVariationParent | 62.0 |
| total | Integer | Total number of child products in the collection. | 57.0 |

## Related Topics

- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ProductChild (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_child.htm)
- ConnectApi.​ProductClass (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
