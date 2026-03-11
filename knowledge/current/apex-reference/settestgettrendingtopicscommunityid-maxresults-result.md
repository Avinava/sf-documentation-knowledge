---
title: "setTestGetTrendingTopics(communityId, maxResults,
      result)"
domain: apex-reference
topic: settestgettrendingtopicscommunityid-maxresults-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [setTestGetTrendingTopics, communityId, maxResults, result, Register, ConnectApi.TopicPage, object, returned, matching, ConnectApi.getTrendingTopics, method, called, test, context., same, parameters, receive, exception., API, Version]
---

# setTestGetTrendingTopics(communityId, maxResults,
      result)

> Register a ConnectApi.TopicPage object to be
    returned when the matching ConnectApi.getTrendingTopics
    method is called in a test context. Use the method with the same parameters or you receive an
    exception.

### setTestGetTrendingTopics(communityId, maxResults, result)

Register a ConnectApi.TopicPage object to be returned when the matching ConnectApi.getTrendingTopics method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestGetTrendingTopics(String communityId, Integer maxResults, ConnectApi.TopicPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of topic suggestions that get returned. The default is 5. Value must be greater than 0 and less than or equal to 25.

result

Type: [ConnectApi.​TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm "Page of topics.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getTrendingTopics(communityId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_getTrendingTopics_2 "Get up to a specified number of trending topics for the org or Experience Cloud site.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")