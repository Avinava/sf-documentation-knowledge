---
title: "Salesforce CRM: Data Category Mapping"
domain: data-cloud
topic: salesforce-crm-data-category-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.095Z
keywords: [Salesforce, CRM, Data, Category, Mapping, Usage, Bundle, DLO, DMO]
---

# Salesforce CRM: Data Category Mapping

# Salesforce CRM: Data Category Mapping

These data mappings are for the DataCategory DLO found in the Knowledge bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

Bundle:

-   Knowledge: Used with Service Intelligence

## DLO to DMO Mapping

These data mappings relate to the DataCategory object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Data Category ID | Id__c | text | Category | Category Id | Primary Key |
| Developer Name | DeveloperName__c | text | Category | Name |  |
| IsKnowledgeCategory | IsKnowledgeCategory__c | text | Category | Is Knowledge Category |  |
| Label | MasterLabel__c | text | Category | Label |  |
| ParentCategoryId | ParentCategoryId__c | text | Category | Parent Category |  |
| Sort Order | SortOrder__c | text | Category | Sort Order |  |