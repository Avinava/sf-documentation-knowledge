---
title: "setTestSearchFeedElementsInFeed(communityId, feedType,
      subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly,
      customFilter, result)"
domain: apex-reference
topic: settestsearchfeedelementsinfeedcommunityid-feedtype-subjectid-recentcommentcount
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.230Z
keywords: [setTestSearchFeedElementsInFeed, communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, showInternalOnly, customFilter, result, Register, ConnectApi.FeedElementPage, object, returned, matching, ConnectApi.searchFeedElementsInFeed, method, called]
---

# setTestSearchFeedElementsInFeed(communityId, feedType,
      subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly,
      customFilter, result)

> Register a ConnectApi.FeedElementPage object to
    be returned when the matching ConnectApi.searchFeedElementsInFeed method is called in a test context. Use the
    method with the same parameters or you receive an exception.

### setTestSearchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, customFilter, result)

Register a ConnectApi.FeedElementPage object to be returned when the matching ConnectApi.searchFeedElementsInFeed method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

public static Void setTestSearchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, Boolean showInternalOnly, String customFilter, ConnectApi.FeedElementPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.​FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Value must be ConnectApi.FeedType.Record.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of a case.

recentCommentCount

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of comments to return with each feed element. The default value is 3.

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

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

showInternalOnly

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to show only feed elements from internal (non-Experience Cloud site) users (true), or not (false). The default value is false.

cusotmFilter

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Custom filter that applies only to the case feed. See [customFeedFilter](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_customfeedfilter.htm "HTML (New Window)") in the Metadata API Developer Guide for supported values.

result

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [searchFeedElementsInFeed(communityId, feedType, subjectId, recentCommentCount, density, pageParam, pageSize, sortParam, q, showInternalOnly, customFilter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_8a "Get a page of sorted and filtered feed elements from a case feed that match the search criteria.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")