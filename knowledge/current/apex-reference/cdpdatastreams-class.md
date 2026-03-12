---
title: "CdpDataStreams Class"
domain: apex-reference
topic: cdpdatastreams-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:15.759Z
estimatedTokens: 439
namespace: ConnectApi
keywords: [CdpDataStreams, Run, Data, 360, data, streams., runDataStream, recordIdOrDeveloperName, interactive, API, Version, Requires, Chatter]
---

# CdpDataStreams Class

> Run Data 360 data streams.

**Namespace:** `ConnectApi`

# CdpDataStreams Class

Run Data 360 data streams.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpDataStreams Methods

These methods are for CdpDataStreams. All methods are static.

-   **[runDataStream(recordIdOrDeveloperName, interactive)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpDataStreams_static_methods.htm#apex_ConnectAPI_CdpDataStreams_runDataStream_1)**
    Start a data stream run to read from a source and update a data lake object.

### runDataStream(recordIdOrDeveloperName, interactive)

Start a data stream run to read from a source and update a data lake object.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DataStreamActionResponse runDataStream(String recordIdOrDeveloperName, Boolean interactive)

#### Parameters

recordIdOrDeveloperName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Record ID or developer name of the data stream.

interactive

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether to perform fast format conversion for the data stream (true) or not (false).

#### Return Value

Type: [ConnectApi.DataStreamActionResponseOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_data_stream_action_response.htm "Represents an action on a data stream.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- runDataStream(recordIdOrDeveloperName, interactive) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpDataStreams_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.DataStreamActionResponseOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_data_stream_action_response.htm)
