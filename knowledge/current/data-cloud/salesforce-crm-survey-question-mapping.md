---
title: "Salesforce CRM: Survey Question Mapping"
domain: data-cloud
topic: salesforce-crm-survey-question-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.919Z
estimatedTokens: 343
keywords: [Salesforce, CRM, Survey, Question, Mapping, data, mappings, SurveyQuestion, DLO, found, Services, bundle, Connector, Cloud, Usage]
---

# Salesforce CRM: Survey Question Mapping

> These data mappings are for the SurveyQuestion DLO found in the Services bundle of the
  Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: Survey Question Mapping

These data mappings are for the SurveyQuestion DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Survey Question object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Created Date | CreatedDate__c | dateTime | Survey Question | Created Date |  |
| Display Order | QuestionOrder__c | number | Survey Question | Display Order |  |
| Is Deprecated | IsDeprecated__c | text | Survey Question | Deprecated |  |
| Last Modified Date | LastModifiedDate__c | dateTime | Survey Question | Last Modified Date |  |
| Name | Name__c | text | Survey Question | Name |  |
| Question Name | QuestionName__c | text | Survey Question | Description |  |
| Question Type | QuestionType__c | text | Survey Question | Survey Question Type |  |
| Survey Page ID | SurveyPageId__c | text | Survey Question | Survey Question Section |  |
| Survey Question ID | Id__c | text | Survey Question | Survey Question ID | Primary Key |
