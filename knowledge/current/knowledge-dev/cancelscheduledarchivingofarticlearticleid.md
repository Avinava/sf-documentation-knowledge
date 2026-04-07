---
title: "cancelScheduledArchivingOfArticle(articleId)"
domain: knowledge-dev
topic: cancelscheduledarchivingofarticlearticleid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:04:04.461Z
estimatedTokens: 70
keywords: [cancelScheduledArchivingOfArticle, articleId, Cancels, scheduled, archiving, online, article]
---

# cancelScheduledArchivingOfArticle(articleId)

> Cancels the scheduled archiving of an online article.

# cancelScheduledArchivingOfArticle(articleId)

Cancels the scheduled archiving of an online article.

## Signature

public static Void cancelScheduledArchivingOfArticle(String articleId)

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
KbManagement.PublishingService.cancelScheduledArchivingOfArticle (articleId);
```
