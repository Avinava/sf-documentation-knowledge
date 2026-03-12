---
title: "Survey Response DMO"
domain: data-cloud
topic: survey-response-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.682Z
estimatedTokens: 634
keywords: [Survey, DMO, Data, Cloud, model, answer, question, API, Category, Primary, Subject, Area, Key, Relationships]
---

# Survey Response DMO

> The Survey Response DMO is a Data Cloud data model object (DMO) for an
      answer to a survey question.

# Survey Response DMO

The Survey Response DMO is a Data Cloud data model object (DMO) for an answer to a survey question.

## Object API Name

ssot\_\_SurveyResponse\_\_dlm

## Category

Other

## Primary Subject Area

## Primary Key

Survey Response Id (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Survey Question Response | Survey Response | Many To One: N:1 | Survey Response | Survey Response ID |
| Survey Response | Submitter | Many To One: N:1 | Account Contact | Account Contact ID |
| Survey Response | Survey Invitation | Many To One: N:1 | Survey Invitation | Survey Invitation Id |
| Survey Response | Survey Version | Many To One: N:1 | Survey Version | Survey Invitation Id |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Completion Date | ssot__CompletionDateTime__c | The date and time the survey response was completed. | dateTime |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | The survey response description. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the survey response. | text |
| Last Modified Date | ssot__Last ModifiedDate__c | The date when a user last modified the record. | dateTime |
| Name | ssot__Name__c | The name of the survey response. | text |
| Submitter | ssot__SubmitterId__c | A reference ID to the submitter of the response. | text |
| Submitter Object | ssot__SubmitterObject__c | The submitter object for the response. | text |
| Survey Invitation | ssot__SurveyInvitationId__c | A reference ID to the survey invitation for the response. | text |
| Survey Response Id | ssot__Id__c | A unique ID used as the primary key for the survey response DMO. | text |
| Survey Response Status | ssot__SurveyResponseStatus__c | The status of the survey response. | text |
| Survey Version | ssot__SurveyVersionId__c | A reference ID to the survey version of the response. | text |
