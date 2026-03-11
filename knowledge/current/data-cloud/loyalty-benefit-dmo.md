---
title: "Loyalty Benefit DMO"
domain: data-cloud
topic: loyalty-benefit-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.552Z
keywords: [Loyalty, Benefit, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Loyalty Benefit DMO

# Loyalty Benefit DMO

The Loyalty Benefit DMO is a Data Cloud data model object (DMO) for a perk or betterment that is available to the members of a Loyalty Program. Examples include waived airline baggage fees, complimentary hotel stays, or a rental car upgrade.

## Object API Name

ssot\_\_LoyaltyBenefit\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Loyalty Benefit ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Loyalty Benefit | Loyalty Benefit Type | Many To One: N:1 | Loyalty Benefit Type | Loyalty Benefit Type ID |
| Loyalty Tier Benefit | Loyalty Benefit | Many To One: N:1 | Loyalty Benefit | Loyalty Benefit ID |
| Member Benefit | Loyalty Benefit | Many To One: N:1 | Loyalty Benefit | Loyalty Benefit ID |
| Voucher | Loyalty Benefit | Many To One: N:1 | Loyalty Benefit | Loyalty Benefit ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Benefit Action | ssot__BenefitActionId__c | A reference ID for actions such as creating a service entitlement that can be triggered automatically when a loyalty program benefit is assigned to a program member. | text |
| Benefit Status | ssot__BenefitStatusId__c | A reference ID for benefit status values such as Active or Inactive. | text |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by an external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | The description of the loyalty program. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Loyalty Benefit Priority Number | ssot__LoyaltyBenefitPriorityNumber__c | Priority rating of the loyalty benefit, for example, 1 for highest or 2 for second highest priority. | text |
| Loyalty Benefit ID | ssot__Id__c | A unique ID used as the primary key for the Loyalty Benefit DMO. | text |
| Loyalty Benefit Type | ssot__LoyaltyBenefitTypeId__c | A reference ID to the Loyalty Benefit Types that are used to group the various benefits available within a Loyalty Program. For example, baggage benefits could be used to group reduced fees, extra baggage allowances, and weight limit benefits. | text |
| Loyalty Benefit UOM | ssot__LoyaltyBenefitUOM__c | The type of benefit unit within a Loyalty Benefit Type. For example, if the Loyalty Benefit Type is luggage, then UOM is the number of additional free bags. | text |
| Loyalty Benefit Value | ssot__LoyaltyBenefitValueText__c | Loyalty Benefit values are used to determine how many units of the benefit type. For instance if Loyalty Benefit UOM is the number of free bags, then Benefit Value could be 1, 2 or 3. | text |
| Name | ssot__Name__c | Name of the loyalty benefit. | text |