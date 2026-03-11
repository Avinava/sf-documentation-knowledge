---
title: "querySql(input)"
domain: apex-reference
topic: querysqlinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [querySql, input, Submit, SQL, query, request, execution, retrieve, first, chunk, data., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# querySql(input)

> Submit an SQL query request for execution and retrieve the first chunk of data.

### querySql(input)

Submit an SQL query request for execution and retrieve the first chunk of data.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlOutput querySql(ConnectApi.QuerySqlInput input)

#### Parameters

input

Type: [ConnectApi.QuerySqlInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_query_sql.htm "Represents the input to create an SQL query.")

Input representation for an SQL query.

#### Return Value

Type: [ConnectApi.QuerySqlOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql.htm "Represents the SQL query output.")

#### Usage

To get started with writing queries, see [Write a Simple Query](https://developer.salesforce.com/docs/data/data-cloud-query-guide/guide/write-simple-query.html). For more information about creating SQL statements, see [Data 360 SQL Syntax](https://developer.salesforce.com/docs/data/data-cloud-query-guide/references/dc-sql-reference/syntax.html).

#### Example

Submit a query, check its status, then retrieve and process data in chunks until all results are fetched:

```

```