---
title: "Loyalty Program Member Promotion DMO"
domain: data-cloud
topic: loyalty-program-member-promotion-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.603Z
keywords: [Loyalty, Program, Member, Promotion, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Loyalty Program Member Promotion DMO

# Loyalty Program Member Promotion DMO

The Loyalty Program Member Promotion DMO is a Data Cloud data model object (DMO) that represents details about a promotion available to a loyalty program member. For example, if a program allows double points on outdoor purchases.

## Object API Name

ssot\_\_LoyaltyProgramMemberPromotion\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Loyalty Program Member Promotion ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Loyalty Program Member Promotion | Promotion | Many To One: N:1 | Promotion | Promotion ID |
| Loyalty Program Member Promotion | Loyalty Program Member | Many To One: N:1 | Loyalty Program Member | Loyalty Program Member ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Cumulative Usage Complete Percent | ssot__CumulativeUsageCompletePercent__c | The loyalty program member’s promotion usage, expressed as a percentage. | number |
| Cumulative Usage Completed | ssot__CumulativeUsageCompleted__c | The loyalty program member’s promotion usage, expressed as a number. | number |
| Cumulative Usage Target | ssot__CumulativeUsageTargetNumber__c | The loyalty program member’s goal for the use of the promotion. | number |
| Data Source | ssot__DataSourceId__c | A reference ID to the logical name for a system that is the source of records identified by an external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where the record originated, for example a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID to system that External Record Id was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to a business unit or other internal organization that owns a business account. | text |
| Is Enrollment Active | ssot__IsEnrollmentActive__c | An indicator that determines if the loyalty program member is enrolled in the promotion. For example, True indicates that the member is enrolled in the promotion. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when the user last modified the record. | dateTime |
| Loyalty Program Member | ssot__LoyaltyProgramMemberId__c | The name of the loyalty program member that’s associated with the loyalty badge. | text |
| Loyalty Program Member Promotion Id | ssot__Id__c | A unique ID that is used as the primary key for the Loyalty Program Member Promotion DMO. | text |
| Name | ssot__Name__c | The name of a loyalty program member promotion. | text |
| Promotion | ssot__PromotionId__c | A reference ID to the promotion associated with the loyalty program member promotion. | text |