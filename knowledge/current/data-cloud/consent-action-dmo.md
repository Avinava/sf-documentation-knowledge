---
title: "Consent Action DMO"
domain: data-cloud
topic: consent-action-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.185Z
estimatedTokens: 399
keywords: [Consent, Action, DMO, Data, Cloud, model, user, consents, their, collection, web, activity, tracking, API, Category]
---

# Consent Action DMO

> The Consent Action DMO is a Data Cloud data model object (DMO) for what a
      user consents to be done with their data, for example, data collection or web activity
      tracking.

# Consent Action DMO

The Consent Action DMO is a Data Cloud data model object (DMO) for what a user consents to be done with their data, for example, data collection or web activity tracking.

## Object API Name

ssot\_\_ConsentAction\_\_dlm

## Category

Other

## Primary Subject Area

Privacy

## Primary Key

Consent Action ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Privacy Consent Log | Consent Action | Many To One: N:1 | Consent Action | Consent Action ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Consent Action ID | ssot__Id__c | A unique ID used as primary key for the Consent Action DMO. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID to system that External Record Id was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Name | ssot__Name__c | The consent action name. | text |
