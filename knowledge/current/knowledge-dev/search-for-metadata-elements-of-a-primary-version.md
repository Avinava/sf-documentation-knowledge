---
title: "Search for Metadata Elements of a Primary Version"
domain: knowledge-dev
topic: search-for-metadata-elements-of-a-primary-version
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:53.894Z
estimatedTokens: 89
keywords: [Search, Metadata, Primary, Searches, online, article]
---

> Searches for metadata elements of the online primary version of an article.

# Search for Metadata Elements of a Primary Version

Searches for metadata elements of the online primary version of an article.

## Syntax

URI

```

```

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: OAuth **accesstoken**

Example

This example searches for the online version of the primary article 'kA0x50000000jsh':

```

```

## Code Examples

```
/services/data/v25.0/knowledgeManagement/articleVersions/masterVersions?filterArticleId=value1&FilterPublishStatus=value2
```

```
/services/data/v25.0/knowledgeManagement/articleVersions/masterVersions?filterArticleId=kA0x50000000jsh&filterPublishStatus=online"
```
