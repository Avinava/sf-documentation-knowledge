---
title: "getFeedItemsFromFilterFeedUpdatedSince(communityId,
      subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize,
    updatedSince)"
domain: apex-reference
topic: getfeeditemsfromfilterfeedupdatedsincecommunityid-subjectid-keyprefix-recentcomm
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.231Z
keywords: [getFeedItemsFromFilterFeedUpdatedSince, communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, updatedSince, Get, page, feed, items, filtered, key, prefix, user., Include, only, updated]
---

# getFeedItemsFromFilterFeedUpdatedSince(communityId,
      subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize,
    updatedSince)

> Get a page of feed items from a feed
      filtered by a key prefix for a user. Include only feed items that have been updated since the
      time specified in the updatedSince parameter.

### getFeedItemsFromFilterFeedUpdatedSince(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, updatedSince)

Get a page of feed items from a feed filtered by a key prefix for a user. Include only feed items that have been updated since the time specified in the updatedSince parameter.

#### API Version

30.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [getFeedElementsFromFilterFeedUpdatedSince(communityId, subjectId, keyPrefix, recentCommentCount, elementsPerBundle, density, pageParam, pageSize, updatedSince)](#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFilterFeedUpdatedSince "Get a page of feed elements from a feed filtered by a key prefix for a user. Include only feed elements that have been updated since the time specified in the updatedSince parameter.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedItemPage getFeedItemsFromFilterFeedUpdatedSince(String communityId, String subjectId, String keyPrefix, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context user or the alias me.

keyPrefix

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

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

Opaque token containing information about the last modified date of the feed. Do not construct this token. To retrieve this token, call getFeedItemsFromFilterFeed and take the value from the updatesToken property of the ConnectApi.FeedItemPage response body.

#### Return Value

Type: [ConnectApi.FeedItemPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

This method returns only feed items that have been updated since the time specified in the updatedSince argument. A feed item is considered to be updated if it was created since the last feed request, or if sort=LastModifiedDateDesc and a comment was added to the feed item since the last feed request. Adding likes and topics doesn’t update a feed item.

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetFeedItemsFromFilterFeedUpdatedSince(communityId, subjectId, keyPrefix, recentCommentCount, density, pageParam, pageSize, sortParam, updatedSince, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedItemsFromFilterFeedUpdatedSince "Register a ConnectApi.FeedItemPage object to be returned when the getFeedItemsFromFilterFeedUpdatedSince method is called in a test context.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")