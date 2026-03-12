---
title: "Loyalty Tier DMO"
domain: data-cloud
topic: loyalty-tier-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.082Z
estimatedTokens: 569
keywords: [Loyalty, Tier, DMO, Data, Cloud, model, level, program, member, benefits, increase, higher, levels, hierarchy, API]
---

# Loyalty Tier DMO

> The Loyalty Tier DMO is a Data Cloud data model object
      (DMO) for a level of a loyalty program where member benefits increase at 
      higher levels of the hierarchy.

# Loyalty Tier DMO

The Loyalty Tier DMO is a Data Cloud data model object (DMO) for a level of a loyalty program where member benefits increase at higher levels of the hierarchy.

## Object API Name

ssot\_\_LoyaltyTier\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Loyalty Tier ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Loyalty Member Tier | Loyalty Tier |  | Loyalty Tier | Loyalty Tier ID |
| Loyalty Tier | Loyalty Tier Group |  | Loyalty Tier Group | Loyalty Tier Group ID |
| Loyalty Tier Benefit | Loyalty Program |  | Loyalty Tier | Loyalty Tier ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date when the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | The description of the loyalty program tier. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to business unit or other internal organization that owns business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Loyalty Tier Group | ssot__LoyaltyTierGroupId__c | A reference ID to the loyalty tier group, for example silver or gold. | text |
| Loyalty Tier ID | ssot__Id__c | A unique ID used as primary key for the Loyalty Tier DMO. | text |
| Name | ssot__Name__c | The name of the loyalty tier. | text |
| Sequence Number | ssot__SequenceNumber__c | The sequence number of the loyalty tier. | number |
