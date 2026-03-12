---
title: "Party Income DMO"
domain: data-cloud
topic: party-income-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.699Z
estimatedTokens: 874
keywords: [Party, Income, DMO, Represents, income, individual, business., salaries, commissions, fees, rental, sources., API, version, later., Name, Category, Primary, Subject, Area]
---

# Party Income DMO

> Represents the income of an individual or a business. The income can be from salaries,
      commissions, fees, rental properties, and other sources. This DMO is available in API version
      61 and later.

# Party Income DMO

Represents the income of an individual or a business. The income can be from salaries, commissions, fees, rental properties, and other sources. This DMO is available in API version 61 and later.

## API Name

ssot\_\_PartyIncome\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Party Income ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Party Income | Party Id | Many To One (N:1) | Party | Id | Financial Services Cloud |
| Party Income | Party Income Source Id | Many To One (N:1) | Party Financial Asset | Id | Financial Services Cloud |
| Party Income | Party Income Source Id | Many To One (N:1) | Person Employment | Id | Financial Services Cloud |
| Party Income | Party Income Source Id | Many To One (N:1) | Application | Id | Financial Services Cloud |
| Party Income | Employer Id | Many To One (N:1) | Account | Id | Financial Services Cloud |
| Party Income | Employer | Many To One (N:1) | Account | Id | Financial Services Cloud |
| Party Income | Party Income Source Id | Many To One (N:1) | Claim | Id | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Change Reason | ssot__ChangeReason__c | Specifies the reason for an income change. | Text | Financial Services Cloud |
| Employer | ssot__Employer__c | The party income employer. | Text | Financial Services Cloud |
| Employer Address | ssot__EmployerAddress__c | The address of the employer. | Text | Financial Services Cloud |
| Employer Name | ssot__EmployerName__c | The name of the employer. | Text | Financial Services Cloud |
| Employer Phone | ssot__EmployerPhone__c | The phone number of the employer. | Text | Financial Services Cloud |
| End Date Time | ssot__EndDateTime__c | The end date and time of the income. | Date Time | Financial Services Cloud |
| Income Amount | ssot__IncomeAmount__c | The amount of the income. | Number | Financial Services Cloud |
| Income Frequency | ssot__IncomeFrequency__c | The frequency of the income. | Text | Financial Services Cloud |
| Income Loss Percent | ssot__IncomeLossPercent__c | The percentage difference between the income amount and net income. | Number | Financial Services Cloud |
| Income Status | ssot__IncomeStatus__c | The status of the income. | Text | Financial Services Cloud |
| Income Type | ssot__IncomeType__c | The type of income. | Text | Financial Services Cloud |
| Job Title | ssot__JobTitle__c | The job title of the party. |  | Financial Services Cloud |
| Name | ssot__Name__c | The name of the party income. | Text | Financial Services Cloud |
| Net Income | ssot__NetIncome__c | The next income of the party after deductions. | Number | Financial Services Cloud |
| Party | ssot__Party__c | The related party. | Text | Financial Services Cloud |
| Party Income Id | ssot__PartyIncomeId__c | Primary key. | Text | Financial Services Cloud |
| Party Income Source | ssot__PartyIncomeSource__c | The related party income source record. | Text | Financial Services Cloud |
| Party Income Source Object Name | ssot__PartyIncomeSourceObjectName__c | The name of the source object. | Text | Financial Services Cloud |
| Start Date Time | ssot__StartDateTime__c | The start date and time of the income. | Date Time | Financial Services Cloud |
