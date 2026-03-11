---
title: "getTrendingArticlesForTopic(communityId, topicId,
      maxResults)"
domain: apex-reference
topic: gettrendingarticlesfortopiccommunityid-topicid-maxresults
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.152Z
keywords: [getTrendingArticlesForTopic, communityId, topicId, maxResults, Get, trending, articles, topic, Experience, Cloud, site., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters]
---

# getTrendingArticlesForTopic(communityId, topicId,
      maxResults)

> Get the trending articles for a topic in an Experience Cloud
      site.

### getTrendingArticlesForTopic(communityId, topicId, maxResults)

Get the trending articles for a topic in an Experience Cloud site.

#### API Version

36.0

#### Available to Guest Users

36.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.KnowledgeArticleVersionCollection getTrendingArticlesForTopic(String communityId, String topicId, Integer maxResults)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the topic.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The maximum number of articles returned. Values can be from 0 to 25. Default is 5.

#### Return Value

Type: [ConnectApi.KnowledgeArticleVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_knowledge_article_version_collection.htm "A collection of knowledge article versions.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetTrendingArticlesForTopic(communityId, topicId, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm#apex_ConnectAPI_Knowledge_setTestGetTrendingArticlesForTopic_1 "Register a ConnectApi.KnowledgeVersionArticleCollection object to be returned when the matching ConnectApi.getTrendingArticlesForTopic method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")