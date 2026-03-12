---
title: "Survey Question Response DMO"
domain: data-cloud
topic: survey-question-response-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.984Z
estimatedTokens: 625
keywords: [Survey, Question, Response, DMO, Data, Cloud, data, model, participants, who, answer, specific, questions., API, Name, Category, Primary, Subject, Area, Key]
---

# Survey Question Response DMO

> The Survey Question Response DMO is a Data Cloud data model object
      (DMO) for participants who answer specific questions.

# Survey Question Response DMO

The Survey Question Response DMO is a Data Cloud data model object (DMO) for participants who answer specific questions.

## Object API Name

ssot\_\_SurveyQuestionResponse\_\_dlm

## Category

Other

## Primary Subject Area

## Primary Key

Survey Question Response Id (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Survey Question Response | Survey Question | Many To One: N:1 | Survey Question | Survey Question ID |
| Survey Question Response | Survey Response | Many To One: N:1 | Survey Response | Survey Response ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Boolean Value | ssot__BooleanValue__c | The response value for a boolean question. | text |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Data Type | ssot__DataType__c | The data type of the survey question response. | text |
| Description | ssot__Description__c | The survey question response description. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the survey question response. | text |
| Last Modified Date | ssot__Last ModifiedDate__c | The date when a user last modified the record. | dateTime |
| Name | ssot__Name__c | The name of the survey question response. | text |
| Number Value | ssot__NumberValue__c | The response value for a numeric question. | number |
| Rank Number | ssot__RankNumber__c | The rank value of the survey response question. | number |
| Response Value | ssot__ResponseValue__c | The response value for a text question. | text |
| Survey Question | ssot__SurveyQuestionId__c | A reference ID to the survey question for the response. | text |
| Survey Question Response Id | ssot__Id__c | A unique ID used as the primary key for the survey question response DMO. | text |
| Survey Reponse | ssot__SurveyResponseId__c | A reference ID to the survey response for the question. | text |
