---
title: "Conversation Reason DMO"
domain: data-cloud
topic: conversation-reason-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.449Z
estimatedTokens: 537
keywords: [Conversation, Reason, DMO, Data, Clouddata, model, reason, conversation, started., contains, aggregated, metrics, excerpts., Example, values, include, cancel, order, update, check]
---

# Conversation Reason DMO

> The Conversation Reason DMO is a Data Clouddata model object for the
      reason a conversation started. It contains aggregated metrics for excerpts. Example values
      include cancel order, update order, and check on order status.

# Conversation Reason DMO

The Conversation Reason DMO is a Data Clouddata model object for the reason a conversation started. It contains aggregated metrics for excerpts. Example values include cancel order, update order, and check on order status.

## Object API Name

ssot\_\_ConversationReason\_\_dlm

## Category

Other.

## Primary Subject Area

## Primary Key

Conversation Reason ID (ssot\_\_Id\_\_c)

## Relationships

None.

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Average Duration In Seconds | ssot__AverageDurationInSeconds__c | The average duration of the conversation is in seconds. | number |
| Average Number of Turns | ssot__AverageNumOfTurnsNumber__c | The average number of turns for the conversation. | number |
| Conversation Reason Category | ssot__ConversationReasonCategoryId__c | A reference ID to the conversation reason category. | text |
| Conversation Reason ID | ssot__Id__c | A unique ID used as the primary key for the conversation reason DMO. | text |
| Conversation Reason | ssot__ConversationReasonStatusCode__c | A reference ID to the conversation reason status code. | text |
| Data Source | ssot__DateSourceId__c | A reference ID for the logical name for a system that is the source of records identified by the external record ID. | text |
| Data Source Object | ssot__DateSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Einstein Score | ssot__EinsteinScoreNumber__c | The Einstein score for the conversation. | number |
| Frequency Percent | ssot__FrequencyPercent__c | The frequency percent for the conversation. | number |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the conversation reason. | text |
| Summary Text | ssot__SummaryText__c | A summary text for the conversation reason. | text |
| Total Conversation Count | ssot__TotalConversationCount__c | The total number of conversations. | number |
