---
title: "Salesforce CRM: Group Mapping"
domain: data-cloud
topic: salesforce-crm-group-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.807Z
keywords: [Salesforce, CRM, Group, Mapping, Usage, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Group Mapping

# Salesforce CRM: Group Mapping

These data mappings are for the Group DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Group object used with the CRM connector. You can add or customize the data mappings.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Developer Name | DeveloperName__c | text | User Group | Name |  |
| Group ID | Id__c | text | User Group | User Group ID | Primary Key |
| Name | Name__c | text | User Group | Alias |  |
| Related ID | RelatedId__c | text | User Group | User Group |  |