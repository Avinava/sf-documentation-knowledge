---
title: "getRecentlyTalkingAboutTopicsForGroup(communityId,
   groupId)"
domain: apex-reference
topic: getrecentlytalkingabouttopicsforgroupcommunityid-groupid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [getRecentlyTalkingAboutTopicsForGroup, communityId, groupId, Get, five, topics, most, recently, used, group., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# getRecentlyTalkingAboutTopicsForGroup(communityId,
   groupId)

> Get up to five topics most recently used in a group.

### getRecentlyTalkingAboutTopicsForGroup(communityId, groupId)

Get up to five topics most recently used in a group.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.TopicPage getRecentlyTalkingAboutTopicsForGroup(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetRecentlyTalkingAboutTopicsForGroup(communityId, groupId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_setTestGetRecentlyTalkingAboutTopicsForGroup "Register a ConnectApi.​TopicPage object to be returned when the matching ConnectApi.getRecentlyTalkingAboutTopicsForGroup method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")