---
title: "queryANSISql(input)"
domain: apex-reference
topic: queryansisqlinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [queryANSISql, input, Synchronously, query, data, across, model, lake, unified, linked, objects., returns, 999, rows., Note, API, Version, Requires, Chatter, Signature]
---

# queryANSISql(input)

> Synchronously query data across data model, lake, unified, and linked objects. This query
    returns up to 49,999 rows.

### queryANSISql(input)

Synchronously query data across data model, lake, unified, and linked objects. This query returns up to 49,999 rows.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

A newer version of the Query API is available. We recommend using [queryAnsiSqlV2(input)](#apex_ConnectAPI_CdpQuery_queryAnsiSqlV2_2 "Query data across data model, lake, unified, and linked objects.") and [nextBatchAnsiSqlV2(nextBatchId)](#apex_ConnectAPI_CdpQuery_nextBatchAnsiSqlV2_1 "Get the next batch of data across data model, lake, unified, and linked objects.") to take advantage of subsequent requests and larger response sizes.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput queryANSISql(ConnectApi.CdpQueryInput input)

#### Parameters

input

Type: [ConnectApi.CdpQueryInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_query.htm "Data query input.")

A ConnectApi.CdpQueryInput body with the SQL query.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")