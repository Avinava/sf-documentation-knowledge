---
title: "getStreams(communityId)"
domain: apex-reference
topic: getstreamscommunityid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getStreams, communityId, Get, Chatter, feed, streams, context, user., API, Version, Requires, Signature, Parameters, Return, Value]
---

# getStreams(communityId)

> Get the Chatter feed streams for the context user.

### getStreams(communityId)

Get the Chatter feed streams for the context user.

#### API Version

39.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterStreamPage getStreams(String communityId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

#### Return Value

Type: [ConnectApi.ChatterStreamPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")