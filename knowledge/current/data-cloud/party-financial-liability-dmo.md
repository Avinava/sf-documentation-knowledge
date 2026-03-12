---
title: "Party Financial Liability DMO"
domain: data-cloud
topic: party-financial-liability-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.386Z
estimatedTokens: 502
keywords: [Party, Financial, Liability, DMO, associated, individual, organization, mortgage, loan, Provided, Services, Cloud, Data, Kit, API]
---

# Party Financial Liability DMO

> Represents a financial liability associated with an individual or an organization. For
      example a mortgage or loan. Provided in the Financial Services Cloud Data Kit. This DMO is
      available in API version 58 and later.

# Party Financial Liability DMO

Represents a financial liability associated with an individual or an organization. For example a mortgage or loan. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_PartyFinancialLiability\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Party Financial Liability ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Party Financial Liability | Party ID | Many To One (N:1) | Party | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Currency | ssot__Currency__c | The associated currency. | Text | Financial Services Cloud |
| Description | ssot__Description__c | The description of the party financial liability. | Text | Financial Services Cloud |
| End Date | ssot__EndDate__c | The effective end date of the market value. | Date Time | Financial Services Cloud |
| Financial Liability Type | ssot__FinancialLiabilityType__c | The type of the financial liability. | Text | Financial Services Cloud |
| Party Financial Liability Id | ssot__PartyFinancialLiabilityId__c | The primary key. | Text | Financial Services Cloud |
| Market Value | ssot__MarketValue__c | The market value of the liability. | Number | Financial Services Cloud |
| Name | ssot__Name__c | The name of the party financial liability. | Text | Financial Services Cloud |
| Party ID | ssot__PartyId__c | The associated party who owns the liability. | Text | Financial Services Cloud |
| Start Date | ssot__StartDate__c | The effective start date of the market value. | Date Time | Financial Services Cloud |
| Valuation Date | ssot__ValuationDate__c | The date on which the market value was captured. | Date Time | Financial Services Cloud |
