---
title: "createTopicDataCategoryRules(communityId, dataCategoryGroup,
      dataCategory, topicNames)"
domain: apex-reference
topic: createtopicdatacategoryrulescommunityid-datacategorygroup-datacategory-topicname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [createTopicDataCategoryRules, communityId, dataCategoryGroup, dataCategory, topicNames, Create, topic, article, assignment, rules, data, category., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# createTopicDataCategoryRules(communityId, dataCategoryGroup,
      dataCategory, topicNames)

> Create topic and article assignment rules by data
    category.

### createTopicDataCategoryRules(communityId, dataCategoryGroup, dataCategory, topicNames)

Create topic and article assignment rules by data category.

#### API Version

40.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage createTopicDataCategoryRules(String communityId, String dataCategoryGroup, String dataCategory, ConnectApi.TopicNamesInput topicNames)

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

topicNames

Type: [ConnectApi.TopicNamesInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_topic_name_collection.htm "A list of topic names to replace currently assigned topics. Also a list of suggested topics to assign.")

A ConnectApi.TopicNamesInput object with the names of topics to assign to articles in a data category.

#### Return Value

Type: [ConnectApi.TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm#apex_connectapi_output_topicPage "Page of topics.")