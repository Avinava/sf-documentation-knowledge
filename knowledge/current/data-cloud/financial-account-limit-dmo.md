---
title: "Financial Account Limit DMO"
domain: data-cloud
topic: financial-account-limit-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.407Z
keywords: [Financial, Account, Limit, DMO, API, Name, Category, Primary, Subject, Area, Key, Label, Relationships, Fields]
---

# Financial Account Limit DMO

# Financial Account Limit DMO

Represents the limits associated with a financial account. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_FinancialAccountLimit\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Financial Account Limit ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Financial Account Limit | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Amount | ssot__Amount__c | The currency value of the limit amount. | Number | Financial Services Cloud |
| Currency | ssot__Currency__c | The associated currency. | Text | Financial Services Cloud |
| Description | ssot__Description__c | The financial account limit. | Text | Financial Services Cloud |
| End Date | ssot__EndDate__c | The limit end date. | Date Time | Financial Services Cloud |
| Financial Account Id | ssot__FinancialAccountId__c | The associated financial account. | Text | Financial Services Cloud |
| Financial Limit Type | ssot__FinancialLimitType__c | The financial limit type. | Text | Financial Services Cloud |
| Financial Account Limit ID | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Name | ssot__Name__c | The financial account limit name. | Text | Financial Services Cloud |
| Start Date | ssot__StartDate__c | The limit start date. | Date Time | Financial Services Cloud |