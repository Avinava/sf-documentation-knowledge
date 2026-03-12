---
title: "deleteArchivedArticleVersion(articleId, versionNumber)"
domain: knowledge-dev
topic: deletearchivedarticleversionarticleid-versionnumber
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.401Z
estimatedTokens: 86
keywords: [deleteArchivedArticleVersion, articleId, versionNumber, Deletes, specific, archived, version, published, article]
---

# deleteArchivedArticleVersion(articleId, versionNumber)

> Deletes a specific archived version of a published article.

# deleteArchivedArticleVersion(articleId, versionNumber)

Deletes a specific archived version of a published article.

## Signature

public static Void deleteArchivedArticleVersion(String articleId, Integer versionNumber)

## Parameters

articleId

Type: String

versionNumber

Type: Integer

## Return Value

Type: Void

## Example

```

```

## Code Examples

```
String articleId = 'Insert article ID';
Integer versionNumber = 1;
KbManagement.PublishingService.deleteArchivedArticleVersion(articleId, versionNumber);
```
