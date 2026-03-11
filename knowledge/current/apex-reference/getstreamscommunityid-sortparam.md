---
title: "getStreams(communityId, sortParam)"
domain: apex-reference
topic: getstreamscommunityid-sortparam
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getStreams, communityId, sortParam, Get, sort, Chatter, feed, streams, context, user., API, Version, Requires, Signature, Parameters, Return, Value]
---

# getStreams(communityId, sortParam)

> Get and sort the Chatter feed streams for the context
    user.

### getStreams(communityId, sortParam)

Get and sort the Chatter feed streams for the context user.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterStreamPage getStreams(String communityId, ConnectApi.SortOrder sortParam)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

sortParam

Type: [ConnectApi.SortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#SortOrderEnum)

Specifies the sort order. Values are:

-   Ascending—Items are in ascending alphabetical order (A-Z).
-   Descending—Items are in descending alphabetical order (Z-A).
-   MostRecentlyViewed—Items are in descending chronological order by view. This sort order is valid only for Chatter feed streams.

If not specified, default value is Ascending.

#### Return Value

Type: [ConnectApi.ChatterStreamPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")