---
title: "Loyalty Member Currency DMO"
domain: data-cloud
topic: loyalty-member-currency-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:43.574Z
keywords: [Loyalty, Member, Currency, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Loyalty Member Currency DMO

# Loyalty Member Currency DMO

The Loyalty Member Currency DMO is a Data Cloud data model object (DMO) representing the value a loyalty member selects to receive, for example, as airline miles or as points.

## Object API Name

ssot\_\_LoyaltyMemberCurrency\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Loyalty Member Currency ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Loyalty Member Currency | Loyalty Member Tier |  | Loyalty Member Tier | Loyalty Member Tier ID |
| Loyalty Member Currency | Loyalty Program Member |  | Loyalty Program Member | Loyalty Program Member ID |
| Loyalty Member Currency | Currency Type |  | Loyalty Program Currency | Loyalty Program Currency ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Currency Type | ssot__CurrencyTypeId__c | A reference ID to methods of accruing value in loyalty program, for example miles, points, or a hard currency such as US dollars. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Expirable Points | ssot__ExpirablePointsNumber__c | The number of points that expire if not redeemed. | number |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Last Accrual Processed Date | ssot__LastAccrualProcessedDate__c | The date when point accrual process was last run. | dateTime |
| Last Expiration Process Run Date | ssot__LastExpirationProcessRunDate__c | The date when expirable points were last calculated. | dateTime |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Last Reset Date | ssot__LastResetDate__c | The date when points were most recently converted to baseline value for point accrual period. | dateTime |
| Loyalty Member Currency Id | ssot__Id__c | A unique ID used as primary key for the Loyalty Member Currency DMO. | text |
| Loyalty Member Tier Id | ssot__LoyaltyMemberTierId__c | A reference ID to which tier loyalty member belongs. | text |
| Loyalty Program Member | ssot__LoyaltyProgramMemberId__c | A reference ID to person who joined loyalty program. | text |
| Name | ssot__Name__c | The loyalty member currency name. | text |
| Next Reset Date | ssot__NextResetDate__c | The date when points are changed to a baseline value for the accrual period. | dateTime |
| Points Balance | ssot__PointsBalanceNumber__c | The current number of points available for redemption. | number |
| Points Balance Before Reset | ssot__PointsBalanceBeforeResetNumber__c | The total number of points before account was reset. | number |
| Total Points Accrued | ssot__TotalPointsAccruedNumber__c | The total number of accrued points, including expired and redeemed points. | number |
| Total Points Expired | ssot__TotalPointsExpiredNumber__c | The total number of expired points. | number |
| Total Points Redeemed | ssot__TotalPointsRedeemedNumber__c | The total number of points redeemed. | number |