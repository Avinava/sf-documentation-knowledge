---
title: "Loyalty Journal Type DMO"
domain: data-cloud
topic: loyalty-journal-type-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.004Z
estimatedTokens: 502
keywords: [Loyalty, Journal, DMO, Data, Cloud, model, API, Category, Primary, Subject, Area, Key, Relationships]
---

# Loyalty Journal Type DMO

> The Loyalty Journal Type DMO is a Data Cloud data model object (DMO) for
      the type of loyalty journal.

# Loyalty Journal Type DMO

The Loyalty Journal Type DMO is a Data Cloud data model object (DMO) for the type of loyalty journal.

## Object API Name

ssot\_\_LoyaltyJournalType\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Loyalty Journal Type ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Loyalty Journal Subtype | Loyalty Journal Type ID | Many To One: N:1 | Loyalty Journal Type | Loyalty Journal Type ID |
| Loyalty Transaction Journal | Loyalty Journal Type | Many To One: N:1 | Loyalty Journal Type | Loyalty Journal Type ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date when a record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Loyalty Journal Type ID | ssot__Id__c | A unique ID used as primary key for the Loyalty Journal Type DMO. | text |
| Name | ssot__Name__c | The names of the loyalty transaction journal, for example, accrual, redemption, or signup. | text |
