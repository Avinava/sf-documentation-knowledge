---
title: "getFeedElementsFromFilterFeed(communityId, subjectId,
                  keyPrefix)"
domain: apex-reference
topic: getfeedelementsfromfilterfeedcommunityid-subjectid-keyprefix
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getFeedElementsFromFilterFeed, communityId, subjectId, keyPrefix, Get, feed, elements, filtered, key, prefix, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getFeedElementsFromFilterFeed(communityId, subjectId,
                  keyPrefix)

> Get feed elements from a feed filtered by a key prefix for a
      user.

### getFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix)

Get feed elements from a feed filtered by a key prefix for a user.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElementPage getFeedElementsFromFilterFeed(String communityId, String subjectId, String keyPrefix)

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

#### Return Value

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetFeedElementsFromFilterFeed(communityId, subjectId, keyPrefix, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestGetFeedElementsFromFilterFeed_1 "a ConnectApi.FeedElementPage object to be returned when the matching getFeedElements​​FromFilterFeed method is called in a test context. Use the method with the same parameters or the code throws an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")