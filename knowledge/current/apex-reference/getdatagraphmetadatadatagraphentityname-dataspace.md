---
title: "getDataGraphMetadata(dataGraphEntityName,
      dataspace)"
domain: apex-reference
topic: getdatagraphmetadatadatagraphentityname-dataspace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [getDataGraphMetadata, dataGraphEntityName, dataspace, Retrieve, metadata, specified, data, graph, space., Retrieves, both, standard, real-time, graphs., API, Version, Requires, Chatter, Signature, Parameters]
---

# getDataGraphMetadata(dataGraphEntityName,
      dataspace)

> Retrieve metadata from a specified data graph in a specified data space.
    Retrieves data from both standard and real-time data graphs.

### getDataGraphMetadata(dataGraphEntityName, dataspace)

Retrieve metadata from a specified data graph in a specified data space. Retrieves data from both standard and real-time data graphs.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpDgMetadata getDataGraphMetadata(String dataGraphEntityName, String dataspace)

#### Parameters

dataGraphEntityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the data graph to query.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space in which to query the data graph.

#### Return Value

Type: [ConnectApi.CdpDgMetadata](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_dg_metadata.htm "Represents metadata from one or more data graphs.")