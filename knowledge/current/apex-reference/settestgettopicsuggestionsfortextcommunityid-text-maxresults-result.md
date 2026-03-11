---
title: "setTestGetTopicSuggestionsForText(communityId, text,
   maxResults, result)"
domain: apex-reference
topic: settestgettopicsuggestionsfortextcommunityid-text-maxresults-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [setTestGetTopicSuggestionsForText, communityId, text, maxResults, result, Register, ConnectApi.TopicSuggestionPage, object, returned, matching, ConnectApi.getTopicSuggestionsForText, method, called, test, context., same, parameters, receive, exception., API]
---

# setTestGetTopicSuggestionsForText(communityId, text,
   maxResults, result)

> Register a ConnectApi.TopicSuggestionPage object
      to be returned when the matching ConnectApi.getTopicSuggestionsForText method is called in a test context. Use the
      method with the same parameters or you receive an exception.

### setTestGetTopicSuggestionsForText(communityId, text, maxResults, result)

Register a ConnectApi.TopicSuggestionPage object to be returned when the matching ConnectApi.getTopicSuggestionsForText method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestGetTopicSuggestionsForText(String communityId, String text, Integer maxResults, ConnectApi.TopicSuggestionPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

text

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

String of text.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of topic suggestions that get returned. The default is 5. Value must be greater than 0 and less than or equal to 25.

result

Type: [ConnectApi.​TopicSuggestionPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicSuggestionPage.htm "Page of topic suggestions.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getTopicSuggestionsForText(communityId, text, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTopicSuggestionsForText "Get up to a specified number of suggested topics for a string of text.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")