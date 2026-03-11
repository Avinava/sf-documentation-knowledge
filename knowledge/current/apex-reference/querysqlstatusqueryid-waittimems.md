---
title: "querySqlStatus(queryId, waitTimeMs)"
domain: apex-reference
topic: querysqlstatusqueryid-waittimems
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [querySqlStatus, queryId, waitTimeMs, Get, status, SQL, query, request, specify, time, wait, before, returning, response., Results, available, hours., API, Version, Requires]
---

# querySqlStatus(queryId, waitTimeMs)

> Get the status of an SQL query request and specify the time to wait before returning the response. Results are available for up to 24 hours.

### querySqlStatus(queryId, waitTimeMs)

Get the status of an SQL query request and specify the time to wait before returning the response. Results are available for up to 24 hours.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlStatus querySqlStatus(String queryId, Integer waitTimeMs)

#### Parameters

queryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the query to return the status for, for example MTAuMjMuMTU2LjIwODo3NDg0\_49169cf8-a6f4-738f-6544-c3a7ba2ff548. The query ID is returned in the querySql response.

waitTimeMs

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum time (in milliseconds) to wait for the result. Configure a wait time up to 10 seconds before returning the status without chunk information. If unspecified, the status is returned immediately. Use this to avoid resource limits by delaying requests.

#### Return Value

Type: [ConnectApi.QuerySqlStatus](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_status.htm "Represents the status of an SQL query.")

#### Usage

Retrieve the queryId from the initial query request. To submit an SQL query request for execution, call [querySql(input)](#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data."), [querySql(input, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space."), or [querySql(input, workloadName, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.").

#### Example

Get the status of a query with wait time:

```

```