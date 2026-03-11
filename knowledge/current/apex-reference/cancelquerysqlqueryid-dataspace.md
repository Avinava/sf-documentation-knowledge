---
title: "cancelQuerySql(queryId, dataspace)"
domain: apex-reference
topic: cancelquerysqlqueryid-dataspace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [cancelQuerySql, queryId, dataspace, Delete, specified, query, terminate, long-running, queries, longer, needed, manage, resource, consumption., Specify, data, space., API, Version, Requires]
---

# cancelQuerySql(queryId, dataspace)

> Delete the specified query and terminate long-running queries that are no longer needed to manage resource consumption. Specify the data space.

### cancelQuerySql(queryId, dataspace)

Delete the specified query and terminate long-running queries that are no longer needed to manage resource consumption. Specify the data space.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static Void cancelQuerySql(String queryId, String dataspace)

#### Parameters

queryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the query to cancel, for example MTAuMjMuMTU2LjIwODo3NDg0\_49169cf8-a6f4-738f-6544-c3a7ba2ff548. The query ID is returned in the querySql response.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: Void

#### Usage

Retrieve the queryId from the initial query request. To submit an SQL query request for execution, call [querySql(input)](#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data."), [querySql(input, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space."), or [querySql(input, workloadName, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.").

#### Example

Cancel a query with a data space:

```

```