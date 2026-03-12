---
title: "ConnectApi.TopicNamesInput"
domain: apex-reference
topic: connectapitopicnamesinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:25.821Z
estimatedTokens: 289
keywords: [ConnectApi.TopicNamesInput, topic, replace, currently, assigned, topics, suggested, assign]
---

# ConnectApi.TopicNamesInput

> A list of topic names to replace currently assigned topics. Also a
      list of suggested topics to assign.

# ConnectApi.TopicNamesInput

A list of topic names to replace currently assigned topics. Also a list of suggested topics to assign.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| topicNames | List<String> | A list of up to 10 topic names for a feed item or 100 topic names for a record. | Required | 35.0 |
| topicSuggestions | List<String> | A list of suggested topics to assign to a record or feed item to improve future topic suggestions. | Optional | 37.0 |

#### See Also

-   [reassignTopicsByName(communityId, recordId, topicNames)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm#apex_ConnectAPI_Topics_reassignTopicsByName "Reassign all the topics on a record or feed item, that is, remove all the assigned topics on a record or feed item and add topics. Optionally, provide a list of suggested topics to assign to a record or feed item to improve future topic suggestions.")

-   [ConnectApi.ArticleTopicAssignmentJobInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_article_topic_assignment_job.htm "An article and topic assignment job.")

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- reassignTopicsByName(communityId, recordId, topicNames) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Topics_static_methods.htm)
- ConnectApi.ArticleTopicAssignmentJobInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_article_topic_assignment_job.htm)
