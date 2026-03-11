---
title: "Privacy Consent Log DMO"
domain: data-cloud
topic: privacy-consent-log-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:43.866Z
keywords: [Privacy, Consent, Log, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Privacy Consent Log DMO

# Privacy Consent Log DMO

The Privacy Consent Log DMO is a Data Cloud data model object (DMO) for information about a user’s requested consent and privacy information.

## Object API Name

ssot\_\_PrivacyConsentLog\_\_dlm

## Category

Other

## Primary Subject Area

Privacy

## Primary Key

Privacy Consent Log ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Privacy Consent Log | Consent Action | Many To One: N:1 | Consent Action | Consent Action ID |
| Privacy Consent Log | Contact Point | Many To One: N:1 | Contact Point Address | Contact Point Address ID |
| Privacy Consent Log | Contact Point | Many To One: N:1 | Contact Point App | Contact Point App ID |
| Privacy Consent Log | Contact Point | Many To One: N:1 | Contact Point Email | Contact Point Email ID |
| Privacy Consent Log | Contact Point | Many To One: N:1 | Contact Point Phone | Contact Point Phone ID |
| Privacy Consent Log | Contact Point | Many To One: N:1 | Contact Point Social | Contact Point Social ID |
| Privacy Consent Log | Engagement Channel Type | Many To One: N:1 | Engagement Channel Type | Engagement Channel Type Id |
| Privacy Consent Log | Individual | Many To One: N:1 | Individual | Individual ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Consent Action | ssot__ConsentActionId__c | A reference ID to the types of actions a user allows, like data collection. | text |
| Consent Triggering Event Type | ssot__ConsentTriggeringEventTypeId__c | A reference ID to the task the user was performing when they provided a privacy consent decision. | text |
| Contact Point | ssot__ContactPointId__c | A reference ID to specific email address, phone number, or other contact method used to communicate with a party. | text |
| Created Date | ssot__CreatedDate__c | The date when the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Device Latitude | ssot__DeviceLat__c | The north or south geographic coordinate of user's device during session. | number |
| Device Longitude | ssot__DeviceLgtd__c | The east or west geographic coordinate of user's device during session. | number |
| Engagement Channel Action | ssot__EngagementChannelActionId__c | A reference ID to an activity or operation performed by channel. | text |
| Engagement Channel Type | ssot__EngagementChannelTypeId__c | A reference ID to the method of message delivery, for example an email, call, or ad. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Individual | ssot__IndividualId__c | A reference ID to the account’s contact. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Privacy Consent Activity Date Time | ssot__PrivacyConsentActivityDttm__c | The date and time of activity that resulted in log entry. | dateTime |
| Privacy Consent Log Category | ssot__PrivacyConsentLogCategoryId__c | A reference ID to category of privacy consent log, for example, profile or behavioral. | text |
| Privacy Consent Log ID | ssot__Id__c | A unique ID used as primary key for the Privacy Consent Log DMO. | text |
| Privacy Consent Status | ssot__PrivacyConsentStatusId__c | A reference ID for the status of privacy consent, for example opted in or opted out. | text |