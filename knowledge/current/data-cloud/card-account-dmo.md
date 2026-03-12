---
title: "Card Account DMO"
domain: data-cloud
topic: card-account-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.826Z
estimatedTokens: 339
keywords: [Card, Account, DMO, financial, tool, offered, bank, loan, line, revolving, credit, access, via, card's, Provided]
---

# Card Account DMO

> Represents a financial tool offered by a bank as a type of loan, with a line of
      revolving credit that you can access via your card and your card's account. Provided in the
      Financial Services Cloud Data Kit. This DMO is available in API version 58 and
      later.

# Card Account DMO

Represents a financial tool offered by a bank as a type of loan, with a line of revolving credit that you can access via your card and your card's account. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_CardAccount\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key

Card Account ID (ssot\_\_Id\_\_c)

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Card Account | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |
| Financial Account | Card Account ID | Many To One (N:1) | Card Account | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Description | ssot__Description__c | The credit card account description. | Text | Financial Services Cloud |
| Financial Account | ssot__FinancialAccount__c | The associated financial account. | Text | Financial Services Cloud |
| Card Account ID | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Name | ssot__Name__c | The credit card account. name. | Text | Financial Services Cloud |
