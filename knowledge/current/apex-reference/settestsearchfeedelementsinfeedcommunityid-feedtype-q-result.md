---
title: "setTestSearchFeedElementsInFeed(communityId, feedType, q,
                        result)"
domain: apex-reference
topic: settestsearchfeedelementsinfeedcommunityid-feedtype-q-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.230Z
keywords: [setTestSearchFeedElementsInFeed, communityId, feedType, result, Register, ConnectApi.FeedElementPage, object, returned, matching, ConnectApi.searchFeedElementsInFeed, method, called, test, context., same, parameters, receive, exception., API, Version]
---

# setTestSearchFeedElementsInFeed(communityId, feedType, q,
                        result)

> Register a ConnectApi.FeedElementPage object to
                be returned when the matching ConnectApi.searchFeedElementsInFeed method is called in a test
                context. Use the method with the same parameters or you receive an
                exception.

### setTestSearchFeedElementsInFeed(communityId, feedType, q, result)

Register a ConnectApi.FeedElementPage object to be returned when the matching ConnectApi.searchFeedElementsInFeed method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

31.0

#### Signature

public static Void setTestSearchFeedElementsInFeed(String communityId, ConnectApi.FeedType feedType, String q, ConnectApi.FeedElementPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.​FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

Type of feed. Valid values are Company, DirectMessageModeration, Home, Isolated, Moderation, and PendingReview.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

result

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [searchFeedElementsInFeed(communityId, feedType, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFeed_1 "Get the feed elements from the Company, DirectMessageModeration, Home, Isolated, Moderation, and PendingReview feeds that match the search criteria.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")