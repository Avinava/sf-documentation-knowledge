---
title: "setTestGetTopicSuggestions(communityId, recordId,
   result)"
domain: apex-reference
topic: settestgettopicsuggestionscommunityid-recordid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [setTestGetTopicSuggestions, communityId, recordId, result, Register, ConnectApi.TopicSuggestionPage, object, returned, matching, ConnectApi.getTopicSuggestions, method, called, test, context., same, parameters, receive, exception., API, Version]
---

# setTestGetTopicSuggestions(communityId, recordId,
   result)

> Register a ConnectApi.TopicSuggestionPage object
      to be returned when the matching ConnectApi.getTopicSuggestions method is called in a test context. Use the method
      with the same parameters or you receive an exception.

### setTestGetTopicSuggestions(communityId, recordId, result)

Register a ConnectApi.TopicSuggestionPage object to be returned when the matching ConnectApi.getTopicSuggestions method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestGetTopicSuggestions(String communityId, String recordId, ConnectApi.​TopicSuggestionPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a record or feed item.

result

Type: [ConnectApi.​TopicSuggestionPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicSuggestionPage.htm "Page of topic suggestions.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getTopicSuggestions(communityId, recordId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopicSuggestions_2 "Get suggested topics for a record or feed item.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")