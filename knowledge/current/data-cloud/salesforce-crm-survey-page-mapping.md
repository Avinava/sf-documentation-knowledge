---
title: "Salesforce CRM: Survey Page Mapping"
domain: data-cloud
topic: salesforce-crm-survey-page-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.826Z
keywords: [Salesforce, CRM, Survey, Page, Mapping, Usage, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Survey Page Mapping

# Salesforce CRM: Survey Page Mapping

These data mappings are for the SurveyPage DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Survey Page object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Created Date | CreatedDate__c | dateTime | Survey Question Section | Created Date |  |
| Developer Name | DeveloperName__c | text | Survey Question Section | Name |  |
| Display Order | DisplayOrder__c | number | Survey Question Section | Display Order |  |
| Last Modified Date | LastModifiedDate__c | dateTime | Survey Question Section | Last Modified Date |  |
| Name | Name__c | text | Survey Question Section | Description |  |
| Survey Page ID | Id__c | text | Survey Question Section | Survey Question Section ID | Primary Key |
| Survey Version ID | SurveyVersionId__c | text | Survey Question Section | Survey Version |  |