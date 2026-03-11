---
title: "Financial Plan DMO"
domain: data-cloud
topic: financial-plan-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.441Z
keywords: [Financial, Plan, DMO, API, Name, Category, Primary, Subject, Area, Key, Label, Relationships, Fields]
---

# Financial Plan DMO

# Financial Plan DMO

Represents a financial plan for a person account. This DMO is available in API version 61 and later.

## API Name

ssot\_\_FinancialPlan\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Financial Plan ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Financial Plan | Party Id | Many To One (N:1) | Party | Id | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Description | ssot__Description__c | The description of the financial plan. | Text | Financial Services Cloud |
| Estimated Success Percent | ssot__EstimatedSuccessPercent__c | The success percentage that's estimated for the financial plan. | Number | Financial Services Cloud |
| Financial Plan Id | ssot__FinancialPlanId__c | Primary key. | Text | Financial Services Cloud |
| Financial Plan Status | ssot__FinancialPlanStatus__c | The status of the financial plan. | Text | Financial Services Cloud |
| Financial Plan Type | ssot__FinancialPlanType__c | The type of the financial plan. | Text | Financial Services Cloud |
| Name | ssot__Name__c | The name of the financial plan. | Text | Financial Services Cloud |
| Party | ssot__Party__c | The related party. | Text | Financial Services Cloud |
| Start Date | ssot__StartDate__c | The start date of the financial plan. | Date | Financial Services Cloud |