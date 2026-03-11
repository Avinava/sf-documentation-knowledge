---
title: "Salesforce CRM: Survey Subject Mapping"
domain: data-cloud
topic: salesforce-crm-survey-subject-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.840Z
keywords: [Salesforce, CRM, Survey, Subject, Mapping, Usage, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: Survey Subject Mapping

# Salesforce CRM: Survey Subject Mapping

These data mappings are for the SurveySubject DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Survey Subject object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name | Additional Details |
| --- | --- | --- | --- | --- | --- |
| Created Date | CreatedDate__c | dateTime | Survey Subject | Created Date |  |
| Last Modified Date | LastModifiedDate__c | dateTime | Survey Subject | Last Modified Date |  |
| Name | RecordName__c | text | Survey Subject | Name |  |
| Object Relationship ID | Id__c | text | Survey Subject | Survey Subject ID | Primary Key |
| Parent ID | ParentId__c | text | Survey Subject | Survey Parent |  |
| Related ID | SubjectEntityType__c | text | Survey Subject | Survey Subject Object |  |
| Subject ID | SubjectId__c | text | Survey Subject | Survey Subject |  |
| Survey ID | SurveyId__c | text | Survey Subject | Survey |  |