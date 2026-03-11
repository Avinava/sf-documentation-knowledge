---
title: "Financial Account Balance DMO"
domain: data-cloud
topic: financial-account-balance-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.388Z
keywords: [Financial, Account, Balance, DMO, API, Name, Category, Primary, Subject, Area, Key, Label, Relationships, Fields]
---

# Financial Account Balance DMO

# Financial Account Balance DMO

Represents types of balances associated to a financial account. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_FinancialAccountBalance\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Financial Account Balance ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Financial Account Balance | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Amount | ssot__Amount__c | The balance current value. | Number | Financial Services Cloud |
| Currency | ssot__Currency__c | The associated currency. | Text | Financial Services Cloud |
| Description | ssot__Description__c | The financial account balance description. | Text | Financial Services Cloud |
| End Date | ssot__EndDate__c | The balance end date. | Date Time | Financial Services Cloud |
| Financial Account Id | ssot__FinancialAccountId__c | The associated financial account. | Text | Financial Services Cloud |
| Financial Balance Type | ssot__FinancialBalanceType__c | The financial balance type. | Text | Financial Services Cloud |
| Financial Account Balance ID | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Name | ssot__Name__c | The financial account balance name. | Text | Financial Services Cloud |
| Start Date | ssot__StartDate__c | The balance start date. | Date Time | Financial Services Cloud |