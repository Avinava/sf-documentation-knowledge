---
title: "Loyalty Journal Subtype DMO"
domain: data-cloud
topic: loyalty-journal-subtype-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.560Z
keywords: [Loyalty, Journal, Subtype, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Loyalty Journal Subtype DMO

# Loyalty Journal Subtype DMO

The Loyalty Journal Subtype DMO is a Data Cloud data model object (DMO) for a subtype of a loyalty journal type, such as a watched video or product review.

## Object API Name

ssot\_\_LoyaltyJournalSubtype\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Loyalty Journal Subtype Id (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Loyalty Journal Subtype | Loyalty Journal Type ID | Many To One: N:1 | Loyalty Journal Type | Loyalty Journal Type ID |
| Loyalty Transaction Journal | Loyalty Journal Subtype | Many To One: N:1 | Loyalty Journal Subtype | Loyalty Journal Subtype ID |
| Voucher | Loyalty Journal Subtype | Many To One: N:1 | Loyalty Journal Subtype | Loyalty Journal Subtype ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date when the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Loyalty Journal Subtype ID | ssot__Id__c | A unique ID used as primary key for the Loyalty Journal Subtype DMO. | text |
| Loyalty Journal Type ID | ssot__LoyaltyJournalTypeId__c | A reference ID to loyalty program journal type, for example accrual, redemption, and signup. | text |
| Name | ssot__Name__c | Name of loyalty program journal subtype. | text |