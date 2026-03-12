---
title: "Party Expense DMO"
domain: data-cloud
topic: party-expense-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.668Z
estimatedTokens: 537
keywords: [Party, Expense, DMO, Represents, expense, incurred, individual, account., API, version, later., Name, Category, Primary, Subject, Area, Key, Label, Relationships, Fields]
---

# Party Expense DMO

> Represents the expense incurred by an individual or account. This DMO is available in
      API version 61 and later.

# Party Expense DMO

Represents the expense incurred by an individual or account. This DMO is available in API version 61 and later.

## API Name

ssot\_\_PartyExpense\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Party Expense ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Party Expense | Payee Id | Many To One (N:1) | Party | Id | Financial Services Cloud |
| Party Expense | Payer Id | Many To One (N:1) | Party | Id | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Description | ssot__Description__c | The description of the expense. | Text | Financial Services Cloud |
| End Date Time | ssot__EndDateTime__c | The end date and time of the expense. | Date Time | Financial Services Cloud |
| Expense Recurrence Interval | ssot__ExpenseRecurrenceInterva__c | Specifies the interval after which the expense is incurred. | Text | Financial Services Cloud |
| Expense Status | ssot__ExpenseStatus__c | The status of the expense. | Text | Financial Services Cloud |
| Expense Type | ssot__ExpenseType__c | The type of the expense. | Text | Financial Services Cloud |
| Is Self Paid | ssot__IsSelfPaid__c | Indicates whether the expense is paid by the party. | Boolean | Financial Services Cloud |
| Name | ssot__Name__c | The name of the party expense. | Text | Financial Services Cloud |
| Party Expense Id | ssot__PartyExpenseId__c | Primary key. | Text | Financial Services Cloud |
| Payee | ssot__Payee__c | The related payer party that receives the payment. | Text | Financial Services Cloud |
| Payer | ssot__Payer__c | The related payer party that is obligated to pay the expense. | Text | Financial Services Cloud |
| Start Date Time | ssot__StartDateTime__c | The state date and time of the expense. | Date Time | Financial Services Cloud |
| Total Amount | ssot__TotalAmount__c | The total expense amount. | Number | Financial Services Cloud |
