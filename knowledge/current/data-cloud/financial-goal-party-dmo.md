---
title: "Financial Goal Party DMO"
domain: data-cloud
topic: financial-goal-party-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.432Z
keywords: [Financial, Goal, Party, DMO, API, Name, Category, Primary, Subject, Area, Key, Label, Relationships, Fields]
---

# Financial Goal Party DMO

# Financial Goal Party DMO

Represents an association between a financial goal and the related party. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_FinancialGoalParty\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Financial Goal Party ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Financial Goal Party | Financial Goal ID | Many To One (N:1) | Financial Goal | ID | Financial Services Cloud |
| Financial Goal Party | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Financial Goal Party ID | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Name | ssot__Name__c | The financial goal party name. | Text | Financial Services Cloud |
| Financial Goal Id | ssot__FinancialGoalId__c | The associated financial goal. | Text | Financial Services Cloud |
| Party ID | ssot__PartyId__c | The associated party. | Text | Financial Services Cloud |