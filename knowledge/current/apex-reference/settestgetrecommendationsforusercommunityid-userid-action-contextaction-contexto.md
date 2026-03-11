---
title: "setTestGetRecommendationsForUser(communityId, userId,
      action, contextAction, contextObjectId, maxResults, result)"
domain: apex-reference
topic: settestgetrecommendationsforusercommunityid-userid-action-contextaction-contexto
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.702Z
keywords: [setTestGetRecommendationsForUser, communityId, userId, action, contextAction, contextObjectId, maxResults, result, Register, ConnectApi.RecommendationCollection, object, returned, getRecommendationsForUser, called, matching, parameters, test, context., method, same]
---

# setTestGetRecommendationsForUser(communityId, userId,
      action, contextAction, contextObjectId, maxResults, result)

> Register a ConnectApi.RecommendationCollection
    object to be returned when getRecommendationsForUser is
    called with matching parameters in a test context. Use the method with the same parameters or
    the code throws an exception.

### setTestGetRecommendationsForUser(communityId, userId, action, contextAction, contextObjectId, maxResults, result)

Register a ConnectApi.RecommendationCollection object to be returned when getRecommendationsForUser is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

33.0–35.0

#### Requires Chatter

Yes

#### Signature

public static Void setTestGetRecommendationsForUser(String communityId, String userId, ConnectApi.RecommendationActionType action, ConnectApi.RecommendationActionType contextAction, String contextObjectId, Integer maxResults, ConnectApi.RecommendationCollection result)

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

contextAction

Type: ConnectApi.​RecommendationActionType

Action that the context user just performed. Supported values are:

-   follow
-   view

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify null.

contextObjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the object that the context user just performed an action on.

-   If contextAction is follow, contextObjectId is a user ID, file ID, or record ID.
-   If contextAction is view, contextObjectId is a user ID, file ID, group ID, or record ID.

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify null.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of recommendation results; default is 10. Values must be from 1 to 99.

result

Type: [ConnectApi.RecommendationCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm#apex_connectapi_output_recommendation_collection "A list of Chatter, custom, and static recommendations.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getRecommendationsForUser(communityId, userId, action, contextAction, contextObjectId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationsForUser_2 "Get the Chatter, custom, and static recommendations for the context user for the specified action.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")