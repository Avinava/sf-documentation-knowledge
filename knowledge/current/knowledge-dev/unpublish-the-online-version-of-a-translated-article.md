---
title: "Unpublish the Online Version of a Translated Article"
domain: knowledge-dev
topic: unpublish-the-online-version-of-a-translated-article
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:53.867Z
estimatedTokens: 134
keywords: [Unpublish, Online, Translated, Article, Unpublishes]
---

> Unpublishes the online version of a translated article.

# Unpublish the Online Version of a Translated Article

Unpublishes the online version of a translated article.

The publishing actions are defined by the field change you request on the resource. To edit and remove a translation from online state, use "publishStatus":"draft".

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
| publishStatus | Publishing status of the article. Use draft. |

Input:

```

```

## Code Examples

```
/services/data/v25.0/knowledgeManagement/articleVersions/translations/<translationVersionID>
```

```
{
       "publishStatus":"draft"
       }
```
