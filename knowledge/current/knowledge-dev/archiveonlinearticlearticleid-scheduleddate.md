---
title: "archiveOnlineArticle(articleId, scheduledDate)"
domain: knowledge-dev
topic: archiveonlinearticlearticleid-scheduleddate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.383Z
estimatedTokens: 112
keywords: [archiveOnlineArticle, articleId, scheduledDate, Archives, online, version, article, archived, immediately, Otherwise, scheduled, date]
---

# archiveOnlineArticle(articleId, scheduledDate)

> Archives an online version of an article. If the specified
scheduledDate is null, the article is archived immediately. Otherwise,
it archives the article on the scheduled date.

# archiveOnlineArticle(articleId, scheduledDate)

Archives an online version of an article. If the specified scheduledDate is null, the article is archived immediately. Otherwise, it archives the article on the scheduled date.

## Signature

public static Void archiveOnlineArticle(String articleId, Datetime scheduledDate)

## Parameters

articleId

Type: String

scheduledDate

Type: Datetime

## Return Value

Type: Void

## Example

```

```

## Code Examples

```
String articleId = 'Insert article ID';
Datetime scheduledDate = Datetime.newInstanceGmt(2012, 12,1,13,30,0);
KbManagement.PublishingService.archiveOnlineArticle(articleId, scheduledDate);
```
