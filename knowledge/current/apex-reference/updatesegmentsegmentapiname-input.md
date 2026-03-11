---
title: "updateSegment(segmentApiName, input)"
domain: apex-reference
topic: updatesegmentsegmentapiname-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.189Z
keywords: [updateSegment, segmentApiName, input, Update, segment., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateSegment(segmentApiName, input)

> Update a segment.

### updateSegment(segmentApiName, input)

Update a segment.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentOutput updateSegment(String segmentApiName, ConnectApi.CdpSegmentInput input)

#### Parameters

segmentApiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the segment.

input

Type: [ConnectApi.CdpSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_segment.htm "Segment input.")

A ConnectApi.CdpSegmentInput class with the updates.

#### Return Value

Type: [ConnectApi.CdpSegmentOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_output.htm "Segment.")