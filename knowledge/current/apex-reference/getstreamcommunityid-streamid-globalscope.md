---
title: "getStream(communityId, streamId,
    globalScope)"
domain: apex-reference
topic: getstreamcommunityid-streamid-globalscope
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getStream, communityId, streamId, globalScope, Get, information, Chatter, feed, stream, regardless, Experience, Cloud, site., API, Version, Requires, Signature, Parameters, Tip, Return]
---

# getStream(communityId, streamId,
    globalScope)

> Get information about a Chatter feed stream, regardless of
      Experience Cloud site.

### getStream(communityId, streamId, globalScope)

Get information about a Chatter feed stream, regardless of Experience Cloud site.

#### API Version

41.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterStream getStream(String communityId, String streamId, Boolean globalScope)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

streamId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the Chatter feed stream.

globalScope

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to get streams from all the context user’s Experience Cloud sites, regardless of the communityId value.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexref)

#### Tip

If you know the communityId for the stream, we recommend setting globalScope to false.

#### Return Value

Type: [ConnectApi.ChatterStream](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream.htm#apex_connectapi_output_feed_stream "A Chatter feed stream.")