---
title: "Salesforce CRM: Case Article Mapping"
domain: data-cloud
topic: salesforce-crm-case-article-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.496Z
estimatedTokens: 311
keywords: [Salesforce, CRM, Case, Article, Mapping, data, mappings, CaseArticle, DLO, found, Knowledge, bundle, Connector, Data, Cloud., Usage, Bundle, DMO]
---

# Salesforce CRM: Case Article Mapping

> These data mappings are for the CaseArticle DLO found in the Knowledge bundle of the
  Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: Case Article Mapping

These data mappings are for the CaseArticle DLO found in the Knowledge bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

Bundle:

-   Knowledge: Used with Service Intelligence

## DLO to DMO Mapping

These data mappings relate to the CaseArticle object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Article ID | KnowledgeArticleId__c | text | Linked Knowledge Article | Knowledge Article |  |
| Case Article ID | Id__c | text | Linked Knowledge Article | Linked Knowledge Article Id | Primary Key |
| Case ID | CaseId__c | text | Linked Knowledge Article | Linked Reference |  |
| Created By ID | CreatedBuId__c | text | Linked Knowledge Article | Created By |  |
| Created Date | CreatedDate__c | date | Linked Knowledge Article | Created Date |  |
| Knowledge Article Version ID | KnowledgeArticleVersionId__c | text | Linked Knowledge Article | Knowledge Article Version |  |
| Linked Reference Object | LinkedReferenceObject__c | text | Linked Knowledge Article | Linked Reference Object |  |
