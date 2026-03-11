---
title: "setTestGetRelatedTopics(communityId, topicId,
    result)"
domain: apex-reference
topic: settestgetrelatedtopicscommunityid-topicid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [setTestGetRelatedTopics, communityId, topicId, result, Register, ConnectApi.TopicPage, object, returned, matching, ConnectApi.getRelatedTopics, method, called, test, context., same, parameters, receive, exception., API, Version]
---

# setTestGetRelatedTopics(communityId, topicId,
    result)

> Register a ConnectApi.TopicPage object to be
    returned when the matching ConnectApi.getRelatedTopics
    method is called in a test context. Use the method with the same parameters or you receive an
    exception.

### setTestGetRelatedTopics(communityId, topicId, result)

Register a ConnectApi.TopicPage object to be returned when the matching ConnectApi.getRelatedTopics method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestGetRelatedTopics(String communityId, String topicId, ConnectApi.TopicPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a topic.

result

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getRelatedTopics(communityId, topicId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getRelatedTopics "Get up to five topics most closely related to a topic.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")