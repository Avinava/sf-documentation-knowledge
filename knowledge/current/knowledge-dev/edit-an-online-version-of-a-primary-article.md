---
title: "Edit an Online Version of a Primary Article"
domain: knowledge-dev
topic: edit-an-online-version-of-a-primary-article
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.453Z
estimatedTokens: 97
keywords: [Edit, Online, Version, Primary, Article, Creates, draft, copy, unpublish]
---

# Edit an Online Version of a Primary Article

> Creates a draft copy of the online version of a primary article. This does not unpublish
  the online version.

# Edit an Online Version of a Primary Article

Creates a draft copy of the online version of a primary article. This does not unpublish the online version.

## Syntax

URI

```

```

Formats

JSON, XML

HTTP Method

POST

Authentication

Authorization: OAuth **accesstoken**

Parameters

| Parameter | Description |
| --- | --- |
| articleId | The ID of the article. |

Input:

```

```

## Code Examples

```
/services/data/v25.0/knowledgeManagement/articleVersions/masterVersions
```

```
{
       "articleId":<articleID>
       }
```
