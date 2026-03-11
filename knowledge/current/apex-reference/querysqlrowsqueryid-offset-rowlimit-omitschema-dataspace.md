---
title: "querySqlRows(queryId, offset, rowLimit, omitSchema,
      dataspace)"
domain: apex-reference
topic: querysqlrowsqueryid-offset-rowlimit-omitschema-dataspace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [querySqlRows, queryId, offset, rowLimit, omitSchema, dataspace, Get, additional, query, results, weren't, returned, initial, request., Paginate, through, existing, specifying, row, limit.]
---

# querySqlRows(queryId, offset, rowLimit, omitSchema,
      dataspace)

> Get additional query results that weren't returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Also, specify the data space and whether or not to exclude metadata from the response. Results are available for up to 24 hours.

### querySqlRows(queryId, offset, rowLimit, omitSchema, dataspace)

Get additional query results that weren't returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Also, specify the data space and whether or not to exclude metadata from the response. Results are available for up to 24 hours.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlPageOutput querySqlRows(String queryId, Long offset, Long rowLimit, Boolean omitSchema, String dataspace)

#### Parameters

queryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID from the initial query to retrieve more results, for example MTAuMjMuMTU2LjIwODo3NDg0\_49169cf8-a6f4-738f-6544-c3a7ba2ff548. The query ID is returned in the querySql response.

offset

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

Row number to start with when retrieving the next chunk of query results. Value must be less than the total number of available rows. If unspecified, no rows are skipped.

rowLimit

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

Maximum number of rows to include in the response. The actual number of rows returned may be lower than the requested value if fewer are available or if the result set exceeds internal system size limits. Value must be greater than 0.

omitSchema

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether to exclude metadata from the response (true) or not (false). Omitting the schema reduces the amount of data returned and improves performance.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.QuerySqlPageOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql.htm "Represents the SQL query output.")

#### Usage

Retrieve the queryId from the initial query request. To submit an SQL query request for execution, call [querySql(input)](#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data."), [querySql(input, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space."), or [querySql(input, workloadName, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.").

#### Example

Query additional rows with an offset, row limit, data space, and omitting the schema:

```

```