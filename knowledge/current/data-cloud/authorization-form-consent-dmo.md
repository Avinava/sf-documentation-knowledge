---
title: "Authorization Form Consent DMO"
domain: data-cloud
topic: authorization-form-consent-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.867Z
estimatedTokens: 843
keywords: [Authorization, Form, Consent, DMO, Data, Cloud, data, model, captures, where, how, party, gives, consent, form, set, terms, conditions, privacy, policy.]
---

# Authorization Form Consent DMO

> The Authorization Form Consent DMO is a Data Cloud data model object (DMO). This DMO
      captures the where, when, and how a party gives consent for a form, a set of terms and
      conditions, or a privacy policy.

# Authorization Form Consent DMO

The Authorization Form Consent DMO is a Data Cloud data model object (DMO). This DMO captures the where, when, and how a party gives consent for a form, a set of terms and conditions, or a privacy policy.

## Object API Name

ssot\_\_AuthorizationFormConsent\_\_dlm

## Category

Other

## Primary Subject Area

Privacy

## Primary Key

Authorization Form Consent ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Authorization Form Consent | Party | Many To One: N:1 | Individual | Individual ID |
| Authorization Form Consent | Authorization Form Text | Many To One: N:1 | Authorization Form Text | Authorization Form Text ID |
| Authorization Form Consent | Consent Status | Many To One: N:1 | Consent Status | Consent Status ID |
| Authorization Form Consent | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Authorization Form Text | ssot__AuthorizationFormTextId__c | A reference ID to an authorization form’s text and language settings. | text |
| AuthorizationFormConsent ID | ssot__Id__c | A unique ID used as the primary key for the Authorization Form Consent DMO. | text |
| Consent Captured Date Time | ssot__ConsentCapturedDateTime__c | The date and time consent was captured. | dateTime |
| Consent Captured Source | ssot__ConsentCapturedSourceName__c | The location consent was captured. | text |
| Consent Status | ssot__ConsentStatusId__c | A reference ID to the status of consent, for example opted in or out of data collection. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by an external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Effective From Date | ssot__EffectiveFromDate__c | The date when a consent form is in effect. | dateTime |
| Effective To Date | ssot__EffectiveToDate__c | The date when a consent form is no longer in effect. | dateTime |
| Engagement Channel Type | ssot__EngagementChannelTypeId__c | A reference ID to the channels supported by individual preferences. | text |
| Entity | ssot__EntityId__c | A reference ID to the entity related to the authorization consent form. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Name | ssot__Name__c | The name of the authorization consent form. | text |
| Party | ssot__PartyId__c | A reference ID to the parent party, for example, an individual, business, or affiliation group. | text |
| Party Role | ssot__PartyRoleId__c | A reference ID to an associated party role, for example, a customer, supplier, or competitor. | text |
