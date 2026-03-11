---
title: "getFeedElementsFromFeed(communityId,
        feedType)"
domain: apex-reference
topic: getfeedelementsfromfeedcommunityid-feedtype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [getFeedElementsFromFeed, communityId, feedType, Get, feed, elements, Company, DirectMessageModeration, DirectMessages, Home, Isolated, Moderation, PendingReview, feeds., API, Version, Available, Guest, Users, Requires]
---

# getFeedElementsFromFeed(communityId,
        feedType)

> Get feed elements from the Company, DirectMessageModeration,
                DirectMessages, Home, Isolated, Moderation, and PendingReview feeds.

### getFeedElementsFromFeed(communityId, feedType)

Get feed elements from the Company, DirectMessageModeration, DirectMessages, Home, Isolated, Moderation, and PendingReview feeds.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElementPage getFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.​FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are Company, DirectMessageModeration, DirectMessages, Home, Isolated, Moderation, and PendingReview.

#### Return Value

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetFeedElementsFromFeed(communityId, feedType, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFeed_1 "Register a ConnectApi.FeedElementPage object to be returned when getFeedElementsFromFeed is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")