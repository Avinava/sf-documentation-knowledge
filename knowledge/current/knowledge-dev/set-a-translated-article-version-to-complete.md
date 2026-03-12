---
title: "Set a Translated Article Version to Complete"
domain: knowledge-dev
topic: set-a-translated-article-version-to-complete
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.478Z
estimatedTokens: 110
keywords: [Translated, Article, Version]
---

# Set a Translated Article Version to Complete

> Sets a translated article version to complete.

# Set a Translated Article Version to Complete

Sets a translated article version to complete.

## Syntax

URI

```

```

Formats

JSON, XML

HTTP Method

PATCH

Authentication

Authorization: OAuth **accesstoken**

Parameters

| Parameter | Description |
| --- | --- |
| complete | Set this value to true for translations that are complete. |

Input:

```

```

Output:

HTTP status code 204 is returned when an existing record is updated.

## Code Examples

```
/services/data/v25.0/knowledgeManagement/articleVersions/translations/<translationVersionID>
```

```
{
       "complete":"true"
       }
```
