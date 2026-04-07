---
title: "deleteDraftArticle(articleId)"
domain: knowledge-dev
topic: deletedraftarticlearticleid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:53.770Z
estimatedTokens: 55
keywords: [deleteDraftArticle, articleId, Deletes, draft, article]
---

> Deletes a draft article.

# deleteDraftArticle(articleId)

Deletes a draft article.

## Signature

public static Void deleteDraftArticle(String articleId)

## Parameters

articleId

Type: String

## Return Value

Type: Void

## Example

```

```

## Code Examples

```
String articleId = 'Insert article ID';
KbManagement.PublishingService.deleteDraftArticle(articleId);
```
