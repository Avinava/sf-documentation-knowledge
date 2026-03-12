---
title: "Conversation Reason Category DMO"
domain: data-cloud
topic: conversation-reason-category-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.275Z
estimatedTokens: 610
keywords: [Conversation, Reason, Category, DMO, Data, Cloud, model, grouping, reasons, overall, topic, aggregated, metrics, associated, include]
---

# Conversation Reason Category DMO

> The Conversation Reason Category DMO is a Data Cloud data model object
      for a grouping of conversation reasons that have the same overall topic. It contains
      aggregated metrics for the associated conversation reasons. Example values include Order
      Management, Payments, and Account Management.

# Conversation Reason Category DMO

The Conversation Reason Category DMO is a Data Cloud data model object for a grouping of conversation reasons that have the same overall topic. It contains aggregated metrics for the associated conversation reasons. Example values include Order Management, Payments, and Account Management.

## Object API Name

ssot\_\_ConversationReasonCategory\_\_dlm

## Category

Other

## Primary Subject Area

## Primary Key

Conversation Reason Category (ssot\_\_Id\_\_c)

## Relationships

None.

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Average Duration Seconds | ssot__AverageDurationSecondsNumber__c | The average duration for the conversation category in seconds. | number |
| Average Number of Conversation Turns | ssot__AverageNumOfTurnsConversationNumber__c | The average number of turns in the conversation category/ | number |
| Conversation Reason Category ID | ssot__Id__c | A unique ID used as the primary key for the conversation reason category DMO. | text |
| Conversation Reason Report Definition | ssot__ConvReasonReportDefinitionID__c | A reference ID to the conversation reason report definition. | text |
| Data Source | ssot__DateSourceId__c | A reference ID for the logical name for a system that is the source of records identified by the external record ID. | text |
| Data Source Object | ssot__DateSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Einstein Score | ssot__EinsteinScoreNumber__c | The Einstein score for the conversation reason category. | number |
| Frequency Percent | ssot__FrequencyPercent__c | The frequency percent for the conversation reason category. | number |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the conversation reason category. | text |
| Name | ssot__Name__c | The name of the conversation reason category. | text |
| Reason Count | ssot__ReasonCount__c | The count of conversation reasons in the category. | number |
| Total Conversation Count | ssot__TotalConnversationCount__c | The count of conversations in the category. | number |
| Training Date | ssot__TrainingDate__c | The date when the category report training last occurred. | dateTime |
