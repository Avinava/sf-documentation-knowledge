---
title: "searchStreams(communityId, q, sortParam)"
domain: apex-reference
topic: searchstreamscommunityid-q-sortparam
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [searchStreams, communityId, sortParam, Search, sort, Chatter, feed, streams, context, user., API, Version, Requires, Signature, Parameters, Return, Value, Usage, See]
---

# searchStreams(communityId, q, sortParam)

> Search and sort the Chatter feed streams for the context
    user.

### searchStreams(communityId, q, sortParam)

Search and sort the Chatter feed streams for the context user.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterStreamPage searchStreams(String communityId, String q, ConnectApi.SortOrder sortParam)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

sortParam

Type: [ConnectApi.SortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#SortOrderEnum)

Specifies the sort order. Values are:

-   Ascending—Items are in ascending alphabetical order (A-Z).
-   Descending—Items are in descending alphabetical order (Z-A).
-   MostRecentlyViewed—Items are in descending chronological order by view. This sort order is valid only for Chatter feed streams.

If not specified, default value is Ascending.

#### Return Value

Type: [ConnectApi.ChatterStreamPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestSearchStreams(communityId, q, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchStreams_3a "Register a ConnectApi.ChatterStreamPage object to be returned when the matching ConnectApi.searchStream(communityId, q, sortParam) method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")