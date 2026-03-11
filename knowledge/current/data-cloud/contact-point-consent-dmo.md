---
title: "Contact Point Consent DMO"
domain: data-cloud
topic: contact-point-consent-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.010Z
keywords: [Contact, Point, Consent, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Contact Point Consent DMO

# Contact Point Consent DMO

The Contact Point Consent DMO is a Data Cloud data model object (DMO) for recording information about consent for a specific contact point. This data includes when, how, for how long, and whether the party has double opted-in.

## Object API Name

ssot\_\_ContactPointConsent\_\_dlm

## Category

Other

## Primary Subject Area

Privacy

## Primary Key

Contact Point Consent ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Contact Point Consent | Contact Point | Many To One: N:1 | Contact Point Email | Contact Point Email ID |
| Contact Point Consent | Contact Point | Many To One: N:1 | Contact Point Phone | Contact Point Phone ID |
| Contact Point Consent | Contact Point | Many To One: N:1 | Contact Point Address | Contact Point Address ID |
| Contact Point Consent | Contact Point | Many To One: N:1 | Contact Point Social | Contact Point Social ID |
| Contact Point Consent | Contact Point | Many To One: N:1 | Contact Point App | Contact Point App ID |
| Contact Point Consent | Contact Point | Many To One: N:1 | Contact Point OTT Service | Contact Point OTT Service ID |
| Contact Point Consent | Party | Many To One: N:1 | Individual | Individual ID |
| Contact Point Consent | Data Use Purpose | Many To One: N:1 | Data Use Purpose | Data Use Purpose ID |
| Contact Point Consent | Consent Status | Many To One: N:1 | Consent Status | Consent Status ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Consent Captured Date Time | ssot__ConsentCaptureddateTime__c | The date and time consent was captured. | dateTime |
| Consent Captured Source | ssot__ConsentCapturedSourceName__c | The location where consent was captured. | text |
| Consent Status | ssot__ConsentStatusId__c | A reference ID to consent status. | text |
| Contact Point | ssot__ContactPointId__c | A reference ID to a contact point. | text |
| Contact Point Consent ID | ssot__Id__c | A unique ID that is used as the primary key for the Consent Point Consent DMO. | text |
| Data Source | ssot__DataSourceId__c | A reference ID to a logical name for a system that is the source of records identified by an external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where the record originated, for example a cloud storage file or another connector’s external object. | text |
| Data Use Purpose | ssot__DataUsePurposeId__c | A reference ID to how the data is being used. | text |
| Double Consent Capture Date Time | ssot__DoubleConsentCapturedateTime__c | The data and time a contact consents to receive communication using a double-opt in process. | dateTime |
| Effective From Date | ssot__EffectiveFromDate__c | The date when the consent form is in effect. | dateTime |
| Effective To Date | ssot__EffectiveToDate__c | The date when the consent form is no longer in effect. | dateTime |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Name | ssot__Name__c | The name of the contact who provided consent. | text |
| Party | ssot__PartyId__c | A reference ID to the parent party, for example, an individual, business, or affiliation group. | text |
| Party Role | ssot__PartyRoleId__c | A reference ID to an associated party role, for example, a customer, supplier, or competitor. | text |