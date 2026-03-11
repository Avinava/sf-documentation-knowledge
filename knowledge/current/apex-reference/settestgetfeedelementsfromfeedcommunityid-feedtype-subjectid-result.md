---
title: "setTestGetFeedElementsFromFeed(communityId, feedType,
                  subjectId, result)"
domain: apex-reference
topic: settestgetfeedelementsfromfeedcommunityid-feedtype-subjectid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.229Z
keywords: [setTestGetFeedElementsFromFeed, communityId, feedType, subjectId, result, Register, ConnectApi.FeedElementPage, object, returned, getFeedElementsFromFeed, called, matching, parameters, test, context., get, feed, method, same, code]
---

# setTestGetFeedElementsFromFeed(communityId, feedType,
                  subjectId, result)

> Register a ConnectApi.FeedElementPage object to
            be returned when getFeedElementsFromFeed is
            called with matching parameters in a test context. Use the get feed method with the same
            parameters or the code throws an exception.

### setTestGetFeedElementsFromFeed(communityId, feedType, subjectId, result)

Register a ConnectApi.FeedElementPage object to be returned when getFeedElementsFromFeed is called with matching parameters in a test context. Use the get feed method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

public static Void setTestGetFeedElementsFromFeed(String communityId, ConnectApi.FeedType feedType, String subjectId, ConnectApi.FeedElementPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

The feed type.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context user or the alias me.

result

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getFeedElementsFromFeed(communityId, feedType, subjectId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFeed_2 "Get feed elements from any feed other than Company, DirectMessageModeration, DirectMessages, Filter, Home, Isolated, Landing, Moderation, and PendingReview for a user or record.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")