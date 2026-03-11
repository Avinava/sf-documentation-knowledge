---
title: "getRecommendationForUser(communityId, userId, action,
      objectId)"
domain: apex-reference
topic: getrecommendationforusercommunityid-userid-action-objectid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.701Z
keywords: [getRecommendationForUser, communityId, userId, action, objectId, Get, Chatter, custom, static, recommendation, context, user, specified, object, ID., API, Version, Requires, Signature, Parameters]
---

# getRecommendationForUser(communityId, userId, action,
      objectId)

> Get the Chatter, custom, or static recommendation for the context user
      for the specified action and object ID.

### getRecommendationForUser(communityId, userId, action, objectId)

Get the Chatter, custom, or static recommendation for the context user for the specified action and object ID.

#### API Version

33.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.RecommendationCollection getRecommendationForUser(String communityId, String userId, ConnectApi.RecommendationActionType action, String objectId)

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

Specifies the object to act on.

-   If action is follow, objectId is a user ID, file ID, record ID, or topic ID (version 36.0 and later).
-   If action is join, objectId is a group ID.
-   If action is view, objectId is a user ID, file ID, group ID, record ID, custom recommendation ID (version 34.0 and later), the enum Today for static recommendations (version 35.0 and later), or an article ID (version 37.0 and later).

#### Return Value

Type: [ConnectApi.RecommendationCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm#apex_connectapi_output_recommendation_collection "A list of Chatter, custom, and static recommendations.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetRecommendationForUser(communityId, userId, action, objectId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_setTestGetRecommendationForUser_2 "Register a ConnectApi.RecommendationCollection object to be returned when getRecommendationForUser is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")