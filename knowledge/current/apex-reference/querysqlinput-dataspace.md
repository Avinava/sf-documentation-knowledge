---
title: "querySql(input, dataspace)"
domain: apex-reference
topic: querysqlinput-dataspace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [querySql, input, dataspace, Submit, SQL, query, request, execution, specify, data, space., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# querySql(input, dataspace)

> Submit an SQL query request for execution and specify the data space.

### querySql(input, dataspace)

Submit an SQL query request for execution and specify the data space.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlOutput querySql(ConnectApi.QuerySqlInput input, String dataspace)

#### Parameters

input

Type: [ConnectApi.QuerySqlInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_query_sql.htm "Represents the input to create an SQL query.")

Input representation for an SQL query.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.QuerySqlOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql.htm "Represents the SQL query output.")

#### Usage

To get started with writing queries, see [Write a Simple Query](https://developer.salesforce.com/docs/data/data-cloud-query-guide/guide/write-simple-query.html). For more information about creating SQL statements, see [Data 360 SQL Syntax](https://developer.salesforce.com/docs/data/data-cloud-query-guide/references/dc-sql-reference/syntax.html).

#### Example

Submit a query with a data space:

```

```