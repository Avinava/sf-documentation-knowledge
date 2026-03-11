---
title: "ConnectApi.ArticleTopicAssignmentJobInput"
domain: apex-reference
topic: connectapiarticletopicassignmentjobinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:36.770Z
keywords: [ConnectApi.ArticleTopicAssignmentJobInput]
---

# ConnectApi.ArticleTopicAssignmentJobInput

# ConnectApi.ArticleTopicAssignmentJobInput

An article and topic assignment job.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| operation | ConnectApi.​ArticleTopicJobType | Type of operation to perform on articles and topics. Values are:AssignTopicsToArticle—Assign topics to articles in a data category.UnassignTopicsFromArticle—Unassign topics from articles in a data category. | Required | 40.0 |
| topicNames | ConnectApi.TopicNamesInput | List of topic names to assign to or unassign from articles. | Required | 40.0 |