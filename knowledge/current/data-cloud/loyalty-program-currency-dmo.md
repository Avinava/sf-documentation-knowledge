---
title: "Loyalty Program Currency DMO"
domain: data-cloud
topic: loyalty-program-currency-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:15.041Z
estimatedTokens: 989
keywords: [Loyalty, Program, Currency, DMO, Data, Cloud, model, representing, offers, customers, API, Category, Primary, Subject, Area]
---

# Loyalty Program Currency DMO

> The Loyalty Program Currency DMO is a Data Cloud data model object
      (DMO) representing the value or currency that the loyalty program offers to
      customers.

# Loyalty Program Currency DMO

The Loyalty Program Currency DMO is a Data Cloud data model object (DMO) representing the value or currency that the loyalty program offers to customers.

## Object API Name

ssot\_\_LoyaltyProgramCurrency\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Loyalty Program Currency ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Loyalty Ledger | Loyalty Program Currency | Many To One (N:1) | Loyalty Program Currency | Loyalty Program Currency ID |
| Loyalty Member Currency | Currency Type | Many To One (N:1) | Loyalty Program Currency | Loyalty Program Currency ID |
| Loyalty Program Currency | Loyalty Program | Many To One (N:1) | Loyalty Program | Household ID |
| Loyalty Program Currency | Loyalty Tier Group | Many To One (N:1) | Loyalty Tier Group | Loyalty Tier Group ID |
| Promotion | Loyalty Program Currency | Many To One (N:1) | Loyalty Program Currency | Loyalty Program Currency ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Currency Expiration Extension Model | ssot__CurrencyExpirationExtensionModelId__c | A reference ID to the program’s currency model, for example, the rewards don’t expire or expire on a certain date. | text |
| Currency Expiration Model | ssot__CurrencyExpirationModelId__c | A reference ID to the values of the currency expiration model, such as fixed or activity based. | text |
| Currency Type | ssot__CurrencyTypeId__c | A reference ID to methods of accruing value in loyalty program, for example miles, points, or a hard currency such as US dollars. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Expiration Period Frequency | ssot__ExpirationPeriodFrequencyNumber__c | The frequent currency units expire in relation to the unit of measure (UOM). | number |
| Expiration Period Frequency Time UOM | ssot__ExpirationPeriodFrequencyTimeUOM__c | The time period for how often currency such as points or miles expire. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | Expiration Period Frequency Time UOM ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Is Active | ssot__IsActive__c | An indicator if the currency is being used. | text |
| Is Primary | ssot__IsPrimary__c | An indicator if the currency is the primary currency for the loyalty program. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Loyalty Program | ssot__LoyaltyProgramId__c | A reference ID to the loyalty program. | text |
| Loyalty Program Currency ID | ssot__Id__c | A unique ID used as primary key for the Loyalty Program Currency DMO. | text |
| Loyalty Tier Group | ssot__LoyaltyTierGroupId__c | A reference ID to the tiers available in a loyalty program. | text |
| Name | ssot__Name__c | The loyalty member currency name. | text |
| Qualifying Point End Date | ssot__QualifyingPointEndDate__c | The date when currency stops being accrued. | dateTime |
| Qualifying Point Start Date | ssot__QualifyingPointStartDate__c | The date when currency begins to be accrued. | dateTime |
