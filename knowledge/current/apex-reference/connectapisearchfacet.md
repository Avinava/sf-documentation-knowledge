---
title: "ConnectApi.SearchFacet"
domain: apex-reference
topic: connectapisearchfacet
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.967Z
estimatedTokens: 312
keywords: [ConnectApi.SearchFacet, Search, facet.]
---

# ConnectApi.SearchFacet

> Search facet.

# ConnectApi.SearchFacet

Search facet.

This class is abstract and is a superclass of [ConnectApi.DistinctValueSearchFacet](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_distinct_value_search_facet.htm "Facet with distinct values in product search results.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attributeType | ConnectApi.​CommerceSearch​AttributeType | Search attribute type. Values are:CustomPricebookEntryProductAttributeProductCategoryProduct2Standard | 52.0 |
| displayName | String | Display name of the facet. | 52.0 |
| displayRank | Integer | Display rank of the facet. Valid values are from 1 through 50. | 52.0 |
| displayType | ConnectApi.​CommerceSearchFacet​DisplayType | Display type of the facet. Values are:CategoryTreeDatePickerMultiSelectSingleSelect | 52.0 |
| facetType | ConnectApi.​CommerceSearch​FacetType | Search facet type. Value is:DistinctValueRange | 52.0 |
| nameOrId | String | Developer name of the attribute. In version 52.0 and later, the ID of the attribute isn’t supported. | 52.0 |

#### See Also

-   [ConnectApi.ProductSearchResults](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_results.htm "Product search results.")

## Related Topics

- ConnectApi.DistinctValueSearchFacet (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_distinct_value_search_facet.htm)
- ConnectApi.​CommerceSearch​AttributeType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.​CommerceSearchFacet​DisplayType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​CommerceSearch​FacetType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.ProductSearchResults (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_search_results.htm)
