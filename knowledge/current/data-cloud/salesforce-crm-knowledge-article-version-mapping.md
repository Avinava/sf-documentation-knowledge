---
title: "Salesforce CRM: Knowledge Article Version Mapping"
domain: data-cloud
topic: salesforce-crm-knowledge-article-version-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.149Z
keywords: [Salesforce, CRM, Knowledge, Article, Version, Mapping, Usage, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Knowledge Article Version Mapping

# Salesforce CRM: Knowledge Article Version Mapping

These data mappings are for the Knowledge\_kav DLO found in the Knowledge bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

Bundle: This bundle is used for Service Intelligence visualizations of knowledge article metrics.

-   Knowledge: Used with Service Intelligence

## DLO to DMO Mapping

These data mappings relate to the Knowledge\_kav object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Article Number | ArticleNumber__c | text | Knowledge Article Version | Article Number |  |
| Article Primary Language | ArticleMasterLanguage__c | text | Knowledge Article Version | Primary Language |  |
| Created By Id | CreatedById__c | text | Knowledge Article Version | Created By |  |
| Created Date | CreatedDate__c | dateTime | Knowledge Article Version | Created Date |  |
| First Published Date | FirstPublishedDate__c | dateTime | Knowledge Article Version | First Published Date Time |  |
| Is Latest Version | IsLastestVersion__c | text | Knowledge Article Version | Is Latest Version |  |
| Knowledge Article ID | KnowledgeArticleId__c | text | Knowledge Article Version | Knowledge Article |  |
| Knowledge Article Version ID | Id__c | text | Knowledge Article Version | Knowledge Article Version Id | Primary Key |
| Language | Language__c | text | Knowledge Article Version | Language |  |
| Last Modified Date | LastModifiedDate__c | dateTime | Knowledge Article Version | Last Modified Date |  |
| Next Review Date | NextReviewDate__c | dateTime | Knowledge Article Version | Next Review DateTime |  |
| Publication Status | PublishStatus__c | text | Knowledge Article Version | Knowledge Publication Status Id |  |
| Summary | Summary__c | text | Knowledge Article Version | Description |  |
| Title | Title__c | text | Knowledge Article Version | Name |  |
| URL Name | UrlName__c | text | Knowledge Article Version | URL |  |
| Version Number | VersionNumber__c | number | Knowledge Article Version | Version Number |  |
| Visible In Internal App | IsVisibleInApp__c | text | Knowledge Article Version | Visible In Internal App |  |
| Visible In Public Knowledge Base | IsVisibleInPkb__c | text | Knowledge Article Version | Visible In Public Knowledge Base |  |
| Visible to Customer | IsVisibleInCsp__c | text | Knowledge Article Version | Visible to Customer |  |
| Visible to Partner | IsVisibleInPrm__c | text | Knowledge Article Version | Visible to Partner |  |