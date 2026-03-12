---
title: "Set a Translated Article Version to Incomplete"
domain: knowledge-dev
topic: set-a-translated-article-version-to-incomplete
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.480Z
estimatedTokens: 112
keywords: [Translated, Article, Version, Incomplete]
---

# Set a Translated Article Version to Incomplete

> Sets a translated article version to incomplete.

# Set a Translated Article Version to Incomplete

Sets a translated article version to incomplete.

## Syntax

URI

```

```

Formats

JSON, XML>

HTTP Method

PATCH

Authentication

Authorization: OAuth **accesstoken**

Parameters

| Parameter | Description |
| --- | --- |
| complete | Set this value to false to set a translation to incomplete. |

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
       "complete":"false"
       }
```
