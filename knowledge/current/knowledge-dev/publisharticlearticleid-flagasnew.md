---
title: "publishArticle(articleId, flagAsNew)"
domain: knowledge-dev
topic: publisharticlearticleid-flagasnew
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.420Z
estimatedTokens: 85
keywords: [publishArticle, articleId, flagAsNew, Publishes, article, published, major, version]
---

# publishArticle(articleId, flagAsNew)

> Publishes an article. If flagAsNew is
set to true, the article is
published as a major version.

# publishArticle(articleId, flagAsNew)

Publishes an article. If flagAsNew is set to true, the article is published as a major version.

## Signature

public static Void publishArticle(String articleId, Boolean flagAsNew)

## Parameters

articleId

Type: String

flagAsNew

Type: Boolean

## Return Value

Type: Void

## Example

```

```

## Code Examples

```
String articleId = 'Insert article ID';
KbManagement.PublishingService.publishArticle(articleId, true);
```
