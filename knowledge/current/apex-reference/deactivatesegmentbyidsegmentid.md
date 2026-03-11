---
title: "deactivateSegmentById(segmentId)"
domain: apex-reference
topic: deactivatesegmentbyidsegmentid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.189Z
keywords: [deactivateSegmentById, segmentId, Deactivate, segment, ID., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# deactivateSegmentById(segmentId)

> Deactivate a segment by ID.

### deactivateSegmentById(segmentId)

Deactivate a segment by ID.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentActionOutput deactivateSegmentById(String segmentId)

#### Parameters

segmentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the segment.

#### Return Value

Type: [ConnectApi.CdpSegmentActionOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_action_output.htm "Segment action.")