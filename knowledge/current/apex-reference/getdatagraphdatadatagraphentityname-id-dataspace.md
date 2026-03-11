---
title: "getDataGraphData(dataGraphEntityName, id,
      dataspace)"
domain: apex-reference
topic: getdatagraphdatadatagraphentityname-id-dataspace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [getDataGraphData, dataGraphEntityName, dataspace, Query, data, graph, specified, space., real-time, graphs, method, attempts, retrieve, falls, back, standard, unavailable., API, Version, Requires]
---

# getDataGraphData(dataGraphEntityName, id,
      dataspace)

> Query a data graph in a specified data space. For real-time data graphs,
    the method attempts to retrieve data from the real-time data graph but falls back
    to the standard data graph if the real-time data graph is unavailable.

### getDataGraphData(dataGraphEntityName, id, dataspace)

Query a data graph in a specified data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput getDataGraphData(String dataGraphEntityName, String id, String dataspace)

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

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")