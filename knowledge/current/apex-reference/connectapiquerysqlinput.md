---
title: "ConnectApi.QuerySqlInput"
domain: apex-reference
topic: connectapiquerysqlinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.486Z
keywords: [ConnectApi.QuerySqlInput, See]
---

# ConnectApi.QuerySqlInput

# ConnectApi.QuerySqlInput

Represents the input to create an SQL query.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| adaptiveTimeout | Integer | Amount of time (in seconds) for the query engine to respond to the request. 0 will return the queryId, status, and metadata, but no data associated with the SQL. The maximum value is 15. | Optional | 63.0 |
| querySettings | Map<String, String> | Settings to allow the adjustment of query execution, such as date and time. For example, lc_time, date_style, and external_client_context. | Optional | 62.0 |
| rowLimit | Long | Maximum number of rows to include in the response. Fewer rows may be returned. | Optional | 62.0 |
| sql | String | SQL expression. | Required | 62.0 |
| sqlParameters | List<ConnectApi.QuerySqlParameterItem> | Value and type information about the SQL parameters. | Optional | 62.0 |

#### See Also

-   [querySql(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data.")
    
-   [querySql(input, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space.")
    
-   [querySql(input, workloadName, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.")