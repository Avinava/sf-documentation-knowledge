---
title: "Article Topic Assignment Job Input"
domain: chatterapi
topic: article-topic-assignment-job-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.972Z
estimatedTokens: 156
keywords: [Article, Topic, Assignment, Job, Input]
---

# Article Topic Assignment Job Input

> An article and topic assignment job.

# Article Topic Assignment Job Input

An article and topic assignment job.

Root XML tag

<ArticleTopicAssignmentJob>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| operation | String | Type of operation to perform on articles and topics. Values are:AssignTopicsToArticle—Assign topics to articles in a data category.UnassignTopicsFromArticle—Unassign topics from articles in a data category. | Required | 40.0 |
| topicNames | Topic Names Input | List of topic names to assign to or unassign from articles. | Required | 40.0 |

## Code Examples

```
{
   "operation": "AssignTopicsToArticle",
   "topicNames": ["API", "Connect REST API", "ConnectApi"]
}
```

## Related Topics

- Topic Names Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_topic_name_collection_input.htm)
