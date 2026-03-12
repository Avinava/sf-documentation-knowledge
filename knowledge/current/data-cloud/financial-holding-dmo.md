---
title: "Financial Holding DMO"
domain: data-cloud
topic: financial-holding-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.083Z
estimatedTokens: 719
keywords: [Financial, Holding, DMO, Represents, financial, holdings, associated, either, account, account., Provided, Services, Cloud, Data, Kit., API, version, later., Name, Category]
---

# Financial Holding DMO

> Represents the financial holdings associated with either an account or a financial
      account. Provided in the Financial Services Cloud Data Kit. This DMO is available in API
      version 58 and later.

# Financial Holding DMO

Represents the financial holdings associated with either an account or a financial account. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_FinancialHolding\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Financial Holding ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Financial Holding | Account ID | Many To One (N:1) | Account | ID | Financial Services Cloud |
| Financial Holding | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |
| Financial Holding | Financial Security ID | Many To One (N:1) | Financial Security | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Account ID | ssot__AccountId__c | The associated account. | Text | Financial Services Cloud |
| Change Percent | ssot__ChangePercent__c | The percentage change in price. | Number | Financial Services Cloud |
| Currency | ssot__Currency__c | The currency associated with the price. | Text | Financial Services Cloud |
| Description | ssot__Description__c | The financial holding description. | Text | Financial Services Cloud |
| Equity Category | ssot__EquityCategory__c | The financial holding category. | Text | Financial Services Cloud |
| Financial Account Id | ssot__FinancialAccountId__c | The associated financial account. | Text | Financial Services Cloud |
| Financial Holding Class | ssot__FinancialHoldingClass__c | The financial holding class. | Text | Financial Services Cloud |
| Financial Holding Sub Class | ssot__FinancialHoldingSubClass__c | The financial holding sub class. | Text | Financial Services Cloud |
| Financial Security ID | ssot__FinancialSecurityId__c | The associated security. | Text | Financial Services Cloud |
| Gain Loss Amount | ssot__GainLossAmount__c | The gain or loss amount. | Number | Financial Services Cloud |
| Holding Count | ssot__HoldingCount__c | The number of holdings purchased. | Number | Financial Services Cloud |
| Financial Holding ID | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Market Value Amount | ssot__MarketValueAmount__c | The holding market value. | Number | Financial Services Cloud |
| Name | ssot__Name__c | The financial holding name. | Text | Financial Services Cloud |
| Purchase Price Amount | ssot__PurchasePriceAmount__c | The holding purchase price. | Number | Financial Services Cloud |
| Source System Identifier | ssot__SourceSystemIdentifier__c | The ID that uniquely identifies the holding in an external data source. | Text | Financial Services Cloud |
