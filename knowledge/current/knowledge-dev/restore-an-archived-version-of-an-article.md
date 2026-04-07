---
title: "Restore an Archived Version of an Article"
domain: knowledge-dev
topic: restore-an-archived-version-of-an-article
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:53.880Z
estimatedTokens: 208
keywords: [Restore, Archived, Article, Restores, versionNumber, isn’t, latest]
---

> Restores an archived version of the article. If versionNumber
  isn’t specified, restores the latest version of the archived article.

# Restore an Archived Version of an Article

Restores an archived version of the article. If versionNumber isn’t specified, restores the latest version of the archived article.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=knowledge_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

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
| versionNumber | Version of the article. If this field is not specified, the latest version of the archived article is restored. |

Input:

```

```

## Code Examples

```
/services/data/v25.0/knowledgeManagement/articleVersions/masterVersions/
```

```
{
"articleId":"<articleID>",
"versionNumber": <number>
}
```
