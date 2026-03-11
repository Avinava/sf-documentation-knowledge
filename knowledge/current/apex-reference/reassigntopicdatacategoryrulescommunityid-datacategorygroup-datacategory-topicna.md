---
title: "reassignTopicDataCategoryRules(communityId, dataCategoryGroup,
      dataCategory, topicNames)"
domain: apex-reference
topic: reassigntopicdatacategoryrulescommunityid-datacategorygroup-datacategory-topicna
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [reassignTopicDataCategoryRules, communityId, dataCategoryGroup, dataCategory, topicNames, Reassign, topic, article, assignment, rules, data, category, deleting, existing, creating, new, rules., API, Version, Requires]
---

# reassignTopicDataCategoryRules(communityId, dataCategoryGroup,
      dataCategory, topicNames)

> Reassign topic and article assignment rules by data category by
      deleting the existing rules and creating new rules.

### reassignTopicDataCategoryRules(communityId, dataCategoryGroup, dataCategory, topicNames)

Reassign topic and article assignment rules by data category by deleting the existing rules and creating new rules.

#### API Version

40.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage reassignTopicDataCategoryRules(String communityId, String dataCategoryGroup, String dataCategory, ConnectApi.TopicNamesInput topicNames)

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

A ConnectApi.TopicNamesInput object with the names of topics to reassign to articles in a data category.

#### Return Value

Type: [ConnectApi.TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm#apex_connectapi_output_topicPage "Page of topics.")