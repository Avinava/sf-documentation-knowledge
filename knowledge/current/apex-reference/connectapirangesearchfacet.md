---
title: "ConnectApi.RangeSearchFacet"
domain: apex-reference
topic: connectapirangesearchfacet
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.784Z
estimatedTokens: 246
keywords: [ConnectApi.RangeSearchFacet, Range, facet, minimum, maximum, product, search, results]
---

# ConnectApi.RangeSearchFacet

> Range facet with minimum and maximum values in product search results.

# ConnectApi.RangeSearchFacet

Range facet with minimum and maximum values in product search results.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attributeType | String | Type of search attribute for the refinement. Values are:CustomStandardPricebookEntry | 64.0 |
| displayMetadata | ConnectApi.RangeFacetDisplayMetadataRepresentation | Metadata required for rendering the range facet. | 64.0 |
| displayName | String | Display name of the facet. | 64.0 |
| displayRank | String | Display rank of the facet. Valid values are from 1 through 50. | 64.0 |
| displayType | String | Display type of the facet. Value is:Range | 64.0 |
| facetType | String | Type of the facet. Value is:Range | 64.0 |
| max | String | Maximum value of the facet found in the search result. | 64.0 |
| min | String | Minimum value of the facet found in the search result. | 64.0 |
| nameOrId | String | Developer name of the attribute for the refinement. | 64.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.RangeFacetDisplayMetadataRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_range_facet_display_metadata.htm)
