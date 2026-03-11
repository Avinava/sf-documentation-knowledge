---
title: "Member Benefit DMO"
domain: data-cloud
topic: member-benefit-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.754Z
keywords: [Member, Benefit, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Member Benefit DMO

# Member Benefit DMO

The Member Benefit DMO is a Data Cloud data model object (DMO) for a benefit available within the loyalty program that a member is qualified for and has elected to receive.

## Object API Name

ssot\_\_MemberBenefit\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Member Benefit ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Member Benefit | Loyalty Benefit | Many To One: N:1 | Loyalty Benefit | Loyalty Benefit ID |
| Member Benefit | Loyalty Program Member | Many To One: N:1 | Loyalty Program Member | Loyalty Program Member ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID to logical name of object where record originated, for example a cloud storage file or another connector’s external object. | text |
| End Date | ssot__EndDate__c | The last date when member can receive loyalty program benefits. | dateTime |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Loyalty Benefit | ssot__LoyaltyBenefitId__c | A reference ID to perk or betterment available to loyalty program members. | text |
| Loyalty Program Member | ssot__LoyaltyProgramMemberId__c | A reference ID to person who has joined a loyalty program. | text |
| Member Benefit ID | ssot__Id__c | A unique ID used as primary key for the Member Benefit DMO. | text |
| Member Benefit Status | ssot__MemberBenefitStatusId__c | A reference ID to status of member benefit for example new or pending. | text |
| Name | ssot__Name__c | The name of the member benefit. | text |
| Start Date | ssot__StartDate__c | The first date when member can receive loyalty program benefits. | dateTime |