---
title: "getDataGraphDataWithLookupKeys(dataGraphEntityName,
      lookupKeys, dataspace)"
domain: apex-reference
topic: getdatagraphdatawithlookupkeysdatagraphentityname-lookupkeys-dataspace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [getDataGraphDataWithLookupKeys, dataGraphEntityName, lookupKeys, dataspace, Query, data, graph, primary, key, either, Data, Model, Object, DMO, Individual, linked, DMO., Get, specified, space.]
---

# getDataGraphDataWithLookupKeys(dataGraphEntityName,
      lookupKeys, dataspace)

> Query a data graph by the primary key of either the primary Data Model Object (DMO)
    or the Individual linked DMO. Get the data from a specified data space. For real-time data
    graphs, the method attempts to retrieve data from the real-time data graph but falls back to
    the standard data graph if the real-time data graph is unavailable.

### getDataGraphDataWithLookupKeys(dataGraphEntityName, lookupKeys, dataspace)

Query a data graph by the primary key of either the primary Data Model Object (DMO) or the Individual linked DMO. Get the data from a specified data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput getDataGraphDataWithLookupKeys(String dataGraphEntityName, String lookupKeys, String dataspace)

#### Parameters

dataGraphEntityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the data graph to query.

lookupKeys

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Lookup key and value to search on. Specify one of these key-value pairs:

-   The primary key of the primary DMO, for example, lookupKeys=\[id\_\_c=def\]
-   The primary key of the Individual linked DMO, for example, lookupKeys=\[IndividualLink\_\_dlm.SourceRecordId\_\_c=1111111\]

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space in which to query the data graph.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")