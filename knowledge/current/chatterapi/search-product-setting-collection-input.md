---
title: "Search Product Setting Collection Input"
domain: chatterapi
topic: search-product-setting-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.783Z
estimatedTokens: 111
keywords: [Search, Product, Setting, Collection, Input, settings]
---

# Search Product Setting Collection Input

> Collection of product search settings.

# Search Product Setting Collection Input

Collection of product search settings.

Root XML tag

<searchProductSettings>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| searchProduct​Settings | Search Product Setting Input[] | Up to 200 product search settings to update.NoteProducts of class VariationParent can’t be updated. | Required | 49.0 |

## Code Examples

```
{
"searchProductSettings": [
   {
      "id": "productId1",
      "searchable": true
   },
   {
      "id": “productId2”,
      "searchable": false
   }
]
}
```

## Related Topics

- Search Product Setting Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_search_product_setting_input.htm)
