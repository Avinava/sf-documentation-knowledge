---
title: "Party Consent DMO"
domain: data-cloud
topic: party-consent-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.356Z
estimatedTokens: 763
keywords: [Party, Consent, DMO, Privacy, Data, Cloud, model, individual’s, preferences, API, Category, Primary, Subject, Area, Key]
---

# Party Consent DMO

> The Privacy Consent DMO is a Data Cloud data model object 
      (DMO) for an individual’s consent preferences.

# Party Consent DMO

The Privacy Consent DMO is a Data Cloud data model object (DMO) for an individual’s consent preferences.

## Object API Name

ssot\_\_PartyConsent\_\_dlm

## Category

Other

## Primary Subject Area

Privacy

## Primary Key

Party Consent ID (ssot\_\_Id\_\_c)

## Relationships

There are no relationships related to this DMO.

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Consent Captured Contact Point Type | ssot__ConsentCapturedContactPointType__c | The type of communication that an individual provided their consent preferences. | text |
| Consent Captured Date Time | ssot__ConsentCaptureddateTime__c | The date and time when consent was given. | dateTime |
| Consent Captured Source | ssot__ConsentCapturedSource__c | The type of source where consent was retrieved, for example, a website. | text |
| Consent Captured Source | ssot__ConsentCapturedSourceName__c | The specific name of the source where consent was retrieved. | text |
| Consent Status | ssot__ConsentStatusId__c | The status of consent. | text |
| Consent Grantors Relationship | ssot__ConsentGrantors__c | The relationship to the individual who granted consent. | text |
| Created Date | ssot__CreatedDate__c | The date when the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Effective From Date | ssot__EffectiveFromDate__c | The date when consent is in effect. | dateTime |
| Effective To Date | ssot__EffectiveToDate__c | The date when consent is no longer effective. | dateTime |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Name | ssot__Name__c | The short description of privacy consent record. | text |
| Party | ssot__PartyId__c | reference ID to the parent party, for example, an individual, business, or affiliation group. | text |
| Party Role | ssot__PartyRoleId__c | A reference ID to associated party role, for example, a customer, supplier, or competitor. | text |
| Privacy Consent ID | ssot__Id__c | A unique ID used as primary key for the Privacy Consent DMO. | text |
| Privacy Consent Status | ssot__PrivacyConsentStatusId__c | A reference ID for the status of privacy consent, for example opted in or opted out. | text |
