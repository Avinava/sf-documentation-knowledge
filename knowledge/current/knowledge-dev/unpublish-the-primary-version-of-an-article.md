---
title: "Unpublish the Primary Version of an Article"
domain: knowledge-dev
topic: unpublish-the-primary-version-of-an-article
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.492Z
estimatedTokens: 157
keywords: [Unpublish, Primary, Version, Article, Unpublishes, online, there, isn’t, draft]
---

# Unpublish the Primary Version of an Article

> Unpublishes the online primary version of an article when there isn’t an existing
  draft article.

# Unpublish the Primary Version of an Article

Unpublishes the online primary version of an article when there isn’t an existing draft article.

The publishing actions are defined by the field change you request on the resource. To unpublish the primary version, use "publishStatus":"draft".

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

Input

```

```

Output:

HTTP status code 204 is returned when an existing record is updated.

## Code Examples

```
/services/data/v25.0/knowledgeManagement/articleVersions/masterVersions/<versionId>
```

```
{
       "publishStatus":"draft"
       }
```
