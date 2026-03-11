---
title: "getFeedItemsUpdatedSince(communityId, feedType,
      recentCommentCount, density, pageParam, pageSize, updatedSince)"
domain: apex-reference
topic: getfeeditemsupdatedsincecommunityid-feedtype-recentcommentcount-density-pagepara
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.231Z
keywords: [getFeedItemsUpdatedSince, communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince, Get, page, feed, items, Company, Home, Moderation, feeds., Include, only, updated, since]
---

# getFeedItemsUpdatedSince(communityId, feedType,
      recentCommentCount, density, pageParam, pageSize, updatedSince)

> Get a page of feed items from the Company, Home, and
        Moderation feeds. Include only feed items that have
      been updated since the time specified in the updatedSince parameter. Each
      feed item contains no more than the specified number of comments.

### getFeedItemsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince)

Get a page of feed items from the Company, Home, and Moderation feeds. Include only feed items that have been updated since the time specified in the updatedSince parameter. Each feed item contains no more than the specified number of comments.

#### API Version

30.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [getFeedElementsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince)](#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_1 "Get a page of feed elements from the Company, DirectMessageModeration, Home, and Moderation feeds. Include only feed elements that have been updated since the time specified in the updatedSince parameter. Each feed element contains no more than the specified number of comments.").

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedItemPage getFeedItemsUpdatedSince(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.​FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are Company, DirectMessageModeration, DirectMessages, Home, Isolated, Moderation, and PendingReview.

recentCommentCount

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of comments to return with each feed item. The default value is 3.

density

Type: [ConnectApi.​FeedDensity](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedDensityEnum)

Specify the amount of content in a feed.

-   AllUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations.
-   FewerUpdates—Displays all updates from people and records the user follows and groups the user is a member of. Also displays custom recommendations, but hides some system-generated updates from records.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Page token to use to view the page. Page tokens are returned as part of the response class, for example, currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of feed items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

updatedSince

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the updatesToken property of the ConnectApi.FeedItemPage response body.

#### Return Value

Type: [ConnectApi.FeedItemPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

This method returns only feed items that have been updated since the time specified in the updatedSince argument. A feed item is considered to be updated if it was created since the last feed request, or if sort=LastModifiedDateDesc and a comment was added to the feed item since the last feed request. Adding likes and topics doesn’t update a feed item.

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example gets the feed items in the company feed and grabs the updatesToken property from the returned object. It then passes the value of updatesToken to the getFeedItemsUpdatedSince method to get the feed items updated since the first call:

```

```

#### See Also

-   [setTestGetFeedItemsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince, ConnectApi.FeedItemPage, results)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsUpdatedSince "Register a ConnectApi.FeedItemPage object to be returned when getFeedItems​UpdatedSince is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")