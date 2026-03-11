---
title: "searchFeedElementsInFeed(communityId, feedType, subjectId,
      pageParam, pageSize, sortParam, q)"
domain: apex-reference
topic: searchfeedelementsinfeedcommunityid-feedtype-subjectid-pageparam-pagesize-sortpa
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [searchFeedElementsInFeed, communityId, feedType, subjectId, pageParam, pageSize, sortParam, Get, page, sorted, feed, elements, record, user, match, search, criteria., API, Version, Available]
---

# searchFeedElementsInFeed(communityId, feedType, subjectId,
      pageParam, pageSize, sortParam, q)

> Get a page of sorted feed elements from a feed for a record or user
      that match the search criteria.

### searchFeedElementsInFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, q)

Get a page of sorted feed elements from a feed for a record or user that match the search criteria.

#### API Version

31.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElementPage searchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.​FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every ConnectApi.FeedType except Company, DirectMessages, Filter, Landing, Streams, and Topics.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If feedType is Record, subjectId can be any record ID, including a group ID. If feedType is UserProfile, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias me.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Page token to use to view the page. Page tokens are returned as part of the response class, for example, currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortParam

Type: [ConnectApi.​FeedSortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Order of feed items in the feed.

-   CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.
-   CreatedDateDesc—Sorts by most recent creation date.
-   LastModifiedDateDesc—Sorts by most recent activity.
-   MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.
-   Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.

If you pass in null, the default value CreatedDateDesc is used.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Search term. Searches keywords in the user or group name. A minimum of one character is required. This parameter doesn’t support wildcards. This parameter is required.

#### Return Value

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedElementsInFeed_5 "Register a ConnectApi.FeedElementPage object to be returned when the matching ConnectApi.searchFeedElementsInFeed method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")