---
title: "ConnectApi.QuerySqlPageOutput"
domain: apex-reference
topic: connectapiquerysqlpageoutput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:39.819Z
keywords: [ConnectApi.QuerySqlPageOutput, See]
---

# ConnectApi.QuerySqlPageOutput

# ConnectApi.QuerySqlPageOutput

Represents the rows output for an SQL query.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| dataRows | ConnectApi.QuerySqlRowRepresentation | Data associated with the SQL. | 62.0 |
| metadata | ConnectApi.QuerySqlMetadataItem | Metadata associated with the SQL. | 62.0 |
| returnedRows | Long | Number of rows returned by the query. | 62.0 |

#### See Also

-   [querySqlRows(queryId, offset, rowLimit)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlRows_1 "Get additional query results that weren't returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Results are available for up to 24 hours.")
    
-   [querySqlRows(queryId, offset, rowLimit, omitSchema)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlRows_2 "Get additional query results that weren't returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Also, specify whether to include metadata in the response or not. Results are available for up to 24 hours.")
    
-   [querySqlRows(queryId, offset, rowLimit, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlRows_3 "Get additional query results that weren’t returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Also, specify the data space. Results are available for up to 24 hours.")
    
-   [querySqlRows(queryId, offset, rowLimit, omitSchema, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlRows_4 "Get additional query results that weren't returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Also, specify the data space and whether or not to exclude metadata from the response. Results are available for up to 24 hours.")
    
-   [querySqlRows(queryId, offset, rowLimit, workloadName, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlRows_5 "Get additional query results that weren't returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Also, specify the workload name and data space. Results are available for up to 24 hours.")
    
-   [querySqlRows(queryId, offset, rowLimit, omitSchema, workloadName, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlRows_6 "Get additional query results that weren't returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Also, specify the workload name, data space, and whether or not to exclude metadata from the response. Results are available for up to 24 hours.")