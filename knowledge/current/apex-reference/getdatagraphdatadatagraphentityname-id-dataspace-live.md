---
title: "getDataGraphData(dataGraphEntityName, id, dataspace,
      live)"
domain: apex-reference
topic: getdatagraphdatadatagraphentityname-id-dataspace-live
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [getDataGraphData, dataGraphEntityName, dataspace, live, Query, data, graph, performing, lookup, specified, space., real-time, graphs, method, attempts, retrieve, falls, back, standard, unavailable.]
---

# getDataGraphData(dataGraphEntityName, id, dataspace,
      live)

> Query a data graph by performing a live lookup in a specified data space.
    For real-time data graphs, the method attempts to retrieve data from the real-time
    data graph but falls back to the standard data graph if the real-time data graph is
    unavailable.

### getDataGraphData(dataGraphEntityName, id, dataspace, live)

Query a data graph by performing a live lookup in a specified data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.

#### API Version

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput getDataGraphData(String dataGraphEntityName, String id, String dataspace, Boolean live)

#### Parameters

dataGraphEntityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the data graph to query.

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Record ID to query for. The ID is matched against the primary key field of the primary Data Model Object (DMO) in the data graph.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space in which to query the data graph.

live

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether live lookup for the data graph is enabled (true) or not (false). With live lookup, the Query Service does not query the data graph itself. It instead queries the data graph's metadata to return data that is guaranteed to be fresh. The response mimics the structure of the regular JSON-formatted response for the data graph. You can use live lookup on any data graph, regardless of the complexity of its structure.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")