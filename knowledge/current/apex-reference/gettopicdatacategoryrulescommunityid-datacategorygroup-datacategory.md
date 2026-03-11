---
title: "getTopicDataCategoryRules(communityId, dataCategoryGroup,
      dataCategory)"
domain: apex-reference
topic: gettopicdatacategoryrulescommunityid-datacategorygroup-datacategory
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.887Z
keywords: [getTopicDataCategoryRules, communityId, dataCategoryGroup, dataCategory, Get, topic, article, assignment, rules, data, category., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getTopicDataCategoryRules(communityId, dataCategoryGroup,
      dataCategory)

> Get topic and article assignment rules by data
    category.

### getTopicDataCategoryRules(communityId, dataCategoryGroup, dataCategory)

Get topic and article assignment rules by data category.

#### API Version

40.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.TopicPage getTopicDataCategoryRules(String communityId, String dataCategoryGroup, String dataCategory)

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

#### Return Value

Type: [ConnectApi.TopicPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_topicPage.htm#apex_connectapi_output_topicPage "Page of topics.")