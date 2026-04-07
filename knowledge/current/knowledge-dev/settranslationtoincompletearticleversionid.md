---
title: "setTranslationToIncomplete(articleVersionId)"
domain: knowledge-dev
topic: settranslationtoincompletearticleversionid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:04:04.528Z
estimatedTokens: 79
keywords: [setTranslationToIncomplete, articleVersionId, draft, translation, ready, publication, back, “in, progress”, status]
---

# setTranslationToIncomplete(articleVersionId)

> Sets a draft translation that is ready for publication
back to “in progress” status.

# setTranslationToIncomplete(articleVersionId)

Sets a draft translation that is ready for publication back to “in progress” status.

## Signature

public static Void setTranslationToIncomplete(String articleVersionId)

## Parameters

articleVersionId

Type: String

## Return Value

Type: Void

## Example

```

```

## Code Examples

```
String articleVersionId = 'Insert article ID';
KbManagement.PublishingService.setTranslationToIncomplete(articleVersionId);
```
