---
title: "Financial Account Transaction DMO"
domain: data-cloud
topic: financial-account-transaction-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.799Z
estimatedTokens: 1011
keywords: [Financial, Account, Transaction, DMO, transactions, There, various, credit, debit, forth, Provided, Services, Cloud, Data, Kit]
---

# Financial Account Transaction DMO

> Represents transactions related to a financial account. There can be various types of
      transactions such as credit, debit, and so forth. Provided in the Financial Services Cloud
      Data Kit. This DMO is available in API version 58 and later.

# Financial Account Transaction DMO

Represents transactions related to a financial account. There can be various types of transactions such as credit, debit, and so forth. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_FinancialAccountTransaction\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Financial Account Transaction ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Financial Account Transaction | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Acquiring Bank Name | ssot__AcquiringBankName__c | The acquiring bank name. | Text | Financial Services Cloud |
| Authorization Record Text | ssot__AuthorizationRecordText__c | The transaction authorization code (if credit or debit). | Text | Financial Services Cloud |
| Card Scheme Name | ssot__CardSchemeName__c | The card name. | Text | Financial Services Cloud |
| Cash Flow Type | ssot__CashFlowType__c | The direction of the transaction from the perspective of the account holder: inflow or outflow. | Text | Financial Services Cloud |
| Currency | ssot__Currency__c | The associated currency. | Text | Financial Services Cloud |
| Description | ssot__Description__c | The financial account transaction description. | Text | Financial Services Cloud |
| Financial Account ID | ssot__FinancialAccountID__c | The associated financial account. | Text | Financial Services Cloud |
| FinancialAccountTransactionType__c | ssot__FinancialAccountTransactionType__c | The transaction type. | Text | Financial Services Cloud |
| ForexConversionChargeAmount__c | ssot__ForexConversionChargeAmount__c | The amount of charge within the transaction relating to Forex conversion. | Number | Financial Services Cloud |
| Financial Transaction ID | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Issuing Bank Name | ssot__IssuingBankName__c | The credit or debit card issuing bank name. | Text | Financial Services Cloud |
| Merchant Category Code | ssot__MerchantCategoryCode__c | The merchant identifier. | Text | Financial Services Cloud |
| Merchant Name | ssot__MerchantName__c | The merchant accepting payment of debit or credit card. | Text | Financial Services Cloud |
| Name | ssot__Name__c | The financial account transaction name. | Text | Financial Services Cloud |
| Running Balance Amount | ssot__RunningBalanceAmount__c | The running balance of the transaction. | Number | Financial Services Cloud |
| Secret Key Identifier | ssot__SecretKeyIdentifier__c | The secret identifier if the transaction is from open banking. | Text | Financial Services Cloud |
| Source System Identifier | ssot__SourceSystemIdentifier__c | The external data source record ID. | Text | Financial Services Cloud |
| Source Transaction Identifier | ssot__SourceTransactionIdentifier__c | The external data source unique identifier. | Text | Financial Services Cloud |
| Source Transaction Type Code | ssot__SourceTransactionTypeCode__c | The external data source transaction type. | Text | Financial Services Cloud |
| Target Account Identifier | ssot__TargetAccountIdentifier__c | The payment target account unique identifier. | Text | Financial Services Cloud |
| Transaction Amount | ssot__TransactionAmount__c | The transaction amount. | Number | Financial Services Cloud |
| Transaction Date | ssot__TransactionDate__c | The transaction date. | Date Time | Financial Services Cloud |
| Transaction Location Name | ssot__TransactionLocationName__c | The transaction location name. | Text | Financial Services Cloud |
| Transaction Posted Date | ssot__TransactionPostedDate__c | The transaction posted date. | Date Time | Financial Services Cloud |
