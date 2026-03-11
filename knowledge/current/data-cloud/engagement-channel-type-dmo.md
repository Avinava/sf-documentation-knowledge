---
title: "Engagement Channel Type DMO"
domain: data-cloud
topic: engagement-channel-type-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.380Z
keywords: [Engagement, Channel, Type, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Engagement Channel Type DMO

# Engagement Channel Type DMO

The Engagement Channel Type DMO is a Data Cloud data model object (DMO) for which channels are supported by individual preferences. For example, individuals can set consent preferences for SMS but not for a phone call.

## Object API Name

ssot\_\_EngagementChannelType\_\_dlm

## Category

Engagement

## Primary Subject Area

Engagement

## Primary Key

Engagement Channel Type ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Authorization Form Consent | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |
| Communication Subscription Channel Type | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |
| Device Application Engagement | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |
| Email Engagement | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |
| Message Engagement | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |
| Privacy Consent Log | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |
| Product Browse Engagement | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |
| Product Order Engagement | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |
| Shopping Cart Engagement | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |
| Website Engagement | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |
| Web Search Engagement | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |
| Opportunity Engagement | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |
| Email Publication | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |
| SMS Publication | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Can Capture Consent | ssot__CanCaptureConsent__c | An indicator whether the engagement channel provides a way for viewer or consumer of communication to agree to it. For example, consumers can be asked to authorize SMS messages, but they can't be asked to authorize the viewing of billboards. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Engagement Channel Type ID | ssot__Id__c | A unique ID used as primary key for the Engagement Channel Type DMO. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to business unit or other internal organization that owns the business account. | text |
| Is Direct Activation Channel | ssot__IsDirectActivationChannel__c | An indicator whether an activation channel is available for use in Salesforce applications. | text |
| Name | ssot__Name__c | The name of engagement channel type, for example SMS, email, or phone. | text |