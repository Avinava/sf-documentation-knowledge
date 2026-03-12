---
title: "ConnectApi.CdpQueryOutputV2"
domain: apex-reference
topic: connectapicdpqueryoutputv2
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:26.694Z
estimatedTokens: 480
keywords: [ConnectApi.CdpQueryOutputV2, Query, output, API]
---

# ConnectApi.CdpQueryOutputV2

> Query output for the V2 API.

# ConnectApi.CdpQueryOutputV2

Query output for the V2 API.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| data | List<ConnectApi.​CdpQueryV2Row> (in version 55.0 and later)List<Object> (version 54.0 only) | Result data set. | 54.0 |
| done | Boolean | Specifies whether the query is done (true) or not (false). | 54.0 |
| endTime | String | Query end time. | 54.0 |
| metadata | Map<String, ConnectApi.​CdpQuery​MetadataItem> (version 55.0 and later)Map<String, Object> (version 54.0 only) | Result metadata set. | 54.0 |
| nextBatchId | String | Next batch ID.Use this property as the nextBatchId parameter in the nextBatchAnsiSqlV2(nextBatchId) method to get the next batch of data. | 54.0 |
| queryId | String | Query ID. | 54.0 |
| rowCount | Integer | Number of rows in the result data set. | 54.0 |
| startTime | String | Query start time. | 54.0 |

#### See Also

-   [queryAnsiSqlV2(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryAnsiSqlV2_2 "Query data across data model, lake, unified, and linked objects.")

-   [queryAnsiSqlV2(input, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryAnsiSqlV2_3 "Query data across data model, lake, unified, and linked objects. Also, specify the data space.")

-   [nextBatchAnsiSqlV2(nextBatchId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_nextBatchAnsiSqlV2_1 "Get the next batch of data across data model, lake, unified, and linked objects.")

-   [nextBatchAnsiSqlV2(nextBatchId, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_nextBatchAnsiSqlV2_2 "Get the next batch of data across data model, lake, unified, and linked objects. Also, specify the data space.")

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​CdpQueryV2Row (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_v2_row.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- ConnectApi.​CdpQuery​MetadataItem (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_metadata_item.htm)
- nextBatchAnsiSqlV2(nextBatchId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- queryAnsiSqlV2(input) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
- queryAnsiSqlV2(input, dataspace) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
