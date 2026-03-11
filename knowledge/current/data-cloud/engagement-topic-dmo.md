---
title: "Engagement Topic DMO"
domain: data-cloud
topic: engagement-topic-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.385Z
keywords: [Engagement, Topic, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Engagement Topic DMO

# Engagement Topic DMO

The Engagement Topic DMO is a Data Cloud data model object (DMO) that is used to represent information about the topics discussed by a customer and other attendees during an engagement. Each engagement may have multiple topics such as campaigns, promotions, opportunities, and tasks.

## Object API Name

ssot\_\_EngagementTopic\_\_dlm

## Category

Engagement

## Primary Subject Area

Engagement

## Primary Key

Engagement Topic Id

(ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Engagement Topic | Engagement | ManyToOne (N:1) | Email Engagement | Email Engagement ID |
| Engagement Topic | Engagement | ManyToOne (N:1) | Device Application Engagement | Device Application Engagement ID |
| Engagement Topic | Engagement | ManyToOne (N:1) | Message Engagement | Message Engagement ID |
| Engagement Topic | Campaign | ManyToOne {N:1) | Campaign | ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Campaign | ssot__CampaignId__c | A reference ID for a campaign. A campaign is an outbound marketing project that you want to plan, manage, and track. It can be a direct mail program, seminar, print advertisement, email, or other type of marketing initiative. | text |
| Created Date | ssot__CreatedDate__c | The date record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by External Record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Engagement | ssot__EngagementId__c | A reference ID for the engagement record, which is described by the Engagement Topic. For example, an Engagement record that describes an email opened event could have a sales campaign as a topic. | text |
| Engagement Topic Group | ssot__EngagementTopicGroupId__c | A reference ID for the main list of topics that engagements can be about. | text |
| Engagement Topic Id | ssot__Id__c | A unique ID used as primary key for the Email Template DMO. | text |
| External Record Id | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text |
| External Source Id | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID for the business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when user last modified record. | dateTime |
| Opportunity | ssot__OpportunityId__c | A reference ID for a deal or sale that is in progress, not yet completed. | text |
| Promotion | ssot__PromotionId__c | A reference ID for any type of marketing communication used to inform or persuade target audiences of the relative merits of a product, service, brand, or issue. | text |