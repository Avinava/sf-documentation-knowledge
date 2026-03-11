---
title: "ConnectApi.ObjectMetadata"
domain: apex-reference
topic: connectapiobjectmetadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.438Z
keywords: [ConnectApi.ObjectMetadata, See]
---

# ConnectApi.ObjectMetadata

# ConnectApi.ObjectMetadata

Search metadata related to the object.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| dataCategories | Map<String, ConnectApi.​DataCategoryMetadata> | Metadata on each data category for the object. | 63.0 |
| fields | Map<String, ConnectApi.​FieldMetadata> | Metadata on each field of the object. | 63.0 |
| label | String | Name of the object. | 63.0 |
| labelPlural | String | Plural name of the object. | 63.0 |
| objectApiName | String | API name of the object | 63.0 |
| themeInfo | ConnectApi.​ThemeInfo | Theme related to the object. | 63.0 |

#### See Also

-   [ConnectApi.SearchResultGroups](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_result.htm "Results of searching objects using keywords.")
    
-   [ConnectApi.SearchAnswer](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_answe.htm "Results of searching objects using a natural language query.")
    
-   [ConnectApi.ScopedSearchResults](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scoped_search_result.htm "Keyword search results for an object.")