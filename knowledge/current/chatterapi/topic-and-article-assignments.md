---
title: "Topic and Article Assignments"
domain: chatterapi
topic: topic-and-article-assignments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.724Z
estimatedTokens: 226
keywords: [Topic, Article, Assignments, Assign, topics, articles, unassign, data, category]
---

# Topic and Article Assignments

> Assign topics to articles and unassign topics from articles in a
      data category.

# Topic and Article Assignments

Assign topics to articles and unassign topics from articles in a data category.

Resource

```

```

```

```

Available version

40.0

HTTP methods

POST

Request body for POST

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

Response body for POST

[Topic Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_collection.htm "Topic collection.")

## Code Examples

```
/connect/topics/data-category-groups/dataCategoryGroup/data-categories/dataCategory/articles
```

```
/connect/communities/communityId/topics/data-category-groups/dataCategoryGroup/data-categories/dataCategory/articles
```

```
{
   "operation": "AssignTopicsToArticle",
   "topicNames": ["API", "Connect REST API", "ConnectApi"]
}
```

## Related Topics

- Topic Names Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_topic_name_collection_input.htm)
- Topic Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_collection.htm)
