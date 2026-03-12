---
title: "Communication Subscription Channel Type DMO"
domain: data-cloud
topic: communication-subscription-channel-type-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.320Z
estimatedTokens: 534
keywords: [Communication, Subscription, Channel, DMO, Data, Cloud, data, model, engagement, channel, through, which, customer, reached, communication, subscription., API, Name, Category, Primary]
---

# Communication Subscription Channel Type DMO

> The Communication Subscription Channel Type DMO is a Data Cloud data model
      object (DMO) for the engagement channel through which a customer is reached for a
      communication subscription.

# Communication Subscription Channel Type DMO

The Communication Subscription Channel Type DMO is a Data Cloud data model object (DMO) for the engagement channel through which a customer is reached for a communication subscription.

## Object API Name

ssot\_\_CommunicationSubscriptionChannelType\_\_dlm

## Category

Other

## Primary Subject Area

Privacy

## Primary Key

Communication Subscription Channel Type ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Communication Subscription Channel Type | Communication Subscription ID | Many To One: N:1 | Communication Subscription | Communication Subscription ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Communication Subscription Channel Type ID | ssot__Id__c | A unique ID used as primary key for the Communication Subscription Channel Type DMO. | text |
| Communication Subscription ID | ssot__CommunicationSubscriptionId__c | A reference ID to customer’s subscription preferences for a specific communication. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Engagement Channel Type | ssot__EngagementChannelTypeId__c | A reference ID to channel type by which message can be delivered, for example email, phone call, SMS message, or TV advertisement. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the data record. | text |
