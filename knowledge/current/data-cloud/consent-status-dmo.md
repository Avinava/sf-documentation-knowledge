---
title: "Consent Status DMO"
domain: data-cloud
topic: consent-status-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.986Z
keywords: [Consent, Status, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Consent Status DMO

# Consent Status DMO

The Consent Status DMO is a Data Cloud data model object (DMO) for the status of consent, for example opted in or out of data collection.

## Object API Name

ssot\_\_ConsentStatus\_\_dlm

## Category

Other

## Primary Subject Area

Privacy

## Primary Key

Consent Status ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Authorization Form Consent | Consent Status | Many To One: N:1 | Consent Status | Consent Status ID |
| Communication Subscription Consent | Consent Status | Many To One: N:1 | Consent Status | Consent Status ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Consent Status ID | ssot__Id__c | A unique ID used as primary key for the Consent Status DMO. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID for an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Name | ssot__Name__c | The consent status name. | text |