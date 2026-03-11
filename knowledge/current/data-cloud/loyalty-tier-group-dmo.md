---
title: "Loyalty Tier Group DMO"
domain: data-cloud
topic: loyalty-tier-group-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.621Z
keywords: [Loyalty, Tier, Group, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Loyalty Tier Group DMO

# Loyalty Tier Group DMO

The Loyalty Tier Group DMO is a Data Cloud data model object (DMO) for loyalty programs that have multiple tiers of benefits. Tiers can be organized based on objectives, for example, lifetime, marketing, or regular.

## Object API Name

ssot\_\_LoyaltyTierGroup\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Loyalty Tier Group Id (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Loyalty Program Currency | Loyalty Tier Group | Many To One: N:1 | Loyalty Tier Group | Loyalty Tier Group ID |
| Loyalty Tier | Loyalty Tier Group | Many To One: N:1 | Loyalty Tier Group | Loyalty Tier Group ID |
| Loyalty Tier Group | Loyalty Program | Many To One: N:1 | Loyalty Program | Loyalty Program ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date when the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by an external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Description | ssot__Description__c | A description of the loyalty program tier group. | text |
| External Record Id | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source Id | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to a business unit or other internal organization that owns a business account. | text |
| Is Active | ssot__IsActive__c | An indicator of whether the loyalty tier group is active. | text |
| Is Extended To End Of Month | ssot__IsExtendedToEndOfMonth__c | An indicator that determines if the benefit expiration date is extended to the last date of the month. | text |
| Is Hidden To Members | ssot__IsHiddenToMembers__c | An indicator that determines the visibility of the Loyalty Tier Group to the members of the loyalty program. | text |
| Is Primary | ssot__IsPrimary__c | An indicator that determines if the loyalty tier group is the primary tier group for the loyalty program. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Loyalty Program | ssot__LoyaltyProgramId__c | A reference ID to a marketing strategy designed to encourage customers to shop at or use the services of business associated with the program. | text |
| Loyalty Tier Group Id | ssot__Id__c | A unique ID that is used as the primary key for the Loyalty Tier Group DMO. | text |
| Loyalty Tier Model | ssot__LoyaltyTierModelId__c | A reference ID to the tier model used for processing, either fixed or anniversary. | text |
| Name | ssot__Name__c | The name of the loyalty program tier group. | text |
| Qualifying Points Reset Date | ssot__QualifyingPointsResetDate__c | The date when the qualifying points are to be reset. | dateTime |
| Qualifying Points Reset Frequency | ssot__QualifyingPointsResetFrequencyNumber__c | The unit of measure for the reset period between qualifying points resets. For example, the number of months between a reset. | number |
| Qualifying Points Reset Period UOM | ssot__QualifyingPointsResetPeriodUOM__c | The measure of time between resets of qualifying points, for example monthly or yearly. | text |
| Tier Period Time UOM | ssot__TierPeriodTimeUOM__c | The measure of time between processing of tiers, for example monthly or yearly. | text |
| Tier Time Period Quantity | ssot__TierTimePeriodQuantity__c | The number of time units that between processing of tiers within the loyalty tier group. | number |