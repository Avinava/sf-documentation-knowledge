---
title: "Deposit Account DMO"
domain: data-cloud
topic: deposit-account-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.876Z
estimatedTokens: 352
keywords: [Deposit, Account, DMO, Represents, subtype, financial, account., Provided, Financial, Services, Cloud, Data, Kit., API, version, later., Name, Category, Primary, Subject]
---

# Deposit Account DMO

> Represents a subtype of a financial account. Provided in the Financial Services Cloud
      Data Kit. This DMO is available in API version 58 and later.

# Deposit Account DMO

Represents a subtype of a financial account. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_DepositAccount\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Deposit Account ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Deposit Account | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |
| Financial Account | Deposit Account ID | Many To One (N:1) | Deposit Account | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Description | ssot__Description__c | The deposit account description. | Text | Financial Services Cloud |
| Financial Account ID | ssot__FinancialAccountID__c | The associated financial account. | Text | Financial Services Cloud |
| Deposit Account ID | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Name | ssot__Name__c | The deposit account name. | Text | Financial Services Cloud |
| Is Tax Free Saving Account | ssot__isTaxFreeSavingAccount__c | Indicates whether the account is tax free. | Text | Financial Services Cloud |
