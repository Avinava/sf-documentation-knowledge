---
title: "ConnectApi.CdpQueryOutputV2"
domain: apex-reference
topic: connectapicdpqueryoutputv2
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:38.271Z
keywords: [ConnectApi.CdpQueryOutputV2, See]
---

# ConnectApi.CdpQueryOutputV2

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