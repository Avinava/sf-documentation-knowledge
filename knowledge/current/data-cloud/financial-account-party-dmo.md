---
title: "Financial Account Party DMO"
domain: data-cloud
topic: financial-account-party-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.412Z
keywords: [Financial, Account, Party, DMO, API, Name, Category, Primary, Subject, Area, Key, Label, Relationships, Fields]
---

# Financial Account Party DMO

# Financial Account Party DMO

Represents the role of an organization account or person account related to a financial account. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_FinancialAccountParty\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Financial Account Party ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Financial Account Party | Account Contact ID | Many To One (N:1) | Account Contact | ID | Financial Services Cloud |
| Financial Account Party | Account ID | Many To One (N:1) | Account | ID | Financial Services Cloud |
| Financial Account Party | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Account Contact Id | ssot__AccountContactId__c | The associated contact. | Text | Financial Services Cloud |
| Account ID | ssot__AccountId__c | The associated account. | Text | Financial Services Cloud |
| Description | ssot__Description__c | The financial account party description. | Text | Financial Services Cloud |
| Financial Account ID | ssot__FinancialAccountId__c | The associated financial account. | Text | Financial Services Cloud |
| Financial Account Role | ssot__FinancialAccountRole__c | The financial party role. | Text | Financial Services Cloud |
| Financial Account Party ID | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Name | ssot__Name__c | The financial account party name. | Text | Financial Services Cloud |
| Is Active | ssot__IsActive__c | Indicates if the association is active. | Text | Financial Services Cloud |
| Is Primary Owner | ssot__IsPrimaryOwner__c | Indicates whether the party is the primary owner of the associated financial account. | Text | Financial Services Cloud |