---
title: "Communication Subscription Consent DMO"
domain: data-cloud
topic: communication-subscription-consent-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.972Z
keywords: [Communication, Subscription, Consent, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Communication Subscription Consent DMO

# Communication Subscription Consent DMO

The Communication Subscription Consent DMO is a Data Cloud data model object (DMO) for the engagement or communication channel preferences of a customer.

## Object API Name

ssot\_\_CommunicationSubscriptionConsent\_\_dlm

## Category

Other

## Primary Subject Area

Privacy

## Primary Key

Communication Subscription Consent ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Communication Subscription Timing | Communication Subscription Consent | Many To One: N:1 | Communication Subscription Consent | Communication Subscription Consent ID |
| Communication Subscription Consent | Consent Status | Many To One: N:1 | Consent Status | Consent Status ID |
| Communication Subscription Consent | Party | Many To One: N:1 | Individual | Individual ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Communication Subscription | ssot__CommunicationSubscriptionId__c | A reference ID to customer’s subscription preferences for a specific communication. | text |
| Communication Subscription Consent ID | ssot__Id__c | A unique ID used as primary key for the Communication Subscription Consent DMO. | text |
| Consent Captured Date Time | ssot__ConsentCaptureddateTime__c | The date and time consent was captured. | dateTime |
| Consent Captured Source | ssot__ConsentCapturedSourceName__c | The source where consent was captured. | text |
| Consent Status | ssot__ConsentStatusId__c | A reference ID to a user’s consent status. | text |
| Contact Point | ssot__ContactPointId__c | A reference ID to contact point for party, for example phone number or email address. | text |
| Contact Point Consent | ssot__ContactPointConsentId__c | A reference ID to contact point where customer gives their consent. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Effective From Date | ssot__EffectiveFromDate__c | The date when consent form is in effect. | dateTime |
| Effective To Date | ssot__EffectiveToDate__c | The date when consent form is no longer in effect. | dateTime |
| Engagement Channel Type | ssot__EngagementChannelTypeId__c | A reference ID to engagement channel type. | text |
| Engagement Channel Type Consent | ssot__EngagementChannelTypeConsentId__c | A reference ID to engagement channel consent type. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Name | ssot__Name__c | The name of the communication subscription. | text |
| Party | ssot__PartyId__c | A reference ID to the parent party, for example, an individual, business, or affiliation group.TipThis ID is the same as the one used in the individual object. | text |
| Party Role | ssot__PartyRoleId__c | A reference ID to associated party role, for example, a customer, supplier, or competitor. | text |