---
title: "assignDraftArticleTask(articleId, assigneeId, instructions, dueDate, sendEmailNotification)"
domain: knowledge-dev
topic: assigndraftarticletaskarticleid-assigneeid-instructions-duedate-sendemailnotific
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.386Z
estimatedTokens: 129
keywords: [assignDraftArticleTask, articleId, assigneeId, instructions, dueDate, sendEmailNotification, Assigns, review, task, draft, article]
---

# assignDraftArticleTask(articleId, assigneeId, instructions, dueDate, sendEmailNotification)

> Assigns a review task related to a draft article.

# assignDraftArticleTask(articleId, assigneeId, instructions, dueDate, sendEmailNotification)

Assigns a review task related to a draft article.

## Signature

public static Void assignDraftArticleTask(String articleId, String assigneeId, String instructions, Datetime dueDate, Boolean sendEmailNotification)

## Parameters

articleId

Type: String

assigneeId

Type: String

instructions

Type: String

dueDate

Type: Datetime

sendEmailNotification

Type: Boolean

## Return Value

Type: Void

## Example

```

```

## Code Examples

```
String articleId = 'Insert article ID';
String assigneeId = '';
String instructions = 'Please review this draft.';
Datetime dueDate = Datetime.newInstanceGmt(2012, 12, 1);
KbManagement.PublishingService.assignDraftArticleTask(articleId, assigneeId, instructions, dueDate, true);
```
