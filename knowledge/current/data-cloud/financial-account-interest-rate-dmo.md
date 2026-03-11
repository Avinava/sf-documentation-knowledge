---
title: "Financial Account Interest Rate DMO"
domain: data-cloud
topic: financial-account-interest-rate-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.404Z
keywords: [Financial, Account, Interest, Rate, DMO, API, Name, Category, Primary, Subject, Area, Key, Label, Relationships, Fields]
---

# Financial Account Interest Rate DMO

# Financial Account Interest Rate DMO

Represents the interest rate associated with a financial account. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_FinancialAccountInterestRate\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Financial Account Interest Rate (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Financial Account Interest Rate | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Description | ssot__Description__c | The financial account description. | Text | Financial Services Cloud |
| End Date | ssot__EndDate__c | The end date of the interest rate limit. | Date Time | Financial Services Cloud |
| Financial Account ID | ssot__FinancialAccountId__c | The associated financial account. | Text | Financial Services Cloud |
| Financial Interest Rate ID | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Interest Rate Percent | ssot__InterestRatePercent__c | The interest rate percentage. | Number | Financial Services Cloud |
| Interest Rate Type | ssot__InterestRateType__c | The interest rate type. | Text | Financial Services Cloud |
| Name | ssot__Name__c | The interest rate name. | Text | Financial Services Cloud |
| Start Date | ssot__StartDate__c | The start date of the limit. | Date Time | Financial Services Cloud |