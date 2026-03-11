---
title: "createSegment(input, dataspace)"
domain: apex-reference
topic: createsegmentinput-dataspace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.189Z
keywords: [createSegment, input, dataspace, Create, segment, dataspace., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# createSegment(input, dataspace)

> Create a segment in a dataspace.

### createSegment(input, dataspace)

Create a segment in a dataspace.

#### API Version

58.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentOutput createSegment(ConnectApi.CdpSegmentInput input, String dataspace)

#### Parameters

input

Type: [ConnectApi.CdpSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_segment.htm "Segment input.")

A ConnectApi.CdpSegmentInput class.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the dataspace in which to perform the action. The user must have permission to the specified dataspace. Specify default to use the default dataspace.

#### Return Value

Type: [ConnectApi.CdpSegmentOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_output.htm "Segment.")