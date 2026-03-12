---
title: "Communication Subscription Timing DMO"
domain: data-cloud
topic: communication-subscription-timing-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.181Z
estimatedTokens: 676
keywords: [Communication, Subscription, Timing, DMO, Data, Cloud, model, customer's, preferences, receiving, API, Category, Primary, Subject, Area]
---

# Communication Subscription Timing DMO

> The Communication Subscription Timing DMO is a Data Cloud data 
      model object (DMO) for a customer's timing preferences for receiving a communication 
      subscription.

# Communication Subscription Timing DMO

The Communication Subscription Timing DMO is a Data Cloud data model object (DMO) for a customer's timing preferences for receiving a communication subscription.

## Object API Name

ssot\_\_CommunicationSubscriptionTiming\_\_dlm

## Category

Other

## Primary Subject Area

Privacy

## Primary Key

Communication Subscription Timing ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Communication Subscription Timing | Communication Subscription Consent | Many To One: N:1 | Communication Subscription Consent | Communication Subscription Consent ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Communication Subscription Consent | ssot__CommunicationSubscriptionConsentId__c | A reference ID to preferences for one engagement channel on one communication subscription (channel) created by a care coordinator or patient. | text |
| Communication Subscription Timing ID | ssot__Id__c | A unique ID used as primary key for the Communication Subscription Timing DMO. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID to system that External Record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Offset | ssot__Offset__c | When a communication subscription occurs based on the unit of measure, for example, if UOM is "day of week" and offset is "1", communication subscriptions occur on Mondays. | text |
| Preferred Time End | ssot__PreferredEndTime__c | The user’s preferred end time to stop sending communications. | dateTime |
| Preferred Time Start | ssot__PreferredStartTime__c | The user’s preferred start time for sending communications. | dateTime |
| Preferred Time Zone | ssot__PreferredTimeZoneId__c | A reference ID to range of longitudes where common standard time is used. | text |
| Time UOM | ssot__TimeUOM__c | A reference ID to unit of measure (time) used in communication subscription, for example hours or days. | text |
