---
title: "setTestGetFeedElementsUpdatedSince(communityId, feedType,
   recentCommentCount, density, pageParam, pageSize, updatedSince, filter, result)"
domain: apex-reference
topic: settestgetfeedelementsupdatedsincecommunityid-feedtype-recentcommentcount-densit
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.229Z
keywords: [setTestGetFeedElementsUpdatedSince, communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince, filter, result, Register, ConnectApi.FeedElementPage, object, returned, getFeedElementsUpdatedSince, called, matching, parameters, test, context.]
---

# setTestGetFeedElementsUpdatedSince(communityId, feedType,
   recentCommentCount, density, pageParam, pageSize, updatedSince, filter, result)

> Register a ConnectApi.FeedElementPage object to
  be returned when getFeedElementsUpdatedSince is called
  with matching parameters in a test context. Use the method with the same parameters or the code
  throws an exception.

### setTestGetFeedElementsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince, filter, result)

Register a ConnectApi.FeedElementPage object to be returned when getFeedElementsUpdatedSince is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

32.0

#### Signature

public static Void setTestGetFeedElementsUpdatedSince(String communityId, ConnectApi.FeedType feedType, Integer recentCommentCount, ConnectApi.FeedDensity density, String pageParam, Integer pageSize, String updatedSince, ConnectApi.FeedFilter filter, ConnectApi.FeedElementPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.​FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are Company, DirectMessageModeration, DirectMessages, Home, Isolated, Moderation, and PendingReview.

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

updatedSince

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

An opaque token containing information about the last modified date of the feed. Do not construct this token. Retrieve this token from the updatesToken property of the ConnectApi.FeedElementPage response body.

The updatedSince parameter doesn’t return feed elements that are created in the same second as the call.

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

-   [getFeedElementsUpdatedSince(communityId, feedType, recentCommentCount, density, pageParam, pageSize, updatedSince, filter)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsUpdatedSince_1a "Get a page of filtered feed elements from the Home feed. Include only feed elements that have been updated since the time specified in the updatedSince parameter. Each feed element contains no more than the specified number of comments.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")