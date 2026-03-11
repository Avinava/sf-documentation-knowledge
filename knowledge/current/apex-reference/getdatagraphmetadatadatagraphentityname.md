---
title: "getDataGraphMetadata(dataGraphEntityName)"
domain: apex-reference
topic: getdatagraphmetadatadatagraphentityname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [getDataGraphMetadata, dataGraphEntityName, Retrieve, metadata, specified, data, graph, default, space., Retrieves, both, standard, real-time, graphs., API, Version, Requires, Chatter, Signature, Parameters]
---

# getDataGraphMetadata(dataGraphEntityName)

> Retrieve metadata from a specified data graph in the default data space.
    Retrieves data from both standard and real-time data graphs.

### getDataGraphMetadata(dataGraphEntityName)

Retrieve metadata from a specified data graph in the default data space. Retrieves data from both standard and real-time data graphs.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpDgMetadata getDataGraphMetadata(String dataGraphEntityName)

#### Parameters

dataGraphEntityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the data graph to query.

#### Return Value

Type: [ConnectApi.CdpDgMetadata](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_dg_metadata.htm "Represents metadata from one or more data graphs.")