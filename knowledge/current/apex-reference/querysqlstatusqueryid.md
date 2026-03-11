---
title: "querySqlStatus(queryId)"
domain: apex-reference
topic: querysqlstatusqueryid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [querySqlStatus, queryId, Get, status, SQL, query, request., Results, available, hours., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, Example]
---

# querySqlStatus(queryId)

> Get the status of an SQL query request. Results are available for up to 24 hours.

### querySqlStatus(queryId)

Get the status of an SQL query request. Results are available for up to 24 hours.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlStatus querySqlStatus(String queryId)

#### Parameters

queryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the query to return the status for, for example MTAuMjMuMTU2LjIwODo3NDg0\_49169cf8-a6f4-738f-6544-c3a7ba2ff548. The query ID is returned in the querySql response.

#### Return Value

Type: [ConnectApi.QuerySqlStatus](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_status.htm "Represents the status of an SQL query.")

#### Usage

Retrieve the queryId from the initial query request. To submit an SQL query request for execution, call [querySql(input)](#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data."), [querySql(input, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space."), or [querySql(input, workloadName, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.").

#### Example

Get the status of a query:

```

```