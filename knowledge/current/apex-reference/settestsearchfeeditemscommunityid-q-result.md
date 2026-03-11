---
title: "setTestSearchFeedItems(communityId, q,
    result)"
domain: apex-reference
topic: settestsearchfeeditemscommunityid-q-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.232Z
keywords: [setTestSearchFeedItems, communityId, result, Register, test, feed, item, page, returned, searchFeedItems, called, during, test., API, Version, Signature, Parameters, Return, Value, See]
---

# setTestSearchFeedItems(communityId, q,
    result)

> Register a test feed item page to be returned when searchFeedItems(communityId, q) is called during a test.

### setTestSearchFeedItems(communityId, q, result)

Register a test feed item page to be returned when searchFeedItems(communityId, q) is called during a test.

#### API Version

28.0–31.0

#### Signature

public static Void searchFeedItems(String communityId, String q, ConnectApi.FeedItemPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

result

Type: [ConnectApi.FeedItemPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item_Page.htm "A paged collection of ConnectApi.FeedItem objects.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [searchFeedItems(communityId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_searchFeedItems "Get the feed items that match the search criteria.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")