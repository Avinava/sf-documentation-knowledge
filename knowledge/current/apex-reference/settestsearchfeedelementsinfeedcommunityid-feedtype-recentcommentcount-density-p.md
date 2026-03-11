---
title: "setTestSearchFeedElementsInFeed(communityId, feedType,
   recentCommentCount, density, pageParam, pageSize, sortParam, q, filter, result)"
domain: apex-reference
topic: settestsearchfeedelementsinfeedcommunityid-feedtype-recentcommentcount-density-p
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.230Z
keywords: [setTestSearchFeedElementsInFeed, communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, filter, result, Register, ConnectApi.FeedElementPage, object, returned, matching, ConnectApi.searchFeedElementsInFeed, method, called, test, context.]
---

# setTestSearchFeedElementsInFeed(communityId, feedType,
   recentCommentCount, density, pageParam, pageSize, sortParam, q, filter, result)

> Register a ConnectApi.FeedElementPage object to
  be returned when the matching ConnectApi.searchFeedElementsInFeed method is called in a test context. Use the method
  with the same parameters or you receive an exception.

### setTestSearchFeedElementsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q, filter, result)

Register a ConnectApi.FeedElementPage object to be returned when the matching ConnectApi.searchFeedElementsInFeed method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

32.0

#### Signature

public static Void setTestSearchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, ConnectApi.FeedSortOrder sortParam, String q, ConnectApi.FeedFilter filter, ConnectApi.FeedElementPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.​FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

The type of feed. The only valid value is Home.

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

filter

Type: [ConnectApi.​FeedFilter](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#feedFilter)

Specifies the feed filters.

-   AllQuestions—Feed elements that are questions.
-   AuthoredBy—Feed elements authored by the user profile owner. This value is valid only for the UserProfile feed.
-   CommunityScoped—Feed elements that are scoped to Experience Cloud sites. Currently, these feed elements have a User or a Group parent record. However, other parent record types could be scoped to sites in the future. Feed elements that are always visible in all sites are filtered out. This value is valid only for the UserProfile feed.
-   QuestionsWithCandidateAnswers—Feed elements that are questions that have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   QuestionsWithCandidateAnswers​ReviewedPublished—Feed elements that are questions that have candidate answers that have been reviewed or published. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   Read—Feed elements that are older than 30 days or are marked as read for the context user. Includes existing feed elements when the context user joined the group. This value is valid only for the Record feed of a group.
-   SolvedQuestions—Feed elements that are questions and that have a best answer.
-   UnansweredQuestions—Feed elements that are questions and that don’t have any answers.
-   UnansweredQuestionsWithCandidate​Answers—Feed elements that are questions that don’t have answers but have candidate answers associated with them. This value is valid only for users with the Access Einstein-Generated Answers permission.
-   Unread—Feed elements that are created in the past 30 days and aren’t marked as read for the context user. This value is valid only for the Record feed of a group.
-   UnsolvedQuestions—Feed elements that are questions and that don’t have a best answer.

result

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [searchFeedElementsInFeed(communityId, feedType, recentCommentCount, density, pageParam, pageSize, sortParam, q, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_4a "Get a page of sorted and filtered feed elements from the Home feed that match the search criteria. Each feed element includes no more than the specified number of comments.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")