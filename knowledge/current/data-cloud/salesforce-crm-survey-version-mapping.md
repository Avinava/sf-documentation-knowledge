---
title: "Salesforce CRM: Survey Version Mapping"
domain: data-cloud
topic: salesforce-crm-survey-version-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.106Z
estimatedTokens: 293
keywords: [Salesforce, CRM, Survey, Version, Mapping, data, mappings, SurveyVersion, DLO, found, Services, bundle, Connector, Data, Cloud., Usage, Bundle, DMO]
---

# Salesforce CRM: Survey Version Mapping

> These data mappings are for the SurveyVersion DLO found in the Services bundle of the
  Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: Survey Version Mapping

These data mappings are for the SurveyVersion DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Survey Version object used with the CRM connector. You can add or customize the data mappings.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Created Date | CreatedDate__c | dateTime | Survey Version | Created Date |  |
| Last Modified Date | LastModifiedDate__c | dateTime | Survey Version | Last Modified Date |  |
| Name | Name__c | text | Survey Version | Name |  |
| Survey ID | SurveyId__c | text | Survey Version | Survey |  |
| Survey Status | SurveyStatus__c | text | Survey Version | Survey Status |  |
| Survey Version ID | Id__c | text | Survey Version | Survey Version ID | Primary Key |
| Version Number | VersionNumber__c | number | Survey Version | Version Number |  |
