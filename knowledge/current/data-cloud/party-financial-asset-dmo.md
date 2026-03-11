---
title: "Party Financial Asset DMO"
domain: data-cloud
topic: party-financial-asset-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.829Z
keywords: [Party, Financial, Asset, DMO, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Party Financial Asset DMO

# Party Financial Asset DMO

Represents a financial asset associated with an individual or an organization. For example, cash in hand, owned property, and so forth. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_PartyFinancialAsset\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key

Party Financial Asset ID (ssot\_\_Id\_\_c)

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Party Financial Asset | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Currency | ssot__Curency__c | The associated currency. | Text | Financial Services Cloud |
| Description | ssot__Description__c | The description of the party financial asset. | Text | Financial Services Cloud |
| End Date | ssot__EndDate__c | The effective end date of the market value. | Date Time | Financial Services Cloud |
| Financial Asset Type | ssot__FinancialAssetType__c | The type of financial asset. | Text | Financial Services Cloud |
| Party Financial Asset Id | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Market Value | ssot__MarketValue__c | The market value of the asset. | Number | Financial Services Cloud |
| Name | ssot__Name__c | The name of the party financial asset. | Text | Financial Services Cloud |
| Party ID | ssot__PartyId__c | The party who owns the asset. | Text | Financial Services Cloud |
| Start Date | ssot__StartDate__c | The effective start date of the market value. | Date Time | Financial Services Cloud |
| Valuation Date | ssot__ValuationDate__c | The date on which the market value was captured. | Date Time | Financial Services Cloud |