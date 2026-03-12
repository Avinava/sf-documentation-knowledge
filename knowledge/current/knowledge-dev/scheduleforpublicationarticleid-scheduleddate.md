---
title: "scheduleForPublication(articleId, scheduledDate)"
domain: knowledge-dev
topic: scheduleforpublicationarticleid-scheduleddate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.426Z
estimatedTokens: 100
keywords: [scheduleForPublication, articleId, scheduledDate, Schedules, article, publication, major, version, date, published, immediately]
---

# scheduleForPublication(articleId, scheduledDate)

> Schedules the article for publication as a major version.
If the specified date is null, the article is published immediately.

# scheduleForPublication(articleId, scheduledDate)

Schedules the article for publication as a major version. If the specified date is null, the article is published immediately.

## Signature

public static Void scheduleForPublication(String articleId, Datetime scheduledDate)

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
KbManagement.PublishingService.scheduleForPublication(articleId, scheduledDate);
```
