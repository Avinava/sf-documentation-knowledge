---
title: "setTestGetFeedElementsFromFeed(communityId, feedType,
                        pageParam, pageSize, sortParam, result)"
domain: apex-reference
topic: settestgetfeedelementsfromfeedcommunityid-feedtype-pageparam-pagesize-sortparam-
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.229Z
keywords: [setTestGetFeedElementsFromFeed, communityId, feedType, pageParam, pageSize, sortParam, result, Register, ConnectApi.FeedElementPage, object, returned, getFeedElementsFromFeed, called, matching, parameters, test, context., get, feed, method]
---

# setTestGetFeedElementsFromFeed(communityId, feedType,
                        pageParam, pageSize, sortParam, result)

> Register a ConnectApi.FeedElementPage object to
                be returned when getFeedElementsFromFeed is
                called with matching parameters in a test context. Use the get feed method with the
                same parameters or the code throws an exception.

### setTestGetFeedElementsFromFeed(communityId, feedType, pageParam, pageSize, sortParam, result)

Register a ConnectApi.FeedElementPage object to be returned when getFeedElementsFromFeed is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

public static Void setTestGetFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedElementPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

The only valid value for this parameter is Company.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Page token to use to view the page. Page tokens are returned as part of the response class, for example, currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortParam

Type: [ConnectApi.​FeedSortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

Values are:

-   CreatedDateAsc—Sorts by oldest creation date. This sort order is available only for DirectMessageModeration, Draft, Isolated, Moderation, and PendingReview feeds.
-   CreatedDateDesc—Sorts by most recent creation date.
-   LastModifiedDateDesc—Sorts by most recent activity.
-   MostViewed—Sorts by most viewed content. This sort order is available only for Home feeds when the ConnectApi.FeedFilter is UnansweredQuestions.
-   Relevance—Sorts by most relevant content. This sort order is available only for Company, Home, and Topics feeds.

If you pass in null, the default value CreatedDateDesc is used.

result

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getFeedElementsFromFeed(communityId, feedType, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_3 "Get a page of sorted feed elements from the Company, DirectMessageModeration, DirectMessages, Home, Isolated, Moderation, and PendingReview feeds.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")