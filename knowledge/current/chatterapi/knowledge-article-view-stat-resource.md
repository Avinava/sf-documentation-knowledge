---
title: "Knowledge Article View Stat Resource"
domain: chatterapi
topic: knowledge-article-view-stat-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.616Z
estimatedTokens: 252
keywords: [Knowledge, Article, View, Stat, Resource, Increase, count]
---

# Knowledge Article View Stat Resource

> Increase the view count of a knowledge article by
    one.

# Knowledge Article View Stat Resource

Increase the view count of a knowledge article by one.

Resource

```

```

```

```

Available version

48.0

HTTP methods

PATCH

Request body for PATCH

Root XML tag

<knowledgeArticleViewStat>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| articleOr​VersionId | String | ID of the knowledge article or knowledge article version to increase the view count by one.If you provide the ID of a knowledge article version, the parent article view count is increased. | Required | 48.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| articleOr​VersionId | String | ID of the knowledge article or knowledge article version to increase the view count by one.If you provide the ID of a knowledge article version, the parent article view count is increased. | Required | 48.0 |

## Code Examples

```
/connect/knowledge/article/view-stat
```

```
/connect/communities/communityId/knowledge/article/view-stat
```

```
{
"articleOrVersionId": "ka230000000PCiy"
}
```
