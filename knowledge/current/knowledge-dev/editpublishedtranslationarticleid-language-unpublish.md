---
title: "editPublishedTranslation(articleId, language, unpublish)"
domain: knowledge-dev
topic: editpublishedtranslationarticleid-language-unpublish
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.414Z
estimatedTokens: 125
keywords: [editPublishedTranslation, articleId, language, unpublish, Creates, draft, version, online, translation, specific, new, primary, article, unpublishes]
---

# editPublishedTranslation(articleId, language, unpublish)

> Creates a draft version of the online translation for a specific language and returns the
  new draft primary version ID of the article. Also, unpublishes the article, if set to true.

# editPublishedTranslation(articleId, language, unpublish)

Creates a draft version of the online translation for a specific language and returns the new draft primary version ID of the article. Also, unpublishes the article, if set to true.

## Signature

public static String editPublishedTranslation(String articleId, String language, Boolean unpublish)

## Parameters

articleId

Type: String

language

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
String language = 'fr';
String id = KbManagement.PublishingService.editPublishedTranslation(articleId, language, true);
```
