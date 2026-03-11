---
title: "Financial Account Fee DMO"
domain: data-cloud
topic: financial-account-fee-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.400Z
keywords: [Financial, Account, Fee, DMO, API, Name, Category, Primary, Subject, Area, Key, Label, Relationships, Fields]
---

# Financial Account Fee DMO

# Financial Account Fee DMO

Represents fees associated with a financial account. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_FinancialAccountFee\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Financial Account Fee ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Financial Account Fee | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Amount | ssot__Amount__c | The financial account fee amount. | Number | Financial Services Cloud |
| Currency | ssot__Currency__c | The financial account fee currency. | Text | Financial Services Cloud |
| Description | ssot__Description__c | The financial account fee description. | Text | Financial Services Cloud |
| End Date | ssot__EndDate__c | The end date of the limit. | Date Time | Financial Services Cloud |
| Financial Account Id | ssot__FinancialAccountId__c | The associated financial account. | Text | Financial Services Cloud |
| Financial Fee Type | ssot__FinancialFeeType__c | The financial account fee type. | Text | Financial Services Cloud |
| Financial Account Fee ID | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Name | ssot__Name__c | The financial account fee name. | Text | Financial Services Cloud |
| Start Date | ssot__StartDate__c | The start date of the financial account fee. | Date Time | Financial Services Cloud |