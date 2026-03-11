---
title: "getTopViewedArticlesForTopic(communityId, topicId,
      maxResults)"
domain: apex-reference
topic: gettopviewedarticlesfortopiccommunityid-topicid-maxresults
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.152Z
keywords: [getTopViewedArticlesForTopic, communityId, topicId, maxResults, Get, top, viewed, articles, topic., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getTopViewedArticlesForTopic(communityId, topicId,
      maxResults)

> Get the top viewed articles for a topic.

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