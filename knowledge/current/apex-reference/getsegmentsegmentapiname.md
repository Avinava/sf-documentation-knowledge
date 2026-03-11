---
title: "getSegment(segmentApiName)"
domain: apex-reference
topic: getsegmentsegmentapiname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.189Z
keywords: [getSegment, segmentApiName, Get, segment, API, name., Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getSegment(segmentApiName)

> Get a segment by API name.

### getSegment(segmentApiName)

Get a segment by API name.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentContainerOutput getSegment(String segmentApiName)

#### Parameters

segmentApiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the segment.

#### Return Value

Type: [ConnectApi.CdpSegmentContainerOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_container_output.htm "Segment container.")