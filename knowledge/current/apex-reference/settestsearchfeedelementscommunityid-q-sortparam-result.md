---
title: "setTestSearchFeedElements(communityId, q, sortParam,
   result)"
domain: apex-reference
topic: settestsearchfeedelementscommunityid-q-sortparam-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.229Z
keywords: [setTestSearchFeedElements, communityId, sortParam, result, Register, ConnectApi.FeedElementPage, object, returned, matching, ConnectApi.searchFeedElements, method, called, test, context., same, parameters, receive, exception., API, Version]
---

# setTestSearchFeedElements(communityId, q, sortParam,
   result)

> Register a ConnectApi.FeedElementPage object to
      be returned when the matching ConnectApi.searchFeedElements method is called in a test context. Use the method
      with the same parameters or you receive an exception.

### setTestSearchFeedElements(communityId, q, sortParam, result)

Register a ConnectApi.FeedElementPage object to be returned when the matching ConnectApi.searchFeedElements method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

31.0

#### Signature

public static Void setTestSearchFeedElements(String communityId, String q, ConnectApi.FeedSortOrder sortParam, ConnectApi.FeedElementPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

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

-   [searchFeedElements(communityId, q, sortParam)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElements_2 "Get the first page of sorted feed elements that match the search criteria.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")