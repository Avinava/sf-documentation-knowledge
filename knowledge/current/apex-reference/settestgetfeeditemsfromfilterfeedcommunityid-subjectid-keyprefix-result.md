---
title: "setTestGetFeedItemsFromFilterFeed(communityId, subjectId,
   keyPrefix, result)"
domain: apex-reference
topic: settestgetfeeditemsfromfilterfeedcommunityid-subjectid-keyprefix-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.232Z
keywords: [setTestGetFeedItemsFromFilterFeed, communityId, subjectId, keyPrefix, result, Register, ConnectApi.FeedItemPage, object, returned, matching, getFeedItems​​FromFilterFeed, method, called, test, context., same, parameters, code, throws, exception.]
---

# setTestGetFeedItemsFromFilterFeed(communityId, subjectId,
   keyPrefix, result)

> Register a ConnectApi.FeedItemPage object to be
      returned when the matching getFeedItems​​FromFilterFeed method is called in a test context.
      Use the method with the same parameters or the code throws an exception.

### setTestGetFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix, result)

Register a ConnectApi.FeedItemPage object to be returned when the matching getFeedItems​​FromFilterFeed method is called in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

28.0–31.0

#### Signature

public static Void setTestGetFeedItemsFromFilterFeed(String communityId, String subjectId, String keyPrefix, ConnectApi.FeedItemPage result)

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

Type: [ConnectApi.FeedItemPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getFeedItemsFromFilterFeed(communityId, subjectId, keyPrefix)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_getFeedItemsFromFilterFeed "Get feed items from a feed filtered by a key prefix for a user.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")