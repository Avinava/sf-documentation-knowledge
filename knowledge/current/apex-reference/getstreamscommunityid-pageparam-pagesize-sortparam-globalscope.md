---
title: "getStreams(communityId, pageParam, pageSize, sortParam,
      globalScope)"
domain: apex-reference
topic: getstreamscommunityid-pageparam-pagesize-sortparam-globalscope
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getStreams, communityId, pageParam, pageSize, sortParam, globalScope, Get, sorted, page, Chatter, feed, streams, Enterprise, Cloud, sites, context, user., API, Version, Requires]
---

# getStreams(communityId, pageParam, pageSize, sortParam,
      globalScope)

> Get a sorted page of Chatter feed streams from all Enterprise Cloud
      sites for the context user.

### getStreams(communityId, pageParam, pageSize, sortParam, globalScope)

Get a sorted page of Chatter feed streams from all Enterprise Cloud sites for the context user.

#### API Version

41.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterStreamPage getStreams(String communityId, Integer pageParam, Integer pageSize, ConnectApi.SortOrder sortParam, Boolean globalScope)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 to 250. The default size is 25.

sortParam

Type: [ConnectApi.SortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#SortOrderEnum)

Specifies the sort order. Values are:

-   Ascending—Items are in ascending alphabetical order (A-Z).
-   Descending—Items are in descending alphabetical order (Z-A).
-   MostRecentlyViewed—Items are in descending chronological order by view. This sort order is valid only for Chatter feed streams.

If not specified, default value is Ascending.

globalScope

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to get streams from all the context user’s Experience Cloud sites, regardless of the communityId value.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexref)

#### Tip

If you know the communityId for the streams, we recommend setting globalScope to false.

#### Return Value

Type: [ConnectApi.ChatterStreamPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")