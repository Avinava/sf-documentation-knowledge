---
title: "runDataStream(recordIdOrDeveloperName, interactive)"
domain: apex-reference
topic: rundatastreamrecordidordevelopername-interactive
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.041Z
keywords: [runDataStream, recordIdOrDeveloperName, interactive, Start, data, stream, run, read, source, update, lake, object., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# runDataStream(recordIdOrDeveloperName, interactive)

> Start a data stream run to read from a source and update a data lake object.

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