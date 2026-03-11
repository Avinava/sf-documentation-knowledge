---
title: "queryANSISql(input, batchSize, offset, orderby)"
domain: apex-reference
topic: queryansisqlinput-batchsize-offset-orderby
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [queryANSISql, input, batchSize, offset, orderby, Synchronously, query, data, across, model, lake, unified, linked, objects., Specify, batch, size, order, results., returns]
---

# queryANSISql(input, batchSize, offset, orderby)

> Synchronously query data across data model, lake, unified, and linked
  objects. Specify batch size, offset, and order of the results. This query
  returns up to 49,999 rows.

### queryANSISql(input, batchSize, offset, orderby)

Synchronously query data across data model, lake, unified, and linked objects. Specify batch size, offset, and order of the results. This query returns up to 49,999 rows.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

A newer version of the Query API is available. We recommend using [queryAnsiSqlV2(input)](#apex_ConnectAPI_CdpQuery_queryAnsiSqlV2_2 "Query data across data model, lake, unified, and linked objects.") and [nextBatchAnsiSqlV2(nextBatchId)](#apex_ConnectAPI_CdpQuery_nextBatchAnsiSqlV2_1 "Get the next batch of data across data model, lake, unified, and linked objects.") to take advantage of subsequent requests and larger response sizes.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput queryANSISql(ConnectApi.CdpQueryInput input, Integer batchSize, Integer offset, String orderby)

#### Parameters

input

Type: [ConnectApi.CdpQueryInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_query.htm "Data query input.")

A ConnectApi.CdpQueryInput body with the SQL query.

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of records to return. Values are from 1\-49999. The default value is 49999.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of rows to skip before returning results. The sum of offset and batchSize must be less than 2147483647. The default value is 0.

orderby

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated values to sort the results in ascending or descending order, for example, GenderId\_\_c ASC,Occupation\_\_c DESC.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")