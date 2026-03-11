---
title: "setTestGetRecentlyTalkingAboutTopicsForUser(communityId,
      userId, result)"
domain: apex-reference
topic: settestgetrecentlytalkingabouttopicsforusercommunityid-userid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [setTestGetRecentlyTalkingAboutTopicsForUser, communityId, userId, result, Register, ConnectApi.​TopicPage, object, returned, matching, ConnectApi.getRecentlyTalkingAboutTopicsForUser, method, called, test, context., same, parameters, receive, exception., API, Version]
---

# setTestGetRecentlyTalkingAboutTopicsForUser(communityId,
      userId, result)

> Register a ConnectApi.​TopicPage object to
    be returned when the matching ConnectApi.getRecentlyTalkingAboutTopicsForUser method is called in a test context.
    Use the method with the same parameters or you receive an exception.

### setTestGetRecentlyTalkingAboutTopicsForUser(communityId, userId, result)

Register a ConnectApi.​TopicPage object to be returned when the matching ConnectApi.getRecentlyTalkingAboutTopicsForUser method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestGetRecentlyTalkingAboutTopicsForUser(String communityId, String userId, ConnectApi.TopicPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a user.

result

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

Specify the test topics page.

#### Return Value

Type: Void

#### See Also

-   [getRecentlyTalkingAboutTopicsForUser(communityId, userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getRecentlyTalkingAboutTopicsForUser "Get up to five topics most recently used by a user.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")