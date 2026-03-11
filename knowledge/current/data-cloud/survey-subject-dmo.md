---
title: "Survey Subject DMO"
domain: data-cloud
topic: survey-subject-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:44.037Z
keywords: [Survey, Subject, DMO, Object, API, Name, Category, Primary, Area, Key, Relationships, Fields]
---

# Survey Subject DMO

# Survey Subject DMO

The Survey Subject DMO is a Data Cloud data model object (DMO) for a relationship between a survey and another object, such as an account or a case.

## Object API Name

ssot\_\_SurveySubject\_\_dlm

## Category

Other

## Primary Subject Area

## Primary Key

Survey Subject Id (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Survey Subject | Survey | Many To One: N:1 | Survey | Survey ID |
| Survey Subject | Survey Parent | Many To One: N:1 | Survey Invitation | Survey Invitation ID |
| Survey Subject | Survey Subject | Many To One: N:1 | Account Contact | Account Contact ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | The survey subject description. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the survey subject. | text |
| Last Modified Date | ssot__Last ModifiedDate__c | The date when a user last modified the record. | dateTime |
| Name | ssot__Name__c | The name of the survey subject. | text |
| Survey | ssot__SurveyId__c | A reference ID to the survey for the subject. | text |
| Survey Parent | ssot__SurveyParentId__c | A reference ID to the survey parent for the subject. | text |
| Survey Subject | ssot__SurveySubjectId__c | A reference ID to the subject for the survey subject. | text |
| Survey Subject Id | ssot__Id__c | A unique ID used as the primary key for the survey subject DMO. | text |
| Survey Subject Object | ssot__SurveySubjectObject__c | The subject object for the survey subject. | text |