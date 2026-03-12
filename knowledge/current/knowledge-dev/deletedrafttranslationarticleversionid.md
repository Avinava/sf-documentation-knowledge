---
title: "deleteDraftTranslation(articleVersionId)"
domain: knowledge-dev
topic: deletedrafttranslationarticleversionid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.405Z
estimatedTokens: 63
keywords: [deleteDraftTranslation, articleVersionId, Deletes, draft, translation]
---

# deleteDraftTranslation(articleVersionId)

> Deletes a draft translation.

# deleteDraftTranslation(articleVersionId)

Deletes a draft translation.

## Signature

public static Void deleteDraftTranslation(String articleVersionId)

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
KbManagement.PublishingService.deleteDraftTranslation (articleVersionId);
```
