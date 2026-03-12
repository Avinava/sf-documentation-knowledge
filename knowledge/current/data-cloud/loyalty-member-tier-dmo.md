---
title: "Loyalty Member Tier DMO"
domain: data-cloud
topic: loyalty-member-tier-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.308Z
estimatedTokens: 700
keywords: [Loyalty, Member, Tier, DMO, Data, Cloud, data, model, benefit, tier, within, program, member, assigned., API, Name, Category, Primary, Subject, Area]
---

# Loyalty Member Tier DMO

> The Loyalty Member Tier DMO is a Data Cloud data model object (DMO)
      for the
      benefit
      tier within the program that a member is assigned.

# Loyalty Member Tier DMO

The Loyalty Member Tier DMO is a Data Cloud data model object (DMO) for the benefit tier within the program that a member is assigned.

## Object API Name

ssot\_\_LoyaltyMemberTier\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Loyalty Member Tier ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Loyalty Member Currency | Loyalty Member Tier | Many To One: N:1 | Loyalty Member Tier | Loyalty Member Tier ID |
| Loyalty Member Tier | Loyalty Program Member | Many To One: N:1 | Loyalty Program Member | Loyalty Program Member ID |
| Loyalty Member Tier | Loyalty Tier | Many To One: N:1 | Loyalty Tier | Loyalty Tier ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID to logical name for system that is source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID to logical name of object where record originated, for example a cloud storage file or another connector’s external object. | text |
| Effective Date | ssot__EffectiveDate__c | The date when a member joined the loyalty tier. | dateTime |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Loyalty Member Tier Change Type | ssot__LoyaltyMemberTierChangeTypeId__c | A reference ID to change type of loyalty member tier. | text |
| Loyalty Member Tier ID | ssot__Id__c | A unique ID used as primary key for the Loyalty Member Tier DMO. | text |
| Loyalty Program Member | ssot__LoyaltyProgramMemberId__c | A reference ID to individual who joined loyalty program. | text |
| Loyalty Tier | ssot__LoyaltyTierId__c | A reference ID to tier of loyalty program. Member benefits increase as member moves up loyalty program hierarchy. | text |
| Name | ssot__Name__c | The name of loyalty member tier. | text |
| Tier Change Reason | ssot__TierChangeReasonText__c | An explanation of a loyalty member tier change. | text |
| Tier Expiration Date | ssot__TierExpirationDate__c | The date when member's eligibility for loyalty member tier expires. | text |
