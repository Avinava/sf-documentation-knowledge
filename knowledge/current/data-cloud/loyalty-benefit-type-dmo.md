---
title: "Loyalty Benefit Type DMO"
domain: data-cloud
topic: loyalty-benefit-type-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.556Z
keywords: [Loyalty, Benefit, Type, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Loyalty Benefit Type DMO

# Loyalty Benefit Type DMO

The Loyalty Benefit Type DMO is a Data Cloud data model object (DMO) for the type of loyalty benefit, such as rewards or gift cards.

## Object API Name

ssot\_\_LoyaltyBenefitType\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Loyalty Benefit Type ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Loyalty Benefit | Benefit Action | Many To One: N:1 | Benefit Action | Benefit Action ID |
| Loyalty Benefit | Loyalty Benefit Type | Many To One: N:1 | Loyalty Benefit Type | Loyalty Benefit Type ID |
| Loyalty Tier Benefit | Loyalty Benefit | Many To One: N:1 | Loyalty Benefit | Loyalty Benefit ID |
| Member Benefit | Loyalty Benefit | Many To One: N:1 | Loyalty Benefit | Loyalty Benefit ID |
| Voucher | Loyalty Benefit | Many To One: N:1 | Loyalty Benefit | Loyalty Benefit ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date when the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| External Record Id | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source Id | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | reference ID to the business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Loyalty Benefit Category | ssot__LoyaltyBenefitCategoryId__c | A reference ID to category of loyalty benefit. | text |
| Loyalty Benefit Type ID | ssot__Id__c | A unique ID used as primary key for the Loyalty Benefit Type DMO. | text |
| Loyalty Program | ssot__LoyaltyProgramId__c | A reference ID to a loyalty program. | text |
| Name | ssot__Name__c | The name of loyalty benefit type. | text |