---
title: "queryAnsiSqlV2(input, dataspace)"
domain: apex-reference
topic: queryansisqlv2input-dataspace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [queryAnsiSqlV2, input, dataspace, Query, data, across, model, lake, unified, linked, objects., specify, space., API, Version, Requires, Chatter, Signature, Parameters, Return]
---

# queryAnsiSqlV2(input, dataspace)

> Query data across data model, lake, unified, and linked objects. Also,
      specify the data space.

### queryAnsiSqlV2(input, dataspace)

Query data across data model, lake, unified, and linked objects. Also, specify the data space.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutputV2 queryAnsiSqlV2(ConnectApi.CdpQueryInput input, String dataspace)

#### Parameters

input

Type: [ConnectApi.CdpQueryInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_query.htm "Data query input.")

A ConnectApi.CdpQueryInput body with the SQL query.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.CdpQueryOutputV2](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output_v2.htm "Query output for the V2 API.")

#### Usage

Use the nextBatchId in the ConnectApi.CdpQueryOutputV2 output class as the nextBatchId parameter in the [nextBatchAnsiSqlV2(nextBatchId)](#apex_ConnectAPI_CdpQuery_nextBatchAnsiSqlV2_1 "Get the next batch of data across data model, lake, unified, and linked objects.") method to continue getting batches of data for up to an hour.