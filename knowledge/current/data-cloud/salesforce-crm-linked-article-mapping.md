---
title: "Salesforce CRM: Linked Article Mapping"
domain: data-cloud
topic: salesforce-crm-linked-article-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.473Z
estimatedTokens: 353
keywords: [Salesforce, CRM, Linked, Article, Mapping, data, mappings, LinkedArticle, DLO, found, Knowledge, bundle, Connector, Cloud, Usage]
---

# Salesforce CRM: Linked Article Mapping

> These data mappings are for the LinkedArticle DLO found in the Knowledge bundle of the
  Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: Linked Article Mapping

These data mappings are for the LinkedArticle DLO found in the Knowledge bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

Bundle: This bundle is used for Service Intelligence visualizations of knowledge article metrics.

-   Knowledge: Used with Service Intelligence

## DLO to DMO Mapping

These data mappings relate to the LinkedArticle object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Article ID | KnowledgeArticleId__c | text | Linked Knowledge Article | Knowledge Article |  |
| Created By ID | CreatedById__c | text | Linked Knowledge Article | Created By |  |
| Created Date | CreatedDate__c | dateTime | Linked Knowledge Article | Created Date |  |
| Knowledge Article Version ID | KnowledgeArticleVersionId__c | text | Linked Knowledge Article | Knowledge Article Version |  |
| Linked Article ID | Id__c | text | Linked Knowledge Article | Knowledge Article Id | Primary Key |
| Linked Article Title | Name__c | text | Linked Knowledge Article | Name |  |
| Linked Entity ID | LinkedEntityId__c | text | Linked Knowledge Article | Linked Reference |  |
| Linked Object Type | Type__c | text | Linked Knowledge Article | Linked Reference Object |  |
