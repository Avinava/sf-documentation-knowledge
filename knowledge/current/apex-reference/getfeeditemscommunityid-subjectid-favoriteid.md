---
title: "getFeedItems(communityId, subjectId,
  favoriteId)"
domain: apex-reference
topic: getfeeditemscommunityid-subjectid-favoriteid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.237Z
keywords: [getFeedItems, communityId, subjectId, favoriteId, Get, first, page, feed, items, favorite., API, Version, Important, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getFeedItems(communityId, subjectId,
  favoriteId)

> Get the first page of feed items for a favorite.

### getFeedItems(communityId, subjectId, favoriteId)

Get the first page of feed items for a favorite.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [getFeedElements(communityId, subjectId, favoriteId)](#apex_ConnectAPI_ChatterFavorites_getFeedElements_1 "Get the first page of feed elements for a favorite.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedItemPage getFeedItems(String communityId, String subjectId, String favoriteId)

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

Type: [ConnectApi.FeedItemPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetFeedItems(communityId, subjectId, favoriteId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_setTestGetFeedItems "Register a ConnectApi.FeedItemPage object to be returned when getFeedItems​ is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")