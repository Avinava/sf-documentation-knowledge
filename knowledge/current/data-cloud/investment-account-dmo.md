---
title: "Investment Account DMO"
domain: data-cloud
topic: investment-account-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:35:53.847Z
estimatedTokens: 460
keywords: [Category, Relationships, Investment, Account, DMO, subtype, financial, Provided, Services, Cloud, Kit, API, Primary, Subject, Area, Key, Label]
---

> Represents a subtype of a financial account. Provided in the Financial Services Cloud
      Data Kit. This DMO is available in API version 58 and later.

# Investment Account DMO

Represents a subtype of a financial account. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_InvestmentAccount\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Investment Account (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Investment Account | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |
| Financial Account | Investment Account ID | Many To One (N:1) | Investment Account | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Annual Yield Percentage | ssot__AnnualYieldPercentage__c | The annual percentage yield of the investment account. | Number | Financial Services Cloud |
| Description | ssot__Description__c | The description of the investment account. | Text | Financial Services Cloud |
| Financial Account ID | ssot__FinancialAccountID__c | The associated financial account. | Text | Financial Services Cloud |
| Investment Account ID | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Investment Objective | ssot__InvestmentObjective__c | The associated investment objective. | Text | Financial Services Cloud |
| Investment Time Horizon | ssot__InvestmentTimeHorizon__c | The investment time horizon. | Text | Financial Services Cloud |
| Model Portfolio Type | ssot__ModelPortfolioType__c | The associated model portfolio type. | Text | Financial Services Cloud |
| Name | ssot__Name__c | The name of the investment account. | Text | Financial Services Cloud |
