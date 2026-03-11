---
title: "searchStreams(communityId, q, pageParam,
    pageSize)"
domain: apex-reference
topic: searchstreamscommunityid-q-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [searchStreams, communityId, pageParam, pageSize, Search, Chatter, feed, streams, context, user, return, page, results., API, Version, Requires, Signature, Parameters, Return, Value]
---

# searchStreams(communityId, q, pageParam,
    pageSize)

> Search the Chatter feed streams for the context user and return a page
      of results.

### searchStreams(communityId, q, pageParam, pageSize)

Search the Chatter feed streams for the context user and return a page of results.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterStreamPage searchStreams(String communityId, String q, Integer pageParam, Integer pageSize)

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

#### Return Value

Type: [ConnectApi.ChatterStreamPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_stream_collection.htm#apex_connectapi_output_feed_stream_collection "A collection of Chatter feed streams.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestSearchStreams(communityId, q, pageParam, pageSize, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchStreams_4 "Register a ConnectApi.ChatterStreamPage object to be returned when the matching ConnectApi.searchStreams(communityId, q, pageParam, pageSize) method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")