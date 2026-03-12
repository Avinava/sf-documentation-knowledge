---
title: "Financial Goal DMO"
domain: data-cloud
topic: financial-goal-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.063Z
estimatedTokens: 690
keywords: [Financial, Goal, DMO, Represents, money, achieve, financial, goal, such, education, home, purchase., Provided, Services, Cloud, Data, Kit., API, version, later.]
---

# Financial Goal DMO

> Represents the money to achieve a financial goal such as education or home purchase.
      Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and
      later.

# Financial Goal DMO

Represents the money to achieve a financial goal such as education or home purchase. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_FinancialGoal\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Financial Goal ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Financial Goal | Financial Plan ID | Many To One (N:1) | Financial Plan | ID | Financial Services Cloud |
| Financial Goal Party | Financial Goal ID | Many To One (N:1) | Financial Goal | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Actual Value Amount | ssot__ActualValueAmount__c | The actual value of the financial goal. | Number | Financial Services Cloud |
| Completion Date | ssot__CompletionDate__c | The financial goal completion date. | Date Time | Financial Services Cloud |
| Currency | ssot__Currency__c | The currency associated with the value. | Text | Financial Services Cloud |
| Description | ssot__Description__c | The financial goal description. | Text | Financial Services Cloud |
| Estimated Success Percent | ssot__EstimatedSuccessPercent__c | The success percentage that's estimated for the financial goal. | Number | Financial Services Cloud |
| Financial Goal Status | ssot__FinancialGoalStatus__c | The financial goal status. | Text | Financial Services Cloud |
| Financial Goal ID | ssot__FinancialGoalTd__c | The primary key. | Text | Financial Services Cloud |
| Financial Goal Priority | ssot__FinancialGoalPriority__c | The priority of the financial goal. | Text | Financial Services Cloud |
| Financial Goal Type | ssot__FinancialGoalType__c | The financial goal type. | Text | Financial Services Cloud |
| Financial Plan ID | ssot__FinancialPlanId__c | The associated financial plan. | Text | Financial Services Cloud |
| Initial Value Amount | ssot__InitialValueAmount__c | The initial value of the financial goal. | Number | Financial Services Cloud |
| Key Qualifier Financial Goal Id | ssot__KeyQualifierFinancialGoalId__c |  |  |  |
| Name | ssot__Name__c | The financial goal name. | Text | Financial Services Cloud |
| Start Date | ssot__StartDate__c | The start date of the financial goal. | Date Time | Financial Services Cloud |
| Target Date | ssot__TargetDate__c | The financial goal target date. | Date Time | Financial Services Cloud |
| Target Value Amount | ssot__TargetValueAmount__c | The financial goal target value. | Number | Financial Services Cloud |
