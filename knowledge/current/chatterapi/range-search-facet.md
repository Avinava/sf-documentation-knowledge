---
title: "Range Search Facet"
domain: chatterapi
topic: range-search-facet
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.758Z
estimatedTokens: 278
keywords: [Range, Search, Facet, minimum, maximum, product, results]
---

# Range Search Facet

> Range facet with minimum and maximum values in product search results.

# Range Search Facet

Range facet with minimum and maximum values in product search results.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributeType | String | Type of search attribute for the refinement. Values are:CustomStandardPricebookEntry | Small, 64.0 | 64.0 |
| displayMetadata | Range Facet Display Metadata | Metadata required for rendering the range facet. | Small, 64.0 | 64.0 |
| displayName | String | Display name of the facet. | Small, 64.0 | 64.0 |
| displayRank | String | Display rank of the facet. Valid values are from 1 through 50. | Small, 64.0 | 64.0 |
| displayType | String | Display type of the facet. Value is:Range | Small, 64.0 | 64.0 |
| facetType | String | Type of the facet. Value is:Range | Small, 64.0 | 64.0 |
| max | String | Maximum value of the facet found in the search result. | Small, 64.0 | 64.0 |
| min | String | Minimum value of the facet found in the search result. | Small, 64.0 | 64.0 |
| nameOrId | String | Developer name of the attribute for the refinement. | Small, 64.0 | 64.0 |

## Related Topics

- Range Facet Display Metadata (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_range_facet_display_metadata.htm)
