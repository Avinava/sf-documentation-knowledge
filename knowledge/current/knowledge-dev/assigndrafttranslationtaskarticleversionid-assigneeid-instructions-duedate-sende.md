---
title: "assignDraftTranslationTask(articleVersionId, assigneeId, instructions, dueDate, sendEmailNotification)"
domain: knowledge-dev
topic: assigndrafttranslationtaskarticleversionid-assigneeid-instructions-duedate-sende
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.389Z
estimatedTokens: 138
keywords: [assignDraftTranslationTask, articleVersionId, assigneeId, instructions, dueDate, sendEmailNotification, Assigns, review, task, draft, translation]
---

# assignDraftTranslationTask(articleVersionId, assigneeId, instructions, dueDate, sendEmailNotification)

> Assigns a review task related to a draft translation.

# assignDraftTranslationTask(articleVersionId, assigneeId, instructions, dueDate, sendEmailNotification)

Assigns a review task related to a draft translation.

## Signature

public static Void assignDraftTranslationTask(String articleVersionId, String assigneeId, String instructions, Datetime dueDate, Boolean sendEmailNotification)

## Parameters

articleVersionId

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
String assigneeId = 'Insert assignee ID';
String instructions = 'Please review this draft.';
Datetime dueDate = Datetime.newInstanceGmt(2012, 12, 1);
KbManagement.PublishingService.assignDraftTranslationTask(articleId, assigneeId, instructions, dueDate, true);
```
