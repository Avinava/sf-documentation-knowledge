---
title: "getSegmentById(segmentId)"
domain: apex-reference
topic: getsegmentbyidsegmentid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.189Z
keywords: [getSegmentById, segmentId, Get, segment, ID., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getSegmentById(segmentId)

> Get a segment by ID.

### getSegmentById(segmentId)

Get a segment by ID.

#### API Version

65.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentContainerOutput getSegmentById(String segmentId)

#### Parameters

segmentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the segment.

#### Return Value

Type: [ConnectApi.CdpSegmentContainerOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_container_output.htm "Segment container.")