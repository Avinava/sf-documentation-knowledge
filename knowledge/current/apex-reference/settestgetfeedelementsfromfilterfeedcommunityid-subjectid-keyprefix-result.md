---
title: "setTestGetFeedElementsFromFilterFeed(communityId, subjectId,
   keyPrefix, result)"
domain: apex-reference
topic: settestgetfeedelementsfromfilterfeedcommunityid-subjectid-keyprefix-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.229Z
keywords: [setTestGetFeedElementsFromFilterFeed, communityId, subjectId, keyPrefix, result, ConnectApi.FeedElementPage, object, returned, matching, getFeedElements​​FromFilterFeed, method, called, test, context., same, parameters, code, throws, exception., API]
---

# setTestGetFeedElementsFromFilterFeed(communityId, subjectId,
   keyPrefix, result)

> a ConnectApi.FeedElementPage object to be
         returned when the matching getFeedElements​​FromFilterFeed method is called in a test
         context. Use the method with the same parameters or the code throws an
      exception.

### setTestGetFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, result)

a ConnectApi.FeedElementPage object to be returned when the matching getFeedElements​​FromFilterFeed method is called in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

public static Void setTestGetFeedElementsFromFilterFeed(String communityId, String subjectId, String keyPrefix, ConnectApi.FeedElementPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context user or the alias me.

keyPrefix

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A key prefix that specifies record type. A key prefix is the first three characters in the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

result

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedElementsFromFilterFeed_1 "Get feed elements from a feed filtered by a key prefix for a user.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")