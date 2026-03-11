---
title: "Salesforce CRM: Survey Mapping"
domain: data-cloud
topic: salesforce-crm-survey-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.818Z
keywords: [Salesforce, CRM, Survey, Mapping, Usage, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Survey Mapping

# Salesforce CRM: Survey Mapping

These data mappings are for the Survey DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Survey object used with the CRM connector. You can add or customize the data mappings.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Created Date | CreatedDate__c | dateTime | Survey | Created Date |  |
| Developer Name | DeveloperName__c | text | Survey | Name |  |
| Last Modified Date | LastModifiedDate__c | dateTime | Survey | Last Modified Date |  |
| Name | Name__c | text | Survey | Description |  |
| Namespace Prefix | NamespacePrefix__c | text | Survey | Name Prefix |  |
| Survey ID |  | text | Survey | Survey ID |  |
| Survey Version ID | ActiveVersionId__c | text | Survey | Active Survey Version |  |
| Type | SurveyType__c | text | Survey | Survey Type |  |