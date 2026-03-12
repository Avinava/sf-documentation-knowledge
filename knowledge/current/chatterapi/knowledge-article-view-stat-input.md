---
title: "Knowledge Article View Stat Input"
domain: chatterapi
topic: knowledge-article-view-stat-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.932Z
estimatedTokens: 125
keywords: [Knowledge, Article, View, Stat, Input]
---

# Knowledge Article View Stat Input

> Knowledge article view stat input.

# Knowledge Article View Stat Input

Knowledge article view stat input.

Root XML tag

<knowledgeArticleViewStat>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| articleOr​VersionId | String | ID of the knowledge article or knowledge article version to increase the view count by one.If you provide the ID of a knowledge article version, the parent article view count is increased. | Required | 48.0 |

## Code Examples

```
{
"articleOrVersionId": "ka230000000PCiy"
}
```
