---
title: "Engagement Channel Type Consent DMO"
domain: data-cloud
topic: engagement-channel-type-consent-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:43.375Z
keywords: [Engagement, Channel, Type, Consent, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Engagement Channel Type Consent DMO

# Engagement Channel Type Consent DMO

The Engagement Channel Type Consent DMO is a Data Cloud data model object (DMO) for an individual’s consent preferences specific to a type of communication, such as email.

## Object API Name

ssot\_\_EngagementChannelTypeConsent\_\_dlm

## Category

Engagement

## Primary Subject Area

Privacy

## Primary Key

Engagement Channel Type Consent ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Engagement Channel Type Consent | Party | Many To One: N:1 | Individual | Individual ID |
| Engagement Channel Type Consent | Consent Status | Many To One: N:1 | Consent Status | Consent Status ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Consent Captured Date Time | ssot__ConsentCaptureddateTime__c | The date and time when consent was captured. | dateTime |
| Consent Captured Source | ssot__ConsentCapturedSourceName__c | The location where consent was captured for an individual. | text |
| Consent Status | ssot__ConsentStatusId__c | A reference ID for an individual’s consent status, for example, opted out of data collection. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Data Use Purpose | ssot__DataUsePurposeId__c | A reference ID to reason for contacting prospect or customer, for example billing, marketing, or surveys. | text |
| Effective From Date | ssot__EffectiveFromDate__c | The date when consent form is in effect. | dateTime |
| Effective To Date | ssot__EffectiveToDate__c | The date when a consent form is no longer in effect. | dateTime |
| Engagement Channel Type | ssot__EngagementChannelTypeId__c | A reference ID to method of message delivery, for example and email or TV commercial. | text |
| Engagement Channel Type Consent ID | ssot__Id__c | A unique ID used as primary key for the Engagement Channel Type Consent DMO. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Name | ssot__Name__c | The name of the engagement channel type. | text |
| Party | ssot__PartyId__c | A reference ID to the parent party, for example, an individual, business, or affiliation group. | text |
| Party Role | ssot__PartyRoleId__c | A reference ID to associated party role, for example, a customer, supplier, or competitor. | text |