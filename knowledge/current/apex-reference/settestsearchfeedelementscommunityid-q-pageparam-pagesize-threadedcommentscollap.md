---
title: "setTestSearchFeedElements(communityId, q, pageParam,
      pageSize, threadedCommentsCollapsed, result)"
domain: apex-reference
topic: settestsearchfeedelementscommunityid-q-pageparam-pagesize-threadedcommentscollap
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.230Z
keywords: [setTestSearchFeedElements, communityId, pageParam, pageSize, threadedCommentsCollapsed, result, Register, ConnectApi.FeedElementPage, object, returned, matching, ConnectApi.searchFeedElements, method, called, test, context., same, parameters, receive, exception.]
---

# setTestSearchFeedElements(communityId, q, pageParam,
      pageSize, threadedCommentsCollapsed, result)

> Register a ConnectApi.FeedElementPage object to
    be returned when the matching ConnectApi.searchFeedElements method is called in a test context. Use the method
    with the same parameters or you receive an exception.

### setTestSearchFeedElements(communityId, q, pageParam, pageSize, threadedCommentsCollapsed, result)

Register a ConnectApi.FeedElementPage object to be returned when the matching ConnectApi.searchFeedElements method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

44.0

#### Signature

public static Void setTestSearchFeedElements(String communityId, String q, String pageParam, Integer pageSize, Boolean threadedCommentsCollapsed, ConnectApi.FeedElementPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Page token to use to view the page. Page tokens are returned as part of the response class, for example, currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

threadedCommentsCollapsed

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return threaded comments in a collapsed style (true) or not (false). If you pass in null, the default is false.

result

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [searchFeedElements(communityId, q, pageParam, pageSize, threadedCommentsCollapsed)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElements_4a "Get a page of feed elements with comments in a threaded style that match the search criteria.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")