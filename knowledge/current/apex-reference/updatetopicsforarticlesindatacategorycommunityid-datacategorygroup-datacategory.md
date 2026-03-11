---
title: "updateTopicsForArticlesInDataCategory(communityId,
      dataCategoryGroup, dataCategory, articleTopicAssignmentJob)"
domain: apex-reference
topic: updatetopicsforarticlesindatacategorycommunityid-datacategorygroup-datacategory-
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [updateTopicsForArticlesInDataCategory, communityId, dataCategoryGroup, dataCategory, articleTopicAssignmentJob, Assign, topics, articles, unassign, data, category., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateTopicsForArticlesInDataCategory(communityId,
      dataCategoryGroup, dataCategory, articleTopicAssignmentJob)

> Assign topics to articles and unassign topics from articles in a data
      category.

### updateTopicsForArticlesInDataCategory(communityId, dataCategoryGroup, dataCategory, articleTopicAssignmentJob)

Assign topics to articles and unassign topics from articles in a data category.

#### API Version

40.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage updateTopicsForArticlesInDataCategory(String communityId, String dataCategoryGroup, String dataCategory, ConnectApi.ArticleTopicAssignmentJobInput articleTopicAssignmentJob)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

dataCategoryGroup

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The data category group used by articles.

dataCategory

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The data category used by articles.

articleTopicAssignmentJob

Type: [ConnectApi.ArticleTopicAssignmentJobInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_article_topic_assignment_job.htm#apex_connectapi_input_article_topic_assignment_job "An article and topic assignment job.")

A ConnectApi.ArticleTopicAssignmentJobInput object that indicates the operation to take on which topics.

#### Return Value

Type: [ConnectApi.TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm#apex_connectapi_output_topicPage "Page of topics.")