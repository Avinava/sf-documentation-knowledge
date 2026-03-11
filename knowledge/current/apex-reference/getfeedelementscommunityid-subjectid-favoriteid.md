---
title: "getFeedElements(communityId, subjectId,
  favoriteId)"
domain: apex-reference
topic: getfeedelementscommunityid-subjectid-favoriteid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.236Z
keywords: [getFeedElements, communityId, subjectId, favoriteId, Get, first, page, feed, elements, favorite., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, See]
---

# getFeedElements(communityId, subjectId,
  favoriteId)

> Get the first page of feed elements for a favorite.

### getFeedElements(communityId, subjectId, favoriteId)

Get the first page of feed elements for a favorite.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElementPage getFeedElements(String communityId, String subjectId, String favoriteId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context user or the alias me.

favoriteId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of a favorite.

#### Return Value

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetFeedElements(communityId, subjectId, favoriteId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_setTestGetFeedElements_1 "Register a ConnectApi.FeedElementPage object to be returned when getFeedElements​ is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")