---
title: "getTopicSuggestions(communityId, recordId,
      maxResults)"
domain: apex-reference
topic: gettopicsuggestionscommunityid-recordid-maxresults
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [getTopicSuggestions, communityId, recordId, maxResults, Get, specified, number, suggested, topics, record, feed, item., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getTopicSuggestions(communityId, recordId,
      maxResults)

> Get up to a specified number of suggested topics for a record or feed item.

### getTopicSuggestions(communityId, recordId, maxResults)

Get up to a specified number of suggested topics for a record or feed item.

#### API Version

29.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicSuggestionPage getTopicSuggestions(String communityId, String recordId, Integer maxResults)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a record or feed item.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of topic suggestions that get returned. The default is 5. Value must be greater than 0 and less than or equal to 25.

#### Return Value

Type: [ConnectApi.​TopicSuggestionPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicSuggestionPage.htm "Page of topic suggestions.")

#### Usage

Administrators must enable topics for objects before users can see suggested topics for records of that object type.

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetTopicSuggestions(communityId, recordId, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_setTestGetTopicSuggestions "Register a ConnectApi.TopicSuggestionPage object to be returned when the matching ConnectApi.getTopicSuggestions method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")