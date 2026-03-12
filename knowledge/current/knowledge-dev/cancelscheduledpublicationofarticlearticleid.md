---
title: "cancelScheduledPublicationOfArticle(articleId)"
domain: knowledge-dev
topic: cancelscheduledpublicationofarticlearticleid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.394Z
estimatedTokens: 71
keywords: [cancelScheduledPublicationOfArticle, articleId, Cancels, scheduled, publication, draft, article]
---

# cancelScheduledPublicationOfArticle(articleId)

> Cancels the scheduled publication of a draft article.

# cancelScheduledPublicationOfArticle(articleId)

Cancels the scheduled publication of a draft article.

## Signature

public static Void cancelScheduledPublicationOfArticle(String articleId)

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
KbManagement.PublishingService.cancelScheduledPublicationOfArticle (articleId);
```
