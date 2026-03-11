---
title: "setTestGetTopicSuggestionsForText(communityId, text,
   result)"
domain: apex-reference
topic: settestgettopicsuggestionsfortextcommunityid-text-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [setTestGetTopicSuggestionsForText, communityId, text, result, Register, ConnectApi.TopicSuggestionPage, object, returned, matching, ConnectApi.getTopicSuggestionsForText, method, called, test, context., same, parameters, receive, exception., API, Version]
---

# setTestGetTopicSuggestionsForText(communityId, text,
   result)

> Register a ConnectApi.TopicSuggestionPage object
      to be returned when the matching ConnectApi.getTopicSuggestionsForText method is called in a test context. Use the
      method with the same parameters or you receive an exception.

### setTestGetTopicSuggestionsForText(communityId, text, result)

Register a ConnectApi.TopicSuggestionPage object to be returned when the matching ConnectApi.getTopicSuggestionsForText method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestGetTopicSuggestionsForText(String communityId, String text, ConnectApi.TopicSuggestionPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

text

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

String of text.

result

Type: [ConnectApi.​TopicSuggestionPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicSuggestionPage.htm "Page of topic suggestions.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getTopicSuggestionsForText(communityId, text)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopicSuggestionsForText_2 "Get suggested topics for a string of text.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")