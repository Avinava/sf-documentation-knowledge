---
title: "setTestGetFeedItemsFromFeed(communityId, feedType,
                        result)"
domain: apex-reference
topic: settestgetfeeditemsfromfeedcommunityid-feedtype-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.232Z
keywords: [setTestGetFeedItemsFromFeed, communityId, feedType, result, Register, ConnectApi.FeedItemPage, object, returned, getFeedItems​FromFeed, called, matching, parameters, test, context., get, feed, method, same, code, throws]
---

# setTestGetFeedItemsFromFeed(communityId, feedType,
                        result)

> Register a ConnectApi.FeedItemPage object to be
                returned when getFeedItems​FromFeed
                is called with matching parameters in a test context. Use the get feed method with
                the same parameters or the code throws an exception.

### setTestGetFeedItemsFromFeed(communityId, feedType, result)

Register a ConnectApi.FeedItemPage object to be returned when getFeedItems​FromFeed is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

28.0–31.0

#### Signature

public static Void setTestGetFeedItemsFromFeed(String communityId, ConnectApi.FeedType feedType, ConnectApi.FeedItemPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.​FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are Company, DirectMessageModeration, DirectMessages, Home, Isolated, Moderation, and PendingReview.

result

Type: [ConnectApi.FeedItemPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getFeedItemsFromFeed(communityId, feedType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFeed "Get feed items from the Company, Home, and Moderation feeds.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")