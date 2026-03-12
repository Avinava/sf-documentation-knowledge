---
title: "Product Search Grouping Input"
domain: chatterapi
topic: product-search-grouping-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.530Z
estimatedTokens: 228
keywords: [Product, Search, Grouping, Input, results]
---

# Product Search Grouping Input

> Grouping information for product search results.

# Product Search Grouping Input

Grouping information for product search results.

Root XML tag

<grouping>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| groupingOption | String | Grouping option for search results. Values are:BestMatch—Search results are grouped by the best-match product of the variation group.NoGrouping—Search results aren’t grouped.VariationParent—Search results are grouped by the variation parent. | Required | 51.0 |
| topProductType | String | Type of the top product to return for each product group in search results. Value is:VariationParentIf NoGrouping is specified for groupingOption, topProductType is ignored. | Optional | 51.0—62.0 |

#### See Also

-   [Product Search Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_product_search_input.htm "Product search.")

## Code Examples

```
{
  "groupingOption": "VariationParent"
}
```

## Related Topics

- Product Search Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_product_search_input.htm)
