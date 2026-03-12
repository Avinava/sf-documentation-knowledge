---
title: "Knowledge Class"
domain: apex-reference
topic: knowledge-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:18.882Z
estimatedTokens: 2696
namespace: ConnectApi
keywords: [Knowledge, trending, articles, topic, Experience, Cloud, site, getTopViewedArticlesForTopic, communityId, topicId, maxResults, API, Version, Guest, Users]
---

# Knowledge Class

> Get the trending articles for a topic in an Experience Cloud
      site.

**Namespace:** `ConnectApi`

# Knowledge Class

Get information about trending articles in Experience Cloud sites.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Knowledge Methods

These methods are for Knowledge. All methods are static.

-   **[getTopViewedArticlesForTopic(communityId, topicId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm#apex_ConnectAPI_Knowledge_getTopicTopViewedArticles_1)**
    Get the top viewed articles for a topic.
-   **[getTrendingArticles(communityId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm#apex_ConnectAPI_Knowledge_getTrendingArticles_1)**
    Get trending articles for an Experience Cloud site.
-   **[getTrendingArticlesForTopic(communityId, topicId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm#apex_ConnectAPI_Knowledge_getTrendingArticlesForTopic_1)**
    Get the trending articles for a topic in an Experience Cloud site.

### getTopViewedArticlesForTopic(communityId, topicId, maxResults)

Get the top viewed articles for a topic.

#### API Version

41.0

#### Available to Guest Users

41.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.KnowledgeArticleVersionCollection getTopViewedArticlesForTopic(String communityId, String topicId, Integer maxResults)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the topic.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The maximum number of articles returned for each topic ID. Values can be from 1 to 25. The default value is 5.

#### Return Value

Type: [ConnectApi.KnowledgeArticleVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_knowledge_article_version_collection.htm#apex_connectapi_output_knowledge_article_version_collection "A collection of knowledge article versions.")

### getTrendingArticles(communityId, maxResults)

Get trending articles for an Experience Cloud site.

#### API Version

36.0

#### Available to Guest Users

36.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.KnowledgeArticleVersionCollection getTrendingArticles(String communityId, Integer maxResults)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

maxResults

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The maximum number of articles returned. Values can be from 0 to 25. Default is 5.

#### Return Value

Type: [ConnectApi.KnowledgeArticleVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_knowledge_article_version_collection.htm "A collection of knowledge article versions.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetTrendingArticles(communityId, maxResults, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm#apex_ConnectAPI_Knowledge_setTestGetTrendingArticles_1 "Register a ConnectApi.KnowledgeVersionArticleCollection object to be returned when the matching ConnectApi.getTrendingArticles method is called in a test context. Use the method with the same parameters or you receive an exception.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


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


## Knowledge Test Methods

These test methods are for Knowledge. All methods are static.

For information about using these methods to test your ConnectApi code, see [Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm).

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


### setTestGetTrendingArticlesForTopic(communityId, topicId, maxResults, result)

Register a ConnectApi.KnowledgeVersionArticleCollection object to be returned when the matching ConnectApi.getTrendingArticlesForTopic method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

36.0

#### Signature

public static Void setTestGetTrendingArticlesForTopic(String communityId, String topicId, Integer maxResults, ConnectApi.KnowledgeArticleVersionCollection result)

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

result

Type: [ConnectApi.KnowledgeArticleVersionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_knowledge_article_version_collection.htm "A collection of knowledge article versions.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getTrendingArticlesForTopic(communityId, topicId, maxResults)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm#apex_ConnectAPI_Knowledge_getTrendingArticlesForTopic_1 "Get the trending articles for a topic in an Experience Cloud site.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getTopViewedArticlesForTopic(communityId, topicId, maxResults) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm)
- getTrendingArticles(communityId, maxResults) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm)
- getTrendingArticlesForTopic(communityId, topicId, maxResults) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.KnowledgeArticleVersionCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_knowledge_article_version_collection.htm)
- setTestGetTrendingArticles(communityId, maxResults, result) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm)
- setTestGetTrendingArticlesForTopic(communityId, topicId, maxResults, result) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Knowledge_static_methods.htm)
