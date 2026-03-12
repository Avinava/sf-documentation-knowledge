---
title: "Topic and Article Assignment Rules"
domain: chatterapi
topic: topic-and-article-assignment-rules
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.720Z
estimatedTokens: 254
keywords: [Topic, Article, Assignment, Rules, reassign, data, category]
---

# Topic and Article Assignment Rules

> Get, create, and reassign topic and article assignment rules by data
      category.

# Topic and Article Assignment Rules

Get, create, and reassign topic and article assignment rules by data category.

Resource

```

```

```

```

Available version

40.0

HTTP methods

GET, POST, PUT

Request body for POST and PUT

Use POST to create topic and article assignment rules. Use PUT to reassign topic and article assignment rules by deleting the existing rules and creating new rules.

Root XML tag

<topicNamesCollection>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| topicNames | String[] | A list of up to 10 topic names for a feed item or 100 topic names for a record. | Required | 35.0 |
| topicSuggestions | String[] | A list of suggested topics to assign to a record or feed item to improve future topic suggestions. | Optional | 37.0 |

Response body for GET, POST, and PUT

[Topic Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_collection.htm "Topic collection.")

## Code Examples

```
/connect/topics/data-category-rules/data-category-groups/dataCategoryGroup/data-categories/dataCategory
```

```
/connect/communities/communityId/topics/data-category-rules/data-category-groups/dataCategoryGroup/data-categories/dataCategory
```

```
{ "topicNames": ["API", "Connect REST API", "ConnectApi"]
}
```

## Related Topics

- Topic Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_collection.htm)
