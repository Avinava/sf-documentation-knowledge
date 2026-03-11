---
title: "Survey Version DMO"
domain: data-cloud
topic: survey-version-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:44.042Z
keywords: [Survey, Version, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Survey Version DMO

# Survey Version DMO

The Survey Version DMO is a Data Cloud data model object (DMO) for a version of the survey.

## Object API Name

ssot\_\_SurveyVersion\_\_dlm

## Category

Other

## Primary Subject Area

## Primary Key

Survey Version Id (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Survey | Active Survey Version | Many To One: N:1 | Survey Version | Survey Version ID |
| Survey Question Section | Survey Version | Many To One: N:1 | Survey Version | Survey Version ID |
| Survey Response | Survey Version | Many To One: N:1 | Survey Version | Survey Version ID |
| Survey Version | Survey | Many To One: N:1 | Survey | Survey ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | The survey version description. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the survey version. | text |
| Last Modified Date | ssot__Last ModifiedDate__c | The date when a user last modified the record. | dateTime |
| Name | ssot__Name__c | The name of the survey version. | text |
| Survey | ssot__SurveyId__c | A reference ID to the survey for the version. | text |
| Survey Status | ssot__SurveyStatus__c | A status of the survey version. | text |
| Survey Subject | ssot__SurveySubjectId__c | A reference ID to the subject for the survey subject. | text |
| Survey Version Id | ssot__Id__c | A unique ID used as the primary key for the survey version DMO. | text |
| Version Number | ssot__VersionNumber__c | A version number of the survey version. | text |