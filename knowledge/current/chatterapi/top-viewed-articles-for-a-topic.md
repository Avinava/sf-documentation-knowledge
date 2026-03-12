---
title: "Top Viewed Articles for a Topic"
domain: chatterapi
topic: top-viewed-articles-for-a-topic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.619Z
estimatedTokens: 165
keywords: [Top, Viewed, Articles, Topic]
---

# Top Viewed Articles for a Topic

> Get the top viewed articles for a topic.

# Top Viewed Articles for a Topic

Get the top viewed articles for a topic.

Resource

```

```

```

```

Available version

41.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| maxResults | Integer | The maximum number of articles returned for each topic ID. Values can be from 1 to 25. The default value is 5. | Optional | 41.0 |

Response body for GET

[Knowledge Article Version Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_knowledge_article_version_collection.htm "A collection of knowledge article versions.")

## Code Examples

```
/connect/topics/topicId/top-viewed-articles
```

```
/connect/communities/communityId/topics/topicId/top-viewed-articles
```

## Related Topics

- Knowledge Article Version Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_knowledge_article_version_collection.htm)
