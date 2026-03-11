---
title: "getStream(communityId, streamId)"
domain: apex-reference
topic: getstreamcommunityid-streamid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getStream, communityId, streamId, Get, information, Chatter, feed, stream., API, Version, Requires, Signature, Parameters, Return, Value]
---

# getStream(communityId, streamId)

> Get information about a Chatter feed stream.

### getStream(communityId, streamId)

Get information about a Chatter feed stream.

#### API Version

39.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterStream getStream(String communityId, String streamId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

streamId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Chatter feed stream.

#### Return Value

Type: [ConnectApi.ChatterStream](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream.htm#apex_connectapi_output_feed_stream "A Chatter feed stream.")