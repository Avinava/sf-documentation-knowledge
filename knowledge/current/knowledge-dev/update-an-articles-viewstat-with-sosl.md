---
title: "Update an Article’s Viewstat with SOSL"
domain: knowledge-dev
topic: update-an-articles-viewstat-with-sosl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.803Z
estimatedTokens: 224
keywords: [Article’s, Viewstat, SOSL, Determine, how, hits, Salesforce, Knowledge, article, had, clause, query, language, attribute, search]
---

# Update an Article’s Viewstat with SOSL

> Determine how many hits a Salesforce Knowledge article has had by using the
            UPDATE VIEWSTAT optional clause on a SOSL query. You
        can use the language attribute to search by locale.

# Update an Article’s Viewstat with SOSL

Determine how many hits a Salesforce Knowledge article has had by using the UPDATE VIEWSTAT optional clause on a SOSL query. You can use the language attribute to search by locale.

The optional UPDATE VIEWSTAT clause is used to report on Salesforce Knowledge article searches and views. It allows developers to update an article’s view statistics. Also, the language attribute can be used to search by a specific language (locale). However, only one language can be specified in a single query. Make a separate query for each language that you want. Use the Java format, which uses the underscore (for example, fr\_FR, jp\_JP, and so on), to supply locales. Search the Web for “java locale codes” to get a list of supported locales.

You can use this syntax to increase the view count for every article you have access to online in US English:

```

```

## Code Examples

```
FIND {Title}
RETURNING FAQ__kav (Title WHERE PublishStatus="Online" and
language="en_US" and
KnowledgeArticleVersion = 'ka230000000PCiy')
UPDATE VIEWSTAT
```
