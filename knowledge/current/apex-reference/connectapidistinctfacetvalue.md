---
title: "ConnectApi.DistinctFacetValue"
domain: apex-reference
topic: connectapidistinctfacetvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.594Z
keywords: [ConnectApi.DistinctFacetValue, See]
---

# ConnectApi.DistinctFacetValue

# ConnectApi.DistinctFacetValue

Distinct facet value.

This class is a subclass of [ConnectApi.FacetValue](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_facet_value.htm "Facet value.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| displayMetadata | ConnectApi.DistinctFacetValue​DisplayMetadata​Representation | Map of metadata required for rendering the facet value. | 64.0 |
| displayName | String | Display name of the facet value. | 52.0 |
| nameOrId | String | Developer name of the attribute. | 52.0 |
| productCount | Long | Number of products in the search result that match the facet value. | 52.0 |

#### See Also

-   [ConnectApi.DistinctValueSearchFacet](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_distinct_value_search_facet.htm "Facet with distinct values in product search results.")