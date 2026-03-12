---
title: "Search Product Setting Input"
domain: chatterapi
topic: search-product-setting-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.788Z
estimatedTokens: 166
keywords: [Search, Product, Setting, Input]
---

# Search Product Setting Input

> Product search setting.

# Search Product Setting Input

Product search setting.

Root XML tag

<searchProductSetting>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the product.NoteProducts of class VariationParent can’t be updated. | Required | 49.0 |
| searchable | Boolean | Specifies whether the product is searchable (true) or not (false). | Optional | 49.0 |

#### See Also

-   [Search Product Setting Collection Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_search_product_setting_collection_input.htm "Collection of product search settings.")

## Code Examples

```
{
   "id": "01tRM000000Osl0YAC",
   "searchable": true
}
```

## Related Topics

- Search Product Setting Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_search_product_setting_collection_input.htm)
