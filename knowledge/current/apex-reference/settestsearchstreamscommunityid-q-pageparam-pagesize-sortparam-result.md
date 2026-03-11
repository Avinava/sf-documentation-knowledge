---
title: "setTestSearchStreams(communityId, q, pageParam, pageSize,
      sortParam, result)"
domain: apex-reference
topic: settestsearchstreamscommunityid-q-pageparam-pagesize-sortparam-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.230Z
keywords: [setTestSearchStreams, communityId, pageParam, pageSize, sortParam, result, Register, ConnectApi.ChatterStreamPage, object, returned, matching, ConnectApi.searchStreams, method, called, test, context., same, parameters, receive, exception.]
---

# setTestSearchStreams(communityId, q, pageParam, pageSize,
      sortParam, result)

> Register a ConnectApi.ChatterStreamPage object to be returned when the matching ConnectApi.searchStreams(communityId, q, pageParam, pageSize,
        sortParam) method is called in a test context. Use the method with the same
      parameters or you receive an exception.

### setTestSearchStreams(communityId, q, pageParam, pageSize, sortParam, result)

Register a ConnectApi.ChatterStreamPage object to be returned when the matching ConnectApi.searchStreams(communityId, q, pageParam, pageSize, sortParam) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

public static Void setTestSearchStreams(String communityId, String q, Integer pageParam, Integer pageSize, ConnectApi.SortOrder sortParam, ConnectApi.ChatterStreamPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

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

result

Type: [ConnectApi.ChatterStreamPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [searchStreams(communityId, q, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchStreams_4a "Search the Chatter feed streams for the context user and return a sorted page of results.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")