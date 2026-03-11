---
title: "ConnectApi.QuerySqlStatus"
domain: apex-reference
topic: connectapiquerysqlstatus
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:39.825Z
keywords: [ConnectApi.QuerySqlStatus, See]
---

# ConnectApi.QuerySqlStatus

# ConnectApi.QuerySqlStatus

Represents the status of an SQL query.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| chunkCount | Long | Number of chunks available for extraction. | 62.0 |
| completionStatus | QuerySqlStatusEnum | Completion status of the query.FinishedResultsProducedRunningUnspecified | 62.0 |
| expirationTime | String | Time when the query expires. You can't make requests to an expired query. | 62.0 |
| progress | Double | A number between 0 and 1 that indicates the current progress of query.0: The query execution has not started.1: The query execution is complete and the results are available for you to retrieve. | 62.0 |
| queryId | String | ID of the query for which status information is returned. | 62.0 |
| rowCount | Long | Number of rows available for extraction. | 62.0 |

#### See Also

-   [querySqlStatus(queryId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlStatus_1 "Get the status of an SQL query request. Results are available for up to 24 hours.")
    
-   [querySqlStatus(queryId, waitTimeMs)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlStatus_2 "Get the status of an SQL query request and specify the time to wait before returning the response. Results are available for up to 24 hours.")
    
-   [querySqlStatus(queryId, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlStatus_3 "Get the status of an SQL query request and specify the data space. Results are available for up to 24 hours.")
    
-   [querySqlStatus(queryId, dataspace, waitTimeMs)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlStatus_4 "Get the status of an SQL query request. Specify the data space and time to wait before returning the response. Results are available for up to 24 hours.")
    
-   [querySqlStatus(queryId, workloadName, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlStatus_5 "Get the status of an SQL query request. Specify the workload name and data space. Results are available for up to 24 hours.")
    
-   [querySqlStatus(queryId, workloadName, dataspace, waitTimeMs)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlStatus_6 "Get the status of an SQL query request. Specify the workload name, data space, and time to wait before returning the response. Results are available for up to 24 hours.")