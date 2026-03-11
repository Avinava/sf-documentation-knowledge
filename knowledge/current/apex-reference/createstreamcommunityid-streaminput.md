---
title: "createStream(communityId, streamInput)"
domain: apex-reference
topic: createstreamcommunityid-streaminput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [createStream, communityId, streamInput, Create, Chatter, feed, stream., API, Version, Requires, Signature, Parameters, Return, Value]
---

# createStream(communityId, streamInput)

> Create a Chatter feed stream.

### createStream(communityId, streamInput)

Create a Chatter feed stream.

#### API Version

39.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterStream createStream(String communityId, ConnectApi.ChatterStreamInput streamInput)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

streamInput

Type: [ConnectApi.ChatterStreamInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_stream.htm#apex_connectapi_input_feed_stream "A Chatter feed stream.")

A ConnectApi.ChatterStreamInput body.

#### Return Value

Type: [ConnectApi.ChatterStream](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream.htm#apex_connectapi_output_feed_stream "A Chatter feed stream.")