---
title: "getFeedItemsFromFeed(communityId, feedType,
                  subjectId)"
domain: apex-reference
topic: getfeeditemsfromfeedcommunityid-feedtype-subjectid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.231Z
keywords: [getFeedItemsFromFeed, communityId, feedType, subjectId, Get, feed, items, user, record., API, Version, Important, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# getFeedItemsFromFeed(communityId, feedType,
                  subjectId)

> Get feed items from a feed for a user or record.

### getFeedItemsFromFeed(communityId, feedType, subjectId)

Get feed items from a feed for a user or record.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [getFeedElementsFromFeed(communityId, feedType, subjectId)](#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_2 "Get feed elements from any feed other than Company, DirectMessageModeration, DirectMessages, Filter, Home, Isolated, Landing, Moderation, and PendingReview for a user or record.").

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedItemPage getFeedItemsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.​FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every ConnectApi.FeedType except Company, DirectMessageModeration, DirectMessages, Filter, Home, Isolated, Landing, Moderation, and PendingReview.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If feedType is Record, subjectId can be any record ID, including a group ID. If feedType is Streams, subjectId must be a stream ID. If feedType is Topics, subjectId must be a topic ID. If feedType is UserProfile, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias me.

#### Return Value

Type: [ConnectApi.FeedItemPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetFeedItemsFromFeed(communityId, feedType, subjectId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFeed_4 "Register a ConnectApi.FeedItemPage object to be returned when getFeedItems​FromFeed is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")