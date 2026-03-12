---
title: "ConnectApi.QuerySqlOutput"
domain: apex-reference
topic: connectapiquerysqloutput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:28.751Z
estimatedTokens: 301
keywords: [ConnectApi.QuerySqlOutput, SQL, query, output]
---

# ConnectApi.QuerySqlOutput

> Represents the SQL query output.

# ConnectApi.QuerySqlOutput

Represents the SQL query output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| dataRows | ConnectApi.QuerySqlRowRepresentation | Data associated with the SQL. | 62.0 |
| metadata | ConnectApi.QuerySqlMetadataItem | Metadata associated with the SQL. | 62.0 |
| returnedRows | Long | Number of rows returned by the query. | 62.0 |
| status | ConnectApi.QuerySqlStatus | Metadata related to the status of an SQL query. | 62.0 |

#### See Also

-   [querySql(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data.")

-   [querySql(input, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space.")

-   [querySql(input, workloadName, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.")

## Related Topics

- ConnectApi.QuerySqlRowRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_row.htm)
- ConnectApi.QuerySqlMetadataItem (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_metadata_item.htm)
- Long (atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm)
- ConnectApi.QuerySqlStatus (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_status.htm)
- querySql(input) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
- querySql(input, dataspace) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
- querySql(input, workloadName, dataspace) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
