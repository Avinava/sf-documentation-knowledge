---
title: "ConnectApi.CdpQueryMetadataEntitiesOutput"
domain: apex-reference
topic: connectapicdpquerymetadataentitiesoutput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-05-10T00:39:37.056Z
estimatedTokens: 372
keywords: [metadata, entities]
---

> Represents a list of metadata entities.

# ConnectApi.CdpQueryMetadataEntitiesOutput

Represents a list of metadata entities.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| done | Boolean | Indicates whether all metadata entities have been retrieved (true) or not (false). | 66.0 |
| metadata | List<ConnectApi.​QueryMetadataEntityOutput> | List of metadata entities. | 66.0 |
| nextBatchId | String | ID for the next batch of metadata entities. Present only when done is false. When done is true, this field is omitted from the response. | 66.0 |

#### See Also

-   [getMetadataEntities()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getMetadataEntities_1 "Get a list of metadata entities and retrieve only essential fields to optimize performance at scale.")

-   [getMetadataEntities(entityCategory, entityType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getMetadataEntities_2 "Get a list of metadata entities and retrieve only essential fields to optimize performance at scale. Specify the entity category and type.")

-   [getMetadataEntities(entityCategory, entityType, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getMetadataEntities_3 "Get a list of metadata entities and retrieve only essential fields to optimize performance at scale. Specify the entity category, type, and data space.")

## Related Topics

- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​QueryMetadataEntityOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_metadata_entity_output.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- getMetadataEntities() (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
- getMetadataEntities(entityCategory, entityType) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
- getMetadataEntities(entityCategory, entityType, dataspace) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
