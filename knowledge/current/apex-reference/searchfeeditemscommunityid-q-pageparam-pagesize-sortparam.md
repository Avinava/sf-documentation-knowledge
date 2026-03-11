---
title: "searchFeedItems(communityId, q, pageParam, pageSize,
      sortParam)"
domain: apex-reference
topic: searchfeeditemscommunityid-q-pageparam-pagesize-sortparam
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.232Z
keywords: [searchFeedItems, communityId, pageParam, pageSize, sortParam, Get, page, sorted, feed, items, match, search, criteria., API, Version, Important, Available, Guest, Users, Requires]
---

# searchFeedItems(communityId, q, pageParam, pageSize,
      sortParam)

> Get a page of sorted feed items that match the search criteria.

### searchFeedItems(communityId, q, pageParam, pageSize, sortParam)

Get a page of sorted feed items that match the search criteria.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [searchFeedElements(communityId, q, pageParam, pageSize, sortParam)](#apex_ConnectAPI_ChatterFeeds_searchFeedElements_4 "Get a page of sorted feed elements that match the search criteria.").

#### Available to Guest Users

31.0 only

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedItemPage searchFeedItems(String communityId, String q, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam)

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

Number of feed items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortParam

Type: [ConnectApi.​FeedSortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.
-   CreatedDateDesc—Sorts by most recent creation date.
-   LastModifiedDateDesc—Sorts by most recent activity.
-   MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.
-   Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.

Sorts the returned feed by the most recently created feed item, or by the most recently modified feed item. If you pass in null, the default value CreatedDateDesc is used.

#### Return Value

Type: [ConnectApi.FeedItemPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestSearchFeedItems(communityId, q, pageParam, pageSize, sortParam, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectApi_ChatterFeeds_setTestSearchFeedItems_4 "Register a test feed item page to be returned when searchFeedItems(String, String, String, Integer, ConnectApi.FeedSortOrder) is called during a test.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")