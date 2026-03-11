---
title: "setTestSearchFeedItemsInFeed(communityId, feedType, subjectId,
                        pageParam, pageSize, sortParam, q, result)"
domain: apex-reference
topic: settestsearchfeeditemsinfeedcommunityid-feedtype-subjectid-pageparam-pagesize-so
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.233Z
keywords: [setTestSearchFeedItemsInFeed, communityId, feedType, subjectId, pageParam, pageSize, sortParam, result, Register, ConnectApi.FeedItemPage, object, returned, matching, ConnectApi.searchFeedItemsInFeed, method, called, test, context., same, parameters]
---

# setTestSearchFeedItemsInFeed(communityId, feedType, subjectId,
                        pageParam, pageSize, sortParam, q, result)

> Register a ConnectApi.FeedItemPage object to be
                returned when the matching ConnectApi.searchFeedItemsInFeed method is called in a test
                context. Use the method with the same parameters or you receive an
                exception.

### setTestSearchFeedItemsInFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, q, result)

Register a ConnectApi.FeedItemPage object to be returned when the matching ConnectApi.searchFeedItemsInFeed method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

28.0–31.0

#### Signature

public static Void setTestSearchFeedItemsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, ConnectApi.FeedItemPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.​FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values include every ConnectApi.FeedType except Company, DirectMessages, Filter, Landing, and Streams.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If feedType is Record, subjectId can be any record ID, including a group ID. If feedType is Streams, subjectId must be a stream ID. If feedType is Topics, subjectId must be a topic ID. If feedType is UserProfile, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias me.

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

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

result

Type: [ConnectApi.FeedItemPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [searchFeedItemsInFeed(communityId, feedType, subjectId, pageParam, pageSize, sortParam, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItemsInFeed_5 "Get a page of sorted feed items from a feed for a user or record that match the search criteria.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")