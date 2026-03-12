---
title: "Salesforce CRM: Survey Response Mapping"
domain: data-cloud
topic: salesforce-crm-survey-response-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.094Z
estimatedTokens: 356
keywords: [Salesforce, CRM, Survey, Response, Mapping, data, mappings, SurveyResponse, DLO, found, Services, bundle, Connector, Data, Cloud., Usage, Bundle, DMO]
---

# Salesforce CRM: Survey Response Mapping

> These data mappings are for the SurveyResponse DLO found in the Services bundle of the
  Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: Survey Response Mapping

These data mappings are for the SurveyResponse DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Survey Response object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Created Date | CreatedDate__c | dateTime | Survey Response | Created Date |  |
| Last Modified Date | LastModifiedDate__c | dateTime | Survey Response | Last Modified Date |  |
| Response Completion Date and Time | CompletionDateTime__c | dateTime | Survey Response | Completion Date |  |
| Response Name | Name__c | text | Survey Response | Name |  |
| Response Status | Status__c | text | Survey Response | Survey Response Status |  |
| Response Submitter ID | SubmitterId__c | text | Survey Response | Submitter |  |
| Survey Invitation ID | InvitationId__c | text | Survey Response | Survey Invitation |  |
| Survey Response ID | Id__c | text | Survey Response | Survey Response ID | Primary Key |
| Survey Version ID | SurveyVersionId__c | text | Survey Response | Survey Version |  |
