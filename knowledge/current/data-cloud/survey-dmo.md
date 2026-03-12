---
title: "Survey DMO"
domain: data-cloud
topic: survey-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.965Z
estimatedTokens: 475
keywords: [Survey, DMO, Data, Cloud, data, model, survey., API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Survey DMO

> The Survey DMO is a Data Cloud data model object (DMO) for a
      survey.

# Survey DMO

The Survey DMO is a Data Cloud data model object (DMO) for a survey.

## Object API Name

ssot\_\_Survey\_\_dlm

## Category

Other

## Primary Subject Area

## Primary Key

Survey Id (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Survey | Active Survey Version | Many To One: N:1 | Survey Version | Survey Version ID |
| Survey Subject | Survey | Many To One: N:1 | Survey | Survey ID |
| Survey Version | Survey | Many To One: N:1 | Survey | Survey ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Active Survey Version | ssot__ActiveSurveyVersionId__c | A reference ID to the active version for the survey. | text |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DateSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DateSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | The survey description. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the survey. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Name | ssot__Name__c | The name of the survey. | text |
| Name Prefix | ssot__NamePrefix__c | The name prefix of the survey. | text |
| Survey Id | ssot__Id__c | A unique ID used as the primary key for the survey DMO. | text |
| Survey Type | ssot__SurveyType__c | The type of the survey. | text |
