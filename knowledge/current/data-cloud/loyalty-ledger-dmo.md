---
title: "Loyalty Ledger DMO"
domain: data-cloud
topic: loyalty-ledger-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.293Z
estimatedTokens: 945
keywords: [Loyalty, Ledger, DMO, Data, Cloud, data, model, record, points, credited, debited, member, across, transactions., API, Name, Category, Primary, Subject, Area]
---

# Loyalty Ledger DMO

> The Loyalty Ledger DMO is a Data Cloud data model object (DMO) to record the points
      credited or debited for a member across transactions.

# Loyalty Ledger DMO

The Loyalty Ledger DMO is a Data Cloud data model object (DMO) to record the points credited or debited for a member across transactions.

## Object API Name

ssot\_\_LoyaltyLedger\_\_dlm

## Category

Other

## Primary Subject Area

Loyalty

## Primary Key

Loyalty Ledger ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Loyalty Ledger | Loyalty Program Currency | Many To One: N:1 | Loyalty Program Currency | Loyalty Program Currency ID |
| Loyalty Ledger | Loyalty Transaction Journal | Many To One: N:1 | Loyalty Transaction Journal | Loyalty Transaction Journal ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Activity Datetime | ssot__ActivitydateTime__c | The date a loyalty program member completes a transaction with the loyalty program partner. | dateTime |
| Created Date | ssot__CreatedDate__c | The date when the record was created. | dateTime |
| Data Entity | ssot__DataEntityId__c | A reference ID to the category a business or organization is interested in, for example, a hospital, account, or person. | text |
| Data Entity Instance | ssot__DataEntityInstanceId__c | A reference ID to a particular occurrence of one category of things defined by the Data Entity. | text |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by an external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Financial TransactionType | ssot__FinancialTransactionTypeId__c | A reference ID to financial transactions, for example Credit or Debit. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | DateTime |
| Ledger Processing Status | ssot__LedgerProcessingStatusId__c | A reference ID to the value of Ledger Processing Status, for example, not processed, successfully processed, or failed processing. | text |
| Loyalty Currency Unit Quantity | ssot__LoyaltyCurrencyUnitQuantity__c | The total number of loyalty currency units, such as points or miles, given for ledger record. | number |
| Loyalty Ledger ID | ssot__Id__c | A unique ID used as the primary key for the Loyalty Ledger DMO. | text |
| Loyalty Ledger Notes | ssot__LoyaltyLedgerNotestext__c | Additional details about loyalty ledger entry. | text |
| Loyalty Program Currency | ssot__LoyaltyProgramCurrencyId__c | A reference ID to the medium of exchange allowed within a loyalty program, for example points or miles. | text |
| Loyalty Program Currency Expiration Date | ssot__LoyaltyProgramCurrencyExpirationDate__c | The date when the loyalty program currency is set to expire. | dateTime |
| Loyalty Program Currency Units Quantity | ssot__LoyaltyProgramCurrencyUnitsQuantity__c | The quantity of loyalty program currency awarded or spent in a transaction. | number |
| Loyalty Transaction Journal | ssot__LoyaltyTransactionJournalId__c | A reference ID to a collection of transactions related to loyalty program. | text |
| Name | ssot__Name__c | The name of a loyalty ledger. | text |
