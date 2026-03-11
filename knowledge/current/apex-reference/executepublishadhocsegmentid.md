---
title: "executePublishAdhoc(segmentId)"
domain: apex-reference
topic: executepublishadhocsegmentid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.189Z
keywords: [executePublishAdhoc, segmentId, Publish, segment., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# executePublishAdhoc(segmentId)

> Publish a segment.

### executePublishAdhoc(segmentId)

Publish a segment.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpSegmentActionOutput executePublishAdhoc(String segmentId)

#### Parameters

segmentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the segment to publish.

#### Return Value

Type: [ConnectApi.CdpSegmentActionOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_segment_action_output.htm "Segment action.")