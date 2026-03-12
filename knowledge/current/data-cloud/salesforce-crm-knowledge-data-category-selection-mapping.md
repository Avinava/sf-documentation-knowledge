---
title: "Salesforce CRM: Knowledge Data Category Selection Mapping"
domain: data-cloud
topic: salesforce-crm-knowledge-data-category-selection-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.457Z
estimatedTokens: 257
keywords: [Salesforce, CRM, Knowledge, Data, Category, Selection, Mapping, mappings, Knowledge_DataCategorySelection, DLO, found, bundle, Connector, Cloud, Usage]
---

# Salesforce CRM: Knowledge Data Category Selection Mapping

> These data mappings are for the Knowledge_DataCategorySelection DLO found in the
  Knowledge bundle of the Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: Knowledge Data Category Selection Mapping

These data mappings are for the Knowledge\_DataCategorySelection DLO found in the Knowledge bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

Bundle: This bundle is used for Service Intelligence visualizations of knowledge article metrics.

-   Knowledge: Used with Service Intelligence

## DLO to DMO Mapping

These data mappings relate to the Knowledge\_DataCategorySelection object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Data Catagory ID | DataCategoryId__c | text | Knowledge Article Category | Category |  |
| Entity Data Category Selection ID | Id__c | text | Knowledge Article Category | Knowledge Article Category Id | Primary Key |
| Knowledge Article Version ID | ParentId__c | text | Knowledge Article Category | Knowledge Article Version |  |
