---
title: "getRelatedTopics(communityId, topicId)"
domain: apex-reference
topic: getrelatedtopicscommunityid-topicid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [getRelatedTopics, communityId, topicId, Get, five, topics, most, closely, related, topic., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# getRelatedTopics(communityId, topicId)

> Get up to five topics most closely related to a topic.

### getRelatedTopics(communityId, topicId)

Get up to five topics most closely related to a topic.

Two topics that are assigned to the same feed item at least three times are related.

#### API Version

29.0

#### Available to Guest Users

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getRelatedTopics(String communityId, String topicId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a topic.

#### Return Value

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetRelatedTopics(communityId, topicId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_setTestGetRelatedTopics "Register a ConnectApi.TopicPage object to be returned when the matching ConnectApi.getRelatedTopics method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")