---
title: "ConnectApi.CommerceSearchIndex"
domain: apex-reference
topic: connectapicommercesearchindex
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.722Z
estimatedTokens: 317
keywords: [ConnectApi.CommerceSearchIndex, Index, information.]
---

# ConnectApi.CommerceSearchIndex

> Index information.

# ConnectApi.CommerceSearchIndex

Index information.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| completionDate | Datetime | Completion date and time of the index. | 52.0 |
| createdDate | Datetime | Creation date of the index. | 52.0 |
| creationType | ConnectApi.​CommerceSearch​IndexCreationType | Creation type of the index. Values are:ManualScheduled | 52.0 |
| id | String | ID of the index. | 52.0 |
| indexBuildType | ConnectApi.​CommerceSearch​IndexBuildType | Build type of the index. Values are:FullIncremental | 57.0 |
| indexStatus | ConnectApi.​CommerceSearch​IndexStatus | Status of the index. Values are:CompletedFailedInProgress | 52.0 |
| indexUsage | ConnectApi.​CommerceSearch​IndexUsage | Usage of the index. Values are:LiveOutOfUse | 52.0 |
| isIncrementable | Boolean | Specifies whether the index allows incremental indexing (true) or not (false). | 57.0 |
| lastCatalogSnapshotTime | Datetime | Catalog snapshot time of the index. | 57.0 |
| message | String | Detailed message for the index status. | 52.0 |

#### See Also

-   [ConnectApi.CommerceSearchIndexCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_search_index_collection_output.htm "Collection of indexes.")

## Related Topics

- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​CommerceSearch​IndexCreationType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​CommerceSearch​IndexBuildType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​CommerceSearch​IndexStatus (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​CommerceSearch​IndexUsage (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.CommerceSearchIndexCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_search_index_collection_output.htm)
