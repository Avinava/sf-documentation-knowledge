---
title: "deactivateSegmentByApiName(segmentApiName)"
domain: apex-reference
topic: deactivatesegmentbyapinamesegmentapiname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.189Z
keywords: [deactivateSegmentByApiName, segmentApiName, Deactivate, segment, API, name., Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# deactivateSegmentByApiName(segmentApiName)

> Deactivate a segment by API name.

### deactivateSegmentByApiName(segmentApiName)

Deactivate a segment by API name.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentActionOutput deactivateSegmentByApiName(String segmentApiName)

#### Parameters

segmentApiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the segment.

#### Return Value

Type: [ConnectApi.CdpSegmentActionOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_action_output.htm "Segment action.")