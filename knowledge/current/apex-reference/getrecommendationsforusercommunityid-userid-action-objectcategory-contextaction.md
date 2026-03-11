---
title: "getRecommendationsForUser(communityId, userId, action,
      objectCategory, contextAction, contextObjectId, maxResults)"
domain: apex-reference
topic: getrecommendationsforusercommunityid-userid-action-objectcategory-contextaction-
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.702Z
keywords: [getRecommendationsForUser, communityId, userId, action, objectCategory, contextAction, contextObjectId, maxResults, Get, Chatter, custom, static, recommendations, context, user, specified, object, category., API, Version]
---

# getRecommendationsForUser(communityId, userId, action,
      objectCategory, contextAction, contextObjectId, maxResults)

> Get the Chatter, custom, and static recommendations for the context
      user for the specified action and object category.

### getRecommendationsForUser(communityId, userId, action, objectCategory, contextAction, contextObjectId, maxResults)

Get the Chatter, custom, and static recommendations for the context user for the specified action and object category.

#### API Version

33.0–35.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 36.0 and later, use [getRecommendationsForUser(communityId, userId, action, objectCategory, contextAction, contextObjectId, channel, maxResults)](#apex_ConnectAPI_Recommendations_getRecommendationsForUser_3a "Get the Chatter, custom, and static recommendations for the context user for the specified action and object category.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.RecommendationCollection getRecommendationsForUser(String communityId, String userId, ConnectApi.RecommendationActionType action, String objectCategory, ConnectApi.RecommendationActionType contextAction, String contextObjectId, Integer maxResults)

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
-   If action is view, objectCategory is users, files, groups, records, custom, or apps.

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

#### Return Value

Type: [ConnectApi.RecommendationCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm#apex_connectapi_output_recommendation_collection "A list of Chatter, custom, and static recommendations.")

#### Usage

If you want to get recommendations based on a recent action performed, such as following a user, use contextAction and contextObjectId together. For example, if you just followed Pam, you specify follow for contextAction and Pam’s user ID for contextObjectId.

This method only recommends users who are followed by people who follow Pam. In this example, John follows Pam so the method returns a recommendation for you to follow Suzanne since John also follows Suzanne.

![Your new recommendation to follow Suzanne.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Fnew_recom.png&folder=apexref)

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetRecommendationsForUser(communityId, userId, action, objectCategory, contextAction, contextObjectId, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_setTestGetRecommendationsForUser_3 "Register a ConnectApi.RecommendationCollection object to be returned when getRecommendationsForUser is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")