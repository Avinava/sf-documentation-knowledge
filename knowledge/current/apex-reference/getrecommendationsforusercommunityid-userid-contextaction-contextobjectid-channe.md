---
title: "getRecommendationsForUser(communityId, userId,
      contextAction, contextObjectId, channel, maxResults)"
domain: apex-reference
topic: getrecommendationsforusercommunityid-userid-contextaction-contextobjectid-channe
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.701Z
keywords: [getRecommendationsForUser, communityId, userId, contextAction, contextObjectId, channel, maxResults, Get, Chatter, recommendations, such, user, group, file, article, record, topic, context, user., custom]
---

# getRecommendationsForUser(communityId, userId,
      contextAction, contextObjectId, channel, maxResults)

> Get the Chatter recommendations, such as user, group, file, article,
      record, and topic recommendations for the context user. Get the custom and static
      recommendations for the context user.

### getRecommendationsForUser(communityId, userId, contextAction, contextObjectId, channel, maxResults)

Get the Chatter recommendations, such as user, group, file, article, record, and topic recommendations for the context user. Get the custom and static recommendations for the context user.

#### API Version

36.0

#### Available to Guest Users

38.0

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Only article and file recommendations are available to guest users.

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.RecommendationCollection getRecommendationsForUser(String communityId, String userId, ConnectApi.RecommendationActionType contextAction, String contextObjectId, ConnectApi.RecommendationChannel channel, Integer maxResults)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the context user or the keyword me.

contextAction

Type: ConnectApi.​RecommendationActionType

Action that the context user just performed. Supported values are:

-   follow
-   view

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify null.

contextObjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the object that the context user just performed an action on.

-   If contextAction is follow, contextObjectId is a user ID, file ID, record ID, or topic ID.
-   If contextAction is view, contextObjectId is a user ID, file ID, group ID, record ID, or article ID (version 37.0 and later).

Use contextAction and contextObjectId together to get new recommendations based on the action just performed. If you don’t want recommendations based on a recent action, specify null.

channel

Type: [ConnectApi.RecommendationChannel](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#RecommendationChannelEnum)

A way to tie custom recommendations together. For example, display recommendations in specific places in the UI or show recommendations based on time of day or geographic locations. Values are:

-   CustomChannel1—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels. For example, community managers can use Experience Builder to determine where recommendations appear.
-   CustomChannel2—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   CustomChannel3—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   CustomChannel4—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   CustomChannel5—Custom recommendation channel. Not used by default. Work with your community manager to define custom channels.
-   DefaultChannel—Default recommendation channel. Recommendations appear by default on the Home and Question Detail pages of Customer Service and Partner Central Experience Builder templates. They also appear in the feed in the Salesforce mobile web and anywhere community managers add recommendations using Experience Builder.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of recommendation results; default is 10. Values must be from 1 to 99.

#### Return Value

Type: [ConnectApi.RecommendationCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_collection.htm#apex_connectapi_output_recommendation_collection "A list of Chatter, custom, and static recommendations.")

#### Usage

If you want to get recommendations based on a recent action performed, such as following a user, use contextAction and contextObjectId together. For example, if you just followed Pam, you specify follow for contextAction and Pam’s user ID for contextObjectId.

This method only recommends users who are followed by people who follow Pam. In this example, John follows Pam so the method returns a recommendation for you to follow Suzanne since John also follows Suzanne.

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetRecommendationsForUser(communityId, userId, contextAction, contextObjectId, channel, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Recommendations_static_methods.htm#apex_ConnectAPI_Recommendations_setTestGetRecommendationsForUser_1a "Register a ConnectApi.RecommendationCollection object to be returned when getRecommendationsForUser is called with matching parameters in a test context. Use the method with the same parameters or the code throws an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")