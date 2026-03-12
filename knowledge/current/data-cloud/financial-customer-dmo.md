---
title: "Financial Customer DMO"
domain: data-cloud
topic: financial-customer-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.052Z
estimatedTokens: 441
keywords: [Financial, Customer, DMO, Represents, extension, account, capture, financial, services, attributes., Provided, Services, Cloud, Data, Kit., API, version, later., Name, Category]
---

# Financial Customer DMO

> Represents an extension of an account to capture financial services attributes.
      Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and
      later.

# Financial Customer DMO

Represents an extension of an account to capture financial services attributes. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_FinancialCustomer\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Financial Customer ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Financial Customer | Account ID | Many To One (N:1) | Account | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Account ID | ssot__AccountId__c | The associated account. | Text | Financial Services Cloud |
| Customer Category | ssot__CustomerCategory__c | The rating of individual's business with your firm. | Text | Financial Services Cloud |
| Customer Service Level | ssot__CustomerServiceLevel__c | The service level assigned to the financial customer. | Text | Financial Services Cloud |
| Description | ssot__Description__c | The financial customer description. | Text | Financial Services Cloud |
| Financial Customer ID | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Investment Experience Level | ssot__InvestmentExperienceLevel__c | The financial customer investment experience level. | Text | Financial Services Cloud |
| Name | ssot__Name__c | The financial customer name. | Text | Financial Services Cloud |
| Policy Count | ssot__PolicyCount__c | The total number of active policies that the policy holder’s primary household owns. | Number | Financial Services Cloud |
