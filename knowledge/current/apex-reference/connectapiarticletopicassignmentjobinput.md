---
title: "ConnectApi.ArticleTopicAssignmentJobInput"
domain: apex-reference
topic: connectapiarticletopicassignmentjobinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:24.587Z
estimatedTokens: 148
keywords: [article, topic, assignment, job]
---

# ConnectApi.ArticleTopicAssignmentJobInput

> An article and topic assignment job.

# ConnectApi.ArticleTopicAssignmentJobInput

An article and topic assignment job.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| operation | ConnectApi.​ArticleTopicJobType | Type of operation to perform on articles and topics. Values are:AssignTopicsToArticle—Assign topics to articles in a data category.UnassignTopicsFromArticle—Unassign topics from articles in a data category. | Required | 40.0 |
| topicNames | ConnectApi.TopicNamesInput | List of topic names to assign to or unassign from articles. | Required | 40.0 |

## Related Topics

- ConnectApi.​ArticleTopicJobType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.TopicNamesInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_topic_name_collection.htm)
