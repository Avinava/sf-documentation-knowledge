---
title: "deleteArchivedArticle(articleId)"
domain: knowledge-dev
topic: deletearchivedarticlearticleid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:53.760Z
estimatedTokens: 58
keywords: [deleteArchivedArticle, articleId, Deletes, archived, article]
---

> Deletes an archived article.

# deleteArchivedArticle(articleId)

Deletes an archived article.

## Signature

public static Void deleteArchivedArticle(String articleId)

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
KbManagement.PublishingService.deleteArchivedArticle(articleId);
```
