---
title: "setTestGetFeedElements(communityId, subjectId, favoriteId,
                        pageParam, pageSize, sortParam, result)"
domain: apex-reference
topic: settestgetfeedelementscommunityid-subjectid-favoriteid-pageparam-pagesize-sortpa
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.237Z
keywords: [setTestGetFeedElements, communityId, subjectId, favoriteId, pageParam, pageSize, sortParam, result, Register, ConnectApi.FeedElementPage, object, returned, getFeedElements​, called, matching, parameters, test, context., method, same]
---

# setTestGetFeedElements(communityId, subjectId, favoriteId,
                        pageParam, pageSize, sortParam, result)

> Register a ConnectApi.FeedElementPage object to
                be returned when getFeedElements​ is
                called with matching parameters in a test context. Use the method with the same
                parameters or the code throws an exception.

### setTestGetFeedElements(communityId, subjectId, favoriteId, pageParam, pageSize, sortParam, result)

Register a ConnectApi.FeedElementPage object to be returned when getFeedElements​ is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

public static Void setTestGetFeedElements(String communityId, String subjectId, String favoriteId, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedElementPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context user or the alias me.

favoriteId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of a favorite.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Page token to use to view the page. Page tokens are returned as part of the response class, for example, currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of feed elements per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortParam

Type: [ConnectApi.FeedSortOrder](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedSortOrder_enum)

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

-   [getFeedElements(communityId, subjectId, favoriteId, pageParam, pageSize, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_getFeedElements_2 "Get a page of sorted feed elements for a favorite.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")