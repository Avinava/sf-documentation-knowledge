---
title: "completeTranslation(articleVersionId)"
domain: knowledge-dev
topic: completetranslationarticleversionid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:53.755Z
estimatedTokens: 71
keywords: [completeTranslation, articleVersionId, Puts, translation, completed, state, ready, publish]
---

> Puts a translation in a completed state that is ready to
publish.

# completeTranslation(articleVersionId)

Puts a translation in a completed state that is ready to publish.

## Signature

public static Void completeTranslation(String articleVersionId)

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
KbManagement.PublishingService.completeTranslation(articleVersionId);
```
