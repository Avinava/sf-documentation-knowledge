---
title: "restoreOldVersion(articleId, versionNumber)"
domain: knowledge-dev
topic: restoreoldversionarticleid-versionnumber
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.424Z
estimatedTokens: 103
keywords: [restoreOldVersion, articleId, versionNumber, Creates, draft, article, online, archived, version]
---

# restoreOldVersion(articleId, versionNumber)

> Creates a draft article from an existing online article
based on the specified archived version of the article and returns
the article version ID.

# restoreOldVersion(articleId, versionNumber)

Creates a draft article from an existing online article based on the specified archived version of the article and returns the article version ID.

## Signature

public static String restoreOldVersion(String articleId, Integer versionNumber)

## Parameters

articleId

Type: String

versionNumber

Type: Integer

## Return Value

Type: String

## Example

```

```

## Code Examples

```
String articleId = 'Insert article ID';
String id = KbManagement.PublishingService.restoreOldVersion (articleId, 1);
```
