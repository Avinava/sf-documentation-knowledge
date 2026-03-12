---
title: "Update an Article’s Keyword Tracking with SOSL"
domain: soql-sosl
topic: update-an-articles-keyword-tracking-with-sosl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.920Z
estimatedTokens: 227
keywords: [Article’s, Keyword, Tracking, SOSL, Track, keywords, Salesforce, Knowledge, article, searches, clause, query, language, attribute, search]
---

# Update an Article’s Keyword Tracking with SOSL

> Track keywords that are used in Salesforce Knowledge  article searches with the UPDATE TRACKING optional clause on a SOSL query. You can use the
  language attribute to search by locale.

# Update an Article’s Keyword Tracking with SOSL

Track keywords that are used in Salesforce Knowledge article searches with the UPDATE TRACKING optional clause on a SOSL query. You can use the language attribute to search by locale.

The UPDATE TRACKING clause is used to report on Salesforce Knowledge article searches and views. It allows developers to track the keywords used in Salesforce Knowledge article searches. Also, the language attribute can be used to search by a specific language (locale). However, only one language can be specified in a single query. Make a separate query for each language that you want. Use the Java format, which uses the underscore (for example, fr\_FR, jp\_JP, and so on), to supply locales. Search the Web for “java locale codes” to get a list of supported locales.

You can use this syntax to track a keyword used in Salesforce Knowledge article search:

```

```

## Code Examples

```
FIND {Keyword}
RETURNING KnowledgeArticleVersion (Title WHERE PublishStatus="Online" and language="en_US")
UPDATE TRACKING
```
