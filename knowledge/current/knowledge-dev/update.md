---
title: "UPDATE"
domain: knowledge-dev
topic: update
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.774Z
estimatedTokens: 241
keywords: [Track, keywords, Salesforce, Knowledge, article, searches, TRACKING, clause, Determine, how, hits, had, VIEWSTAT, Article’s, Keyword]
---

# UPDATE

> Track keywords that are used in Salesforce Knowledge article searches by using the
      UPDATE TRACKING optional clause. Determine how many hits
    a Salesforce Knowledge article has had by using the UPDATE
      VIEWSTAT optional clause.

# UPDATE

Track keywords that are used in Salesforce Knowledge article searches by using the UPDATE TRACKING optional clause. Determine how many hits a Salesforce Knowledge article has had by using the UPDATE VIEWSTAT optional clause.

## Update an Article’s Keyword Tracking with SOQL

UPDATE TRACKING is an optional clause that can be added to a SELECT statement of a SOQL query to report on article searches and views. Developers can use UPDATE TRACKING to track the keywords that are used in Salesforce Knowledge article searches.

```

```

## Update an Article Viewstat with SOQL

The UPDATE VIEWSTAT clause is used in a SELECT statement to report on Salesforce Knowledge article searches and views. You can get a view count for every article that you have access to online. Developers can use UPDATE VIEWSTAT to update an article’s view statistics.

You can use this syntax to increase the view count for every article you have access to online.

```

```

## Code Examples

```
SELECT Title FROM FAQ__kav
WHERE Keyword='Apex' and
Language = 'en_US' and
KnowledgeArticleVersion = 'ka230000000PCiy'
UPDATE TRACKING
```

```
SELECT Title FROM Knowledge__kav
   WHERE PublishStatus='online' and
   Language = 'en_US' and
   KnowledgeArticleVersion = 'ka230000000PCiy'
   UPDATE VIEWSTAT
```
