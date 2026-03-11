---
title: "searchFeedElementsInFeed(communityId, feedType,
    q)"
domain: apex-reference
topic: searchfeedelementsinfeedcommunityid-feedtype-q
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [searchFeedElementsInFeed, communityId, feedType, Get, feed, elements, Company, DirectMessageModeration, Home, Isolated, Moderation, PendingReview, feeds, match, search, criteria., API, Version, Available, Guest]
---

# searchFeedElementsInFeed(communityId, feedType,
    q)

> Get the feed elements from the Company, DirectMessageModeration, Home, Isolated,
        Moderation, and PendingReview feeds that match the search criteria.

### searchFeedElementsInFeed(communityId, feedType, q)

Get the feed elements from the Company, DirectMessageModeration, Home, Isolated, Moderation, and PendingReview feeds that match the search criteria.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElementPage searchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String q)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.​FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are Company, DirectMessageModeration, Home, Isolated, Moderation, and PendingReview.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestSearchFeedElementsInFeed(communityId, feedType, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_1 "Register a ConnectApi.FeedElementPage object to be returned when the matching ConnectApi.searchFeedElementsInFeed method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")