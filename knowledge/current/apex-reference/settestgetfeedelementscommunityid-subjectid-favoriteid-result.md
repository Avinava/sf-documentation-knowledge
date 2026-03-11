---
title: "setTestGetFeedElements(communityId, subjectId, favoriteId,
                        result)"
domain: apex-reference
topic: settestgetfeedelementscommunityid-subjectid-favoriteid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.237Z
keywords: [setTestGetFeedElements, communityId, subjectId, favoriteId, result, Register, ConnectApi.FeedElementPage, object, returned, getFeedElements​, called, matching, parameters, test, context., method, same, code, throws, exception.]
---

# setTestGetFeedElements(communityId, subjectId, favoriteId,
                        result)

> Register a ConnectApi.FeedElementPage object to
                be returned when getFeedElements​ is
                called with matching parameters in a test context. Use the method with the same
                parameters or the code throws an exception.

### setTestGetFeedElements(communityId, subjectId, favoriteId, result)

Register a ConnectApi.FeedElementPage object to be returned when getFeedElements​ is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

31.0

#### Signature

public static Void setTestGetFeedElements(String communityId, String subjectId, String favoriteId, ConnectApi.FeedElementPage result)

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

result

Type: [ConnectApi.FeedElementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm "A paged collection of ConnectApi.FeedElement objects.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getFeedElements(communityId, subjectId, favoriteId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFavorites_static_methods.htm#apex_ConnectAPI_ChatterFavorites_getFeedElements_1 "Get the first page of feed elements for a favorite.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")