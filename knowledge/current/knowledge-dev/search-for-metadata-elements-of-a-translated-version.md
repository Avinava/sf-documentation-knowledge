---
title: "Search for Metadata Elements of a Translated Version"
domain: knowledge-dev
topic: search-for-metadata-elements-of-a-translated-version
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.475Z
estimatedTokens: 89
keywords: [Search, Metadata, Elements, Translated, Version, Searches, article]
---

# Search for Metadata Elements of a Translated Version

> Searches for metadata elements of a translated version of an article.

# Search for Metadata Elements of a Translated Version

Searches for metadata elements of a translated version of an article.

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

This example searches for the German online translation of the article 'kA0x50000000jsh':

```

```

## Code Examples

```
/services/data/v25.0/knowledgeManagement/articleVersions/translations?filterArticleId=value1& filterLanguage=value2&FilterPublishStatus=value3";
```

```
/services/data/v25.0/knowledgeManagement/articleVersions/translations?filterArticleId=kA0x50000000jsh& filterLanguage=de&filterPublishStatus=online"
```
