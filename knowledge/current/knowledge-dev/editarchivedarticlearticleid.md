---
title: "editArchivedArticle(articleId)"
domain: knowledge-dev
topic: editarchivedarticlearticleid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:53.779Z
estimatedTokens: 80
keywords: [editArchivedArticle, articleId, Creates, draft, article, archived, primary, new]
---

> Creates a draft article from the archived primary version and returns the new draft
  primary version ID of the article.

# editArchivedArticle(articleId)

Creates a draft article from the archived primary version and returns the new draft primary version ID of the article.

## Signature

public static String editArchivedArticle(String articleId)

## Parameters

articleId

Type: String

## Return Value

Type: String

## Example

```

```

## Code Examples

```
String articleId = 'Insert article ID';
String id = KbManagement.PublishingService.editArchivedArticle(articleId);
```
