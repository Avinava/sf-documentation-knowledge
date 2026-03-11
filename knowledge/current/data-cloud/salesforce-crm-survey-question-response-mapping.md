---
title: "Salesforce CRM: Survey Question Response Mapping"
domain: data-cloud
topic: salesforce-crm-survey-question-response-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.834Z
keywords: [Salesforce, CRM, Survey, Question, Response, Mapping, Usage, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Survey Question Response Mapping

# Salesforce CRM: Survey Question Response Mapping

These data mappings are for the SurveyQuestionResponse DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Survey Question Response object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Created Date | CreatedDate__c | dateTime | Survey Question Response | Created Date |  |
| Data Type | Datatype__c | text | Survey Question Response | Data Type |  |
| Date Time Value | DateTimeValue__c | dateTime | Survey Question Response | Date Time Value |  |
| Date Value | DateValue__c | dateTime | Survey Question Response | Date Value |  |
| Last Modified Date | LastModifiedDate__c | dateTime | Survey Question Response | Last Modified Date |  |
| Name | ResponseShortText__c | text | Survey Question Response | Name |  |
| Number Value | NumberValue__c | text | Survey Question Response | Number Value |  |
| Rank | Rank__c | number | Survey Question Response | Rank |  |
| Response Value | ResponseValue__c | text | Survey Question Response | Response Value |  |
| Survey Question ID | QuestionId__c | text | Survey Question Response | Survey Question |  |
| Survey Question Response ID | Id__c | text | Survey Question Response | Survey Question Response | Primary Key |
| Survey Response ID | ResponseId__c | text | Survey Question Response | Survey Response |  |
| True of False | TrueOrFalse | text | Survey Question Response | Boolean Value |  |