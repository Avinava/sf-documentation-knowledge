---
title: "Survey Question DMO"
domain: data-cloud
topic: survey-question-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:44.022Z
keywords: [Survey, Question, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Survey Question DMO

# Survey Question DMO

The Survey Question DMO is a Data Cloud data model object (DMO) for a question in a survey under a section.

## Object API Name

ssot\_\_SurveyQuestion\_\_dlm

## Category

Other

## Primary Subject Area

## Primary Key

Survey Question Id (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Survey Question | Survey Question Section | Many To One: N:1 | Survey Question Section | Survey Question ID |
| Survey Question Response | Survey Question | Many To One: N:1 | Survey Question | Survey Question ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Deprecated | ssot__IsDeprecated__c | An indicator if the survey question is deprecated. | text |
| Description | ssot__Description__c | The survey question description. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the survey question. | text |
| Last Modified Date | ssot__Last ModifiedDate__c | The date when a user last modified the record. | dateTime |
| Name | ssot__Name__c | The name of the survey question. | text |
| Survey Question Id | ssot__Id__c | A unique ID used as the primary key for the survey question DMO. | text |
| Survey Question Section | ssot__SurveyQuestionSectionId__c | A reference ID to the survey section for the question. | text |
| Survey Question Type | ssot__SurveyQuestionType__c | The type of the survey question. | text |