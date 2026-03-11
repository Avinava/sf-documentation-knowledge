---
title: "Conversation Reason Report Definition DMO"
domain: data-cloud
topic: conversation-reason-report-definition-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.049Z
keywords: [Conversation, Reason, Report, Definition, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Conversation Reason Report Definition DMO

# Conversation Reason Report Definition DMO

The Conversation Reason Report Definition DMO is a Data Cloud data model object for a conversation mining report that contains an overview of the conversational data shape and groups of conversation reasons and excerpts.

## Object API Name

ssot\_\_ConversationReasonReportDefinition\_\_dlm

## Category

Other

## Primary Subject Area

## Primary Key

Conversation Reason Report Definition Id (ssot\_\_Id\_\_c)

## Relationships

None.

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Conversation Reason Status Code | ssot__ConversationReasonRptStatus__c | The conversation reason status code for the report | text |
| Conversation Reason Report Definition ID | ssot__Id__c | A unique ID used as the primary key for the conversation reason category DMO | text |
| Created Date | ssot__CreatedDate__c | The date the record was created | dateTime |
| Data Source | ssot__DateSourceId__c | A reference ID for the logical name for a system that is the source of records identified by the external record ID | text |
| Data Source Object | ssot__DateSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object | text |
| EndDate | ssot__EndDateTime__c | The date and time the report ended | dateTime |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the conversation reason report definition | text |
| Name | ssot__Name__c | The name of the conversation reason report definition | text |
| Pipeline Run Identifier | ssot__PipelinerunId__c | A reference ID to the ML pipeline run identifier. | text |
| Recurring Event Frequency UOM | ssot__RecurringEventFrequencyUOM__c | The interval that the event reoccurs. Values include Secondly, Minutely, Hourly, Daily, Weekly, Monthly, Yearly, and No Refresh. | text |
| StartDate | ssot__StartDateTime__c | The date and time the report started. | dateTime |