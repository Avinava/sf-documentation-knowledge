---
title: "searchFeedItemsInFeed(communityId, feedType,
        q)"
domain: apex-reference
topic: searchfeeditemsinfeedcommunityid-feedtype-q
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.232Z
keywords: [searchFeedItemsInFeed, communityId, feedType, Get, feed, items, Company, Home, Moderation, feeds, match, search, criteria., API, Version, Important, Available, Guest, Users, Requires]
---

# searchFeedItemsInFeed(communityId, feedType,
        q)

> Get the feed items from the Company, Home, and Moderation
    feeds that match the search criteria.

### searchFeedItemsInFeed(communityId, feedType, q)

Get the feed items from the Company, Home, and Moderation feeds that match the search criteria.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [searchFeedElementsInFeed(communityId, feedType, q)](#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_1 "Get the feed elements from the Company, DirectMessageModeration, Home, Isolated, Moderation, and PendingReview feeds that match the search criteria.").

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedItemPage searchFeedItemsInFeed(String communityId, ConnectApi.FeedType feedType, String q)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.​FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are Company, DirectMessageModeration, DirectMessages, Home, Isolated, Moderation, and PendingReview.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.FeedItemPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestSearchFeedItemsInFeed(communityId, feedType, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFeed "Register a ConnectApi.FeedItemPage object to be returned when the matching ConnectApi.searchFeedItemsInFeed method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")