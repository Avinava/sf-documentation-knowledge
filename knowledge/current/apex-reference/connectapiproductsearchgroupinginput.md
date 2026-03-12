---
title: "ConnectApi.ProductSearchGroupingInput"
domain: apex-reference
topic: connectapiproductsearchgroupinginput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.572Z
estimatedTokens: 197
keywords: [ConnectApi.ProductSearchGroupingInput, Grouping, product, search, results]
---

# ConnectApi.ProductSearchGroupingInput

> Grouping information for product search results.

# ConnectApi.ProductSearchGroupingInput

Grouping information for product search results.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| groupingOption | ConnectApi.​CommerceSearch​GroupingOption | Grouping option for search results. Values are:BestMatch—Search results are grouped by the best-match product of the variation group.NoGrouping—Search results aren’t grouped.VariationParent—Search results are grouped by the variation parent. | Required | 52.0 |
| topProductType | ConnectApi.​CommerceSearch​TopProductType | Type of the top product to return for each product group in search results. Value is:VariationParentIf NoGrouping is specified for groupingOption, topProductType is ignored. | Optional | 52.0—62.0 |

## Related Topics

- ConnectApi.​CommerceSearch​GroupingOption (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​CommerceSearch​TopProductType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
