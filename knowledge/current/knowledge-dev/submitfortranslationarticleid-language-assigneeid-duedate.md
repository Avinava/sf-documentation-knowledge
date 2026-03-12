---
title: "submitForTranslation(articleId, language, assigneeId, dueDate)"
domain: knowledge-dev
topic: submitfortranslationarticleid-language-assigneeid-duedate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.431Z
estimatedTokens: 133
keywords: [submitForTranslation, articleId, language, assigneeId, dueDate, Submits, article, translation, assigns, user, due, date, submittal, new, draft]
---

# submitForTranslation(articleId, language, assigneeId, dueDate)

> Submits an article for translation to the specified language.
Also assigns the specified user and due date to the submittal and
returns new ID of the draft translation.

# submitForTranslation(articleId, language, assigneeId, dueDate)

Submits an article for translation to the specified language. Also assigns the specified user and due date to the submittal and returns new ID of the draft translation.

## Signature

public static String submitForTranslation(String articleId, String language, String assigneeId, Datetime dueDate)

## Parameters

articleId

Type: String

language

Type: String

assigneeId

Type: String

dueDate

Type: Datetime

## Return Value

Type: String

## Example

```

```

## Code Examples

```
String articleId = 'Insert article ID';
String language = 'fr';
String assigneeId = 'Insert assignee ID';
Datetime dueDate = Datetime.newInstanceGmt(2012, 12,1);
String id = KbManagement.PublishingService.submitForTranslation(articleId, language, assigneeId, dueDate);
```
