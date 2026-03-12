---
title: "Financial Security DMO"
domain: data-cloud
topic: financial-security-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.095Z
estimatedTokens: 405
keywords: [Financial, Security, DMO, Represents, financial, holding, such, securities, bonds, mutual, funds, forth, relation, either, account, investment, Provided, Services, Cloud, Data]
---

# Financial Security DMO

> Represents a financial holding such as securities, bonds, mutual funds, and so forth
      in relation to either an account or a financial account (investment account). Provided in the
      Financial Services Cloud Data Kit. This DMO is available in API version 58 and
      later.

# Financial Security DMO

Represents a financial holding such as securities, bonds, mutual funds, and so forth in relation to either an account or a financial account (investment account). Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_FinancialSecurity\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Financial Security (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Financial Holding | Financial Security | Many To One (N:1) | Financial Security | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Currency | ssot__Currency__c | The currency associated with the price. | Text | Financial Services Cloud |
| Description | ssot__Description__c | The financial security description. | Text | Financial Services Cloud |
| Financial Exchange | ssot__FinancialExchange__c | The financial exchange description. | Text | Financial Services Cloud |
| Financial Security ID | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Name | ssot__Name__c | The financial security name. | Text | Financial Services Cloud |
| Price Amount | ssot__PriceAmount__c | The current price of the security. | Number | Financial Services Cloud |
| Security Identifer | ssot__SecurityIdentifier__c | The security identifier. | Text | Financial Services Cloud |
