---
title: "setTestGetRecentlyTalkingAboutTopicsForGroup(communityId,
      groupId, result)"
domain: apex-reference
topic: settestgetrecentlytalkingabouttopicsforgroupcommunityid-groupid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [setTestGetRecentlyTalkingAboutTopicsForGroup, communityId, groupId, result, Register, ConnectApi.​TopicPage, object, returned, matching, ConnectApi.getRecentlyTalkingAboutTopicsForGroup, method, called, test, context., same, parameters, receive, exception., API, Version]
---

# setTestGetRecentlyTalkingAboutTopicsForGroup(communityId,
      groupId, result)

> Register a ConnectApi.​TopicPage object to
    be returned when the matching ConnectApi.getRecentlyTalkingAboutTopicsForGroup method is called in a test context.
    Use the method with the same parameters or you receive an exception.

### setTestGetRecentlyTalkingAboutTopicsForGroup(communityId, groupId, result)

Register a ConnectApi.​TopicPage object to be returned when the matching ConnectApi.getRecentlyTalkingAboutTopicsForGroup method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestGetRecentlyTalkingAboutTopicsForGroup(String communityId, String groupId, ConnectApi.​TopicPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

result

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getRecentlyTalkingAboutTopicsForGroup(communityId, groupId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getRecentlyTalkingAboutTopicsForGroup "Get up to five topics most recently used in a group.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")