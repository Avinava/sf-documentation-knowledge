---
title: "nextBatchAnsiSqlV2(nextBatchId)"
domain: apex-reference
topic: nextbatchansisqlv2nextbatchid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [nextBatchAnsiSqlV2, nextBatchId, Get, next, batch, data, across, model, lake, unified, linked, objects., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# nextBatchAnsiSqlV2(nextBatchId)

> Get the next batch of data across data model, lake, unified, and
      linked objects.

### nextBatchAnsiSqlV2(nextBatchId)

Get the next batch of data across data model, lake, unified, and linked objects.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutputV2 nextBatchAnsiSqlV2(String nextBatchId)

#### Parameters

nextBatchId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the next batch. See the Usage section for more information.

#### Return Value

Type: [ConnectApi.CdpQueryOutputV2](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output_v2.htm "Query output for the V2 API.")

#### Usage

Initially, use the [queryAnsiSqlV2(input)](#apex_ConnectAPI_CdpQuery_queryAnsiSqlV2_2 "Query data across data model, lake, unified, and linked objects.") method to query up to 8 MB of data. Use the nextBatchId from the ConnectApi.CdpQueryOutputV2 output class as the nextBatchId parameter in this method to get the next batch of data. You can continue using subsequent next batch IDs for up to an hour.