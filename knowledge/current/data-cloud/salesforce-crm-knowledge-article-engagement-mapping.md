---
title: "Salesforce CRM: Knowledge Article Engagement Mapping"
domain: data-cloud
topic: salesforce-crm-knowledge-article-engagement-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.453Z
estimatedTokens: 449
keywords: [Salesforce, CRM, Knowledge, Article, Engagement, Mapping, data, mappings, KnowledgeArticleView, DLO, created, Views, Ingestion, API, Cloud]
---

# Salesforce CRM: Knowledge Article Engagement Mapping

> The data mappings are for KnowledgeArticleView DLO created by the Knowledge Article Views
  Ingestion API for Data Cloud. The mappings are for the KnowledgeArticleEngagement DMO

# Salesforce CRM: Knowledge Article Engagement Mapping

The data mappings are for KnowledgeArticleView DLO created by the Knowledge Article Views Ingestion API for Data Cloud. The mappings are for the KnowledgeArticleEngagement DMO

## Usage and Data Bundle

Knowledge Article Views Ingestion API:

-   Knowledge Engagement: Used with Service Intelligence and Knowledge Enablement

## DLO to DMO Mapping

These data mappings relate to the KnowledgeArticleView object included in the Knowledge Article Views Ingestion API and how that data connects to the KnowledgeArticleEngagement DMO.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| ArticleViewContextDescription | ArticleViewContextDescription__c | text | Knowledge Article Engagement | Article View Context |  |
| Id | Id__c | text | Knowledge Article Engagement | Knowledge Article Engagement Id | Primary Key |
| KnowledgeArticleUserTypeId | KnowledgeArticleUserTypeId__c | text | Knowledge Article Engagement | Knowledge Article User Type |  |
| KnowledgeArticleVersionId | KnowledgeArticleVersionId__c | text | Knowledge Article Engagement | Knowledge Article Version |  |
| SourceReferenceId | SourceReferenceId__c | text | Knowledge Article Engagement | Source Reference |  |
| SourceReferenceObject | SourceReferenceObject__c | text | Knowledge Article Engagement | Source Reference Object |  |
| Timestamp | Timestamp__c | dateTime | Knowledge Article Engagement | Created Date |  |
| UsedForGrounding | UsedForGrounding__c | text | Knowledge Article Engagement | Used For Grounding |  |
| userId | userId__c | text | Knowledge Article Engagement | User |  |
| WebsiteId | WebsiteId__c | text | Knowledge Article Engagement | Website |  |
