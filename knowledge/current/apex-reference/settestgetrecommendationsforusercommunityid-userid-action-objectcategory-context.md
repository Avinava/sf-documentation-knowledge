---
title: "setTestGetRecommendationsForUser(communityId, userId,
      action, objectCategory, contextAction, contextObjectId, maxResults, result)"
domain: apex-reference
topic: settestgetrecommendationsforusercommunityid-userid-action-objectcategory-context
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.702Z
keywords: [setTestGetRecommendationsForUser, communityId, userId, action, objectCategory, contextAction, contextObjectId, maxResults, result, Register, ConnectApi.RecommendationCollection, object, returned, getRecommendationsForUser, called, matching, parameters, test, context., method]
---

# setTestGetRecommendationsForUser(communityId, userId,
      action, objectCategory, contextAction, contextObjectId, maxResults, result)

> Register a ConnectApi.RecommendationCollection
    object to be returned when getRecommendationsForUser is
    called with matching parameters in a test context. Use the method with the same parameters or
    the code throws an exception.

### setTestGetRecommendationsForUser(communityId, userId, action, objectCategory, contextAction, contextObjectId, maxResults, result)

Register a ConnectApi.RecommendationCollection object to be returned when getRecommendationsForUser is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.

#### API Version

33.0–35.0

#### Requires Chatter

Yes

#### Signature

public static Void setTestGetRecommendationsForUser(String communityId, String userId, ConnectApi.RecommendationActionType action, String objectCategory, ConnectApi.RecommendationActionType contextAction, String contextObjectId, Integer maxResults, ConnectApi.RecommendationCollection result)

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

objectCategory

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

-   If action is follow, objectCategory is users, files, or records.
-   If action is join, objectCategory is groups.
-   If action is view, objectCategory is users, files, groups, records,custom, or apps.

You can also specify a key prefix, the first three characters of the object ID, as the objectCategory. Valid values are:

-   If action is follow, objectCategory is 005 (users), 069 (files), or 001 (accounts), for example.
-   If action is join, objectCategory is 0F9 (groups).
-   If action is view, objectCategory is 005 (users), 069 (files), 0F9 (groups), 0RD (custom recommendations), T (static recommendations), or 001 (accounts), for example.

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

-   [getRecommendationsForUser(communityId, userId, action, objectCategory, contextAction, contextObjectId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_getRecommendationsForUser_3 "Get the Chatter, custom, and static recommendations for the context user for the specified action and object category.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")