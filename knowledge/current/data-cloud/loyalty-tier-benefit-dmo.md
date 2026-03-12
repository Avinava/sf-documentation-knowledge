---
title: "Loyalty Tier Benefit DMO"
domain: data-cloud
topic: loyalty-tier-benefit-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.365Z
estimatedTokens: 528
keywords: [Loyalty, Tier, Benefit, DMO, Data, Cloud, data, model, benefit, specific, loyalty, member, tier., API, Name, Category, Primary, Subject, Area, Key]
---

# Loyalty Tier Benefit DMO

> The Loyalty Tier Benefit DMO is a Data Cloud data model object
      (DMO) for a benefit that is available in a specific loyalty member tier.

# Loyalty Tier Benefit DMO

The Loyalty Tier Benefit DMO is a Data Cloud data model object (DMO) for a benefit that is available in a specific loyalty member tier.

## Object API Name

ssot\_\_LoyaltyTierBenefit\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Loyalty Tier Benefit ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Loyalty Tier Benefit | Loyalty Benefit | Many To One: N:1 | Loyalty Benefit | Loyalty Benefit ID |
| Loyalty Tier Benefit | Loyalty Tier | Many To One: N:1 | Loyalty Tier | Loyalty Tier ID |

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
| Loyalty Benefit | ssot__LoyaltyBenefitId__c | A reference ID to loyalty benefit. | text |
| Loyalty Tier | ssot__LoyaltyTierId__c | A reference ID to loyalty tier. | text |
| Loyalty Tier Benefit ID | ssot__Id__c | A unique ID used as primary key for the Loyalty Tier Benefit DMO. | text |
| Name | ssot__Name__c | The name of the loyalty tier benefit. | text |
