---
title: "setTestGetTrendingArticles(communityId, maxResults,
      result)"
domain: apex-reference
topic: settestgettrendingarticlescommunityid-maxresults-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.152Z
keywords: [setTestGetTrendingArticles, communityId, maxResults, result, Register, ConnectApi.KnowledgeVersionArticleCollection, object, returned, matching, ConnectApi.getTrendingArticles, method, called, test, context., same, parameters, receive, exception., API, Version]
---

# setTestGetTrendingArticles(communityId, maxResults,
      result)

> Register a ConnectApi.KnowledgeVersionArticleCollection object to be returned when the matching
      ConnectApi.getTrendingArticles method is called in a
    test context. Use the method with the same parameters or you receive an exception.

### setTestGetTrendingArticles(communityId, maxResults, result)

Register a ConnectApi.KnowledgeVersionArticleCollection object to be returned when the matching ConnectApi.getTrendingArticles method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

36.0

#### Signature

public static Void setTestGetTrendingArticles(String communityId, Integer maxResults, ConnectApi.KnowledgeArticleVersionCollection result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The maximum number of articles returned. Values can be from 0 to 25. Default is 5.

result

Type: [ConnectApi.KnowledgeArticleVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_knowledge_article_version_collection.htm "A collection of knowledge article versions.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getTrendingArticles(communityId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm#apex_ConnectAPI_Knowledge_getTrendingArticles_1 "Get trending articles for an Experience Cloud site.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")