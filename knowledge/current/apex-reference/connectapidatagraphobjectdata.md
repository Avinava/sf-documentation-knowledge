---
title: "ConnectApi.DataGraphObjectData"
domain: apex-reference
topic: connectapidatagraphobjectdata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.036Z
estimatedTokens: 332
keywords: [ConnectApi.DataGraphObjectData, metadata, data, graph]
---

# ConnectApi.DataGraphObjectData

> Represents object metadata for a data graph.

# ConnectApi.DataGraphObjectData

Represents object metadata for a data graph.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| dataGraphSourceDevName | String | Developer name of the source data graph for the data object. | 61.0 |
| developerName | String | Developer name of the data object for the data graph. | 59.0 |
| fields | List<ConnectApi.DataGraphField> | List of fields for the data object of the data graph. | 59.0 |
| filterCriteria | String | Filter criteria for the data object of the data graph. | 59.0 |
| memberDmoName | String | Name of the member Data Model Object (DMO) for the data graph. | 59.0 |
| paths | List<ConnectApi.DataGraphRelationship> | List of data path relationships for the object data of the data graph. | 59.0 |
| recencyCriteria | List<ConnectApi.RecencyCriteria> | List of recency criteria for the object data of the data graph. | 59.0 |
| relatedObjects | List<ConnectApi.DataGraphObjectData> | Recursive list of related data objects for the data graph. | 59.0 |
| type | DataGraphObjectTypeEnum | Data type of the data object for the data graph.AdgAdgActivationAudienceAdgExternalBridgeCalculatedCalculatedRealTimeCalculatedStreamingCuratedCustomDerivedMlPredictionObjectTypeUnspecifiedPackageSegmentMembershipStandardSystemTransform | 59.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.DataGraphField (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_data_graph_field.htm)
- ConnectApi.DataGraphRelationship (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_data_graph_relationship.htm)
- ConnectApi.RecencyCriteria (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recency_criteria.htm)
- DataGraphObjectTypeEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
