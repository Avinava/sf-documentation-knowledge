---
title: "setTestGetRecommendationForUser(communityId, userId, action,
      objectId, result)"
domain: apex-reference
topic: settestgetrecommendationforusercommunityid-userid-action-objectid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.702Z
keywords: [setTestGetRecommendationForUser, communityId, userId, action, objectId, result, Register, ConnectApi.RecommendationCollection, object, returned, getRecommendationForUser, called, matching, parameters, test, context., method, same, code, throws]
---

# setTestGetRecommendationForUser(communityId, userId, action,
      objectId, result)

> Register a ConnectApi.RecommendationCollection object to be returned when getRecommendationForUser is called with matching parameters
      in a test context. Use the method with the same parameters or the code throws an
      exception.

### setTestGetRecommendationForUser(communityId, userId, action, objectId, result)

Register a ConnectApi.RecommendationCollection object to be returned when getRecommendationForUser is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

33.0

#### Requires Chatter

Yes

#### Signature

public static Void setTestGetRecommendationForUser(String communityId, String userId, ConnectApi.RecommendationActionType action, String objectId, ConnectApi.RecommendationCollection result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the context user or the keyword me.

action

Type: ConnectApi.​RecommendationActionType

Specifies the action to take on a recommendation.

-   follow—Follow a file, record, topic, or user.
-   join—Join a group.
-   view—View a file, group, article, record, user, custom, or static recommendation.

objectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the object to take action on.

-   If action is follow, objectId is a user ID, file ID, record ID, or topic ID (version 36.0 and later).
-   If action is join, objectId is a group ID.
-   If action is view, objectId is a user ID, file ID, group ID, record ID, custom recommendation ID, the enum Today for static recommendations, or an article ID (version 37.0 and later).

result

Type: [ConnectApi.RecommendationCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm#apex_connectapi_output_recommendation_collection "A list of Chatter, custom, and static recommendations.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getRecommendationForUser(communityId, userId, action, objectId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationForUser_2 "Get the Chatter, custom, or static recommendation for the context user for the specified action and object ID.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")