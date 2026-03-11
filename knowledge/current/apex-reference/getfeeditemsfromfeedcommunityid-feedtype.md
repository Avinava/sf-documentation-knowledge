---
title: "getFeedItemsFromFeed(communityId, feedType)"
domain: apex-reference
topic: getfeeditemsfromfeedcommunityid-feedtype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.231Z
keywords: [getFeedItemsFromFeed, communityId, feedType, Get, feed, items, Company, Home, Moderation, feeds., API, Version, Important, Available, Guest, Users, Requires, Chatter, Signature, Parameters]
---

# getFeedItemsFromFeed(communityId, feedType)

> Get feed items from the Company, Home, and Moderation
    feeds.

### getFeedItemsFromFeed(communityId, feedType)

Get feed items from the Company, Home, and Moderation feeds.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [getFeedElementsFromFeed(communityId, feedType)](#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_1 "Get feed elements from the Company, DirectMessageModeration, DirectMessages, Home, Isolated, Moderation, and PendingReview feeds.").

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedItemPage getFeedItemsFromFeed(String communityId, ConnectApi.FeedType feedType)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.​FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are Company, DirectMessageModeration, DirectMessages, Home, Isolated, Moderation, and PendingReview.

#### Return Value

Type: [ConnectApi.FeedItemPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetFeedItemsFromFeed(communityId, feedType, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFeed "Register a ConnectApi.FeedItemPage object to be returned when getFeedItems​FromFeed is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")