---
title: "updateStream(communityId, streamId,
    streamInput)"
domain: apex-reference
topic: updatestreamcommunityid-streamid-streaminput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [updateStream, communityId, streamId, streamInput, Update, Chatter, feed, stream., API, Version, Requires, Signature, Parameters, Return, Value]
---

# updateStream(communityId, streamId,
    streamInput)

> Update a Chatter feed stream.

### updateStream(communityId, streamId, streamInput)

Update a Chatter feed stream.

#### API Version

39.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterStream updateStream(String communityId, String streamId, ConnectApi.ChatterStreamInput streamInput)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

streamId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Chatter feed stream.

streamInput

Type: [ConnectApi.ChatterStreamInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_stream.htm#apex_connectapi_input_feed_stream "A Chatter feed stream.")

A ConnectApi.ChatterStreamInput object.

#### Return Value

Type: [ConnectApi.ChatterStream](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream.htm#apex_connectapi_output_feed_stream "A Chatter feed stream.")