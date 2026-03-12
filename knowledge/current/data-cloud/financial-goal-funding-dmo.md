---
title: "Financial Goal Funding DMO"
domain: data-cloud
topic: financial-goal-funding-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.071Z
estimatedTokens: 380
keywords: [Financial, Goal, Funding, DMO, Represents, financial, goal, individual, person, account, requires, funding., API, version, later., Name, Category, Primary, Subject, Area]
---

# Financial Goal Funding DMO

> Represents a financial goal of an individual or person account that requires funding.
      This DMO is available in API version 61 and later.

# Financial Goal Funding DMO

Represents a financial goal of an individual or person account that requires funding. This DMO is available in API version 61 and later.

## API Name

ssot\_\_FinancialGoalFunding\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Financial Goal Funding ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Financial Goal Funding | Financial Goal Id | Many To One (N:1) | Financial Goal | Id | Financial Services Cloud |
| Financial Goal Funding | Financial Source Id | Many To One (N:1) | Financial Account | Id | Financial Services Cloud |
| Financial Goal Funding | Financial Source Id | Many To One (N:1) | Party Financial Asset | Id | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Financial Goal | ssot__FiancialGoal__c | Specifies to the Financial Goal. | Text | Financial Services Cloud |
| Financial Goal Funding Id | ssot__FinancialGoalFundingId__c | Primary key. | Text | Financial Services Cloud |
| Funding Source | ssot__FundingSource__c | Represents the reference to funding source. A financial account or asset held by a party. | Text | Financial Services Cloud |
| Funding Source Object | ssot__FundingSourceObject__c | Name of the funding source object. | Text | Financial Services Cloud |
