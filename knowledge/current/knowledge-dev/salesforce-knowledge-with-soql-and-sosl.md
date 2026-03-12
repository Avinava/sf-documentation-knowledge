---
title: "Salesforce Knowledge with SOQL and SOSL"
domain: knowledge-dev
topic: salesforce-knowledge-with-soql-and-sosl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.534Z
estimatedTokens: 547
keywords: [Salesforce, Knowledge, SOQL, SOSL, Query, Language, search, organization’s, data, specific, similar, SELECT, statement, widely, Structured]
---

# Salesforce Knowledge with SOQL and SOSL

> Use the Salesforce Object Query Language (SOQL) to search your organization’s
  Knowledge data for specific information. SOQL is similar to the SELECT statement in the widely
  used Structured Query Language (SQL) but is designed specifically for Salesforce. Use the
  Salesforce Object Search Language (SOSL) to construct text-based search queries against the search
  index.

# Salesforce Knowledge with SOQL and SOSL

Use the Salesforce Object Query Language (SOQL) to search your organization’s Knowledge data for specific information. SOQL is similar to the SELECT statement in the widely used Structured Query Language (SQL) but is designed specifically for Salesforce. Use the Salesforce Object Search Language (SOSL) to construct text-based search queries against the search index.

| Knowledge Object | Limits |
| --- | --- |
| KnowledgeArticleVersion | Filter on a single value of PublishStatus for best results. To find all versions of each article, omit the PublishStatus filter, but do filter on one or more master key IDs. To retrieve all archived versions for a given article, specify a SOQL filter where IsLatestVersion is false.In API version 46.0 and earlier, queries without a filter on PublishStatus return published articles by default. In API version 47.0 and later, draft, published, and archived articles are returned when Lightning Knowledge is enabled.To support security, only users with the “View Draft Articles” permission see articles whose PublishStatus value is Draft. Similarly, only users with the “View Archived Articles” permission see articles whose PublishStatus value is ArchivedArchived article versions are stored in the Knowledge__kav object. To query archived article versions, specify the article Id and set IsLatestVersion='0'.You can’t use binding variables in Apex SOQL statements with KnowledgeArticleVersion objects. For example, the following SOQL statement causes a compilation error.final String PUBLISH_STATUS_ONLINE = 'Online'; List<Knowledge__kav> articles = [  SELECT Id FROM Knowledge__kav  WHERE PublishStatus = :PUBLISH_STATUS_ONLINE  ];Instead, use dynamic SOQL as follows. See Dynamic SOQL in Apex Developer Guide.final String PUBLISH_STATUS_ONLINE = 'Online';  final String q = 'SELECT Id, PublishStatus FROM Knowledge__kav  WHERE PublishStatus = :PUBLISH_STATUS_ONLINE'; List<Knowledge__kav> articles = Database.query(q); |

For generic SOQL and SOSL information see the [SOQL and SOSL Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").

## Code Examples

```apex
final String PUBLISH_STATUS_ONLINE = 'Online';
List<Knowledge__kav> articles = [ 
SELECT Id FROM Knowledge__kav 
WHERE PublishStatus = :PUBLISH_STATUS_ONLINE 
];
```

```apex
final String PUBLISH_STATUS_ONLINE = 'Online'; 
final String q = 'SELECT Id, PublishStatus FROM Knowledge__kav 
WHERE PublishStatus = :PUBLISH_STATUS_ONLINE';
List<Knowledge__kav> articles = Database.query(q);
```
