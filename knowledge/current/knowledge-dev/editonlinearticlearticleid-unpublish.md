---
title: "editOnlineArticle(articleId, unpublish)"
domain: knowledge-dev
topic: editonlinearticlearticleid-unpublish
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.411Z
estimatedTokens: 107
keywords: [editOnlineArticle, articleId, unpublish, Creates, draft, article, online, version, new, primary, unpublishes]
---

# editOnlineArticle(articleId, unpublish)

> Creates a draft article from the online version and returns the new draft primary version
  ID of the article. Also, unpublishes the online article, if unpublish is set to
   true.

# editOnlineArticle(articleId, unpublish)

Creates a draft article from the online version and returns the new draft primary version ID of the article. Also, unpublishes the online article, if unpublish is set to true.

## Signature

public static String editOnlineArticle(String articleId, Boolean unpublish)

## Parameters

articleId

Type: String

unpublish

Type: Boolean

## Return Value

Type: String

## Example

```

```

## Code Examples

```
String articleId = 'Insert article ID';
String id = KbManagement.PublishingService.editOnlineArticle (articleId, true);
```
