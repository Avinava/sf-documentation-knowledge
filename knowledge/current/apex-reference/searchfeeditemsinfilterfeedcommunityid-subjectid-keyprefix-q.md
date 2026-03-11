---
title: "searchFeedItemsInFilterFeed(communityId, subjectId,
   keyPrefix, q)"
domain: apex-reference
topic: searchfeeditemsinfilterfeedcommunityid-subjectid-keyprefix-q
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.232Z
keywords: [searchFeedItemsInFilterFeed, communityId, subjectId, keyPrefix, Get, feed, items, match, search, criteria, filtered, key, prefix, user., API, Version, Important, Requires, Chatter, Signature]
---

# searchFeedItemsInFilterFeed(communityId, subjectId,
   keyPrefix, q)

> Get the feed items that match the search criteria from a feed filtered by a key prefix
  for a user.

### searchFeedItemsInFilterFeed(communityId, subjectId, keyPrefix, q)

Get the feed items that match the search criteria from a feed filtered by a key prefix for a user.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [searchFeedElementsInFilterFeed(communityId, subjectId, keyPrefix, q)](#apex_ConnectAPI_ChatterFeeds_searchFeedElementsInFilterFeed_1 "Get the feed elements from a feed filtered by a key prefix that match the search criteria.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedItemPage searchFeedItemsInFilterFeed(String communityId, String subjectId, String keyPrefix, String q)

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

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.FeedItemPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestSearchFeedItemsInFilterFeed(communityId, subjectId, keyPrefix, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setTestSearchFeedItemsInFilterFeed "Register a ConnectApi.FeedItemPage object to be returned when the matching ConnectApi.searchFeedItemsInFilterFeed method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")