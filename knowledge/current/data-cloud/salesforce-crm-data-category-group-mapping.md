---
title: "Salesforce CRM: Data Category Group Mapping"
domain: data-cloud
topic: salesforce-crm-data-category-group-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.533Z
estimatedTokens: 250
keywords: [Salesforce, CRM, Data, Category, Group, Mapping, data, mappings, DataCategoryGroup, DLO, found, Knowledge, bundle, Connector, Cloud., Usage, Bundle, DMO]
---

# Salesforce CRM: Data Category Group Mapping

> These data mappings are for the DataCategoryGroup DLO found in the Knowledge bundle of
  the Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: Data Category Group Mapping

These data mappings are for the DataCategoryGroup DLO found in the Knowledge bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

Bundle:

-   Knowledge: Used with Service Intelligence

## DLO to DMO Mapping

These data mappings relate to the DataCategoryGroup object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Data Category Group ID | Id__c | text | Category | Category Id | Primary Key |
| Developer Name | DeveloperName__c | text | Category | Name |  |
| IsKnowledgeCategory | IsKnowledgeCategory__c | text | Category | Is Knowledge Category |  |
| IsRootCategory | IsRootCategory__c | text | Category | Is Root Category |  |
| Label | MasterLabel__c | text | Category | Label |  |
| Status | Status__c | text | Category | Category Status |  |
