---
title: "searchFeedElements(communityId, q,
      threadedCommentsCollapsed)"
domain: apex-reference
topic: searchfeedelementscommunityid-q-threadedcommentscollapsed
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.226Z
keywords: [searchFeedElements, communityId, threadedCommentsCollapsed, Get, feed, elements, comments, match, search, criteria., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# searchFeedElements(communityId, q,
      threadedCommentsCollapsed)

> Get the feed elements and comments that match the search
      criteria.

### searchFeedElements(communityId, q, threadedCommentsCollapsed)

Get the feed elements and comments that match the search criteria.

#### API Version

44.0

#### Available to Guest Users

44.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElementPage searchFeedElements(String communityId, String q, Boolean threadedCommentsCollapsed)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

threadedCommentsCollapsed

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return threaded comments in a collapsed style (true) or not (false). If you pass in null, the default is false.

#### Return Value

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestSearchFeedElements(communityId, q, threadedCommentsCollapsed, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElements_2a "Register a ConnectApi.FeedElementPage object to be returned when the matching ConnectApi.searchFeedElements method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")