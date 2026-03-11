---
title: "Salesforce CRM: Financial Holding Mappings"
domain: data-cloud
topic: salesforce-crm-financial-holding-mappings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.113Z
keywords: [Salesforce, CRM, Financial, Holding, Mappings, Usage, Data, Bundle, DLO, DMO, Mapping]
---

# Salesforce CRM: Financial Holding Mappings

# Salesforce CRM: Financial Holding Mappings

These data mappings are for the FinancialHolding DLO found in Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

Bundle:

-   Financial Services Cloud

## DLO to DMO Mapping

These data mappings relate to the FinancialHolding object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO API Name | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- | --- |
| Asset Category | FinServ__AssetCategory__c | picklist | Financial Holding | Financial Holding Class |
| Asset Category Name | FinServ__AssetCategoryName__c | picklist | Financial Holding | Financial Holding Sub Class |
| Asset Class | FinServ__AssetClass__c | picklist | Financial Holding | Equity Category |
| Financial Account | FinServ__FinancialAccount__c | reference | Financial Holding | Financial Account |
| Gain Loss | FinServ__GainLoss__c | currency | Financial Holding | Gain Loss Amount |
| Id |  | id | Financial Holding | Financial Holding Id |
| Market Value | FinServ__MarketValue__c | currency | Financial Holding | Market Value Amount |
| Name |  | text | Financial Holding | Name |
| Percent Change | FinServ__PercentChange__c | number | Financial Holding | Change Percent |
| Primary Owner | FinServ__PrimaryOwner__c | text | Financial Holding | Account |
| Purchase Price | FinServ__PurchasePrice__c | currency | Financial Holding | Purchase Price |
| Shares | FinServ__Shares__c | number | Financial Holding | Holding Count |
| Source System Id | FinServ__SourceSystemId__c | external reference | Financial Holding | Source System Identifier |
| Symbol | FinServ__Symbol__c | reference | Financial Holding | Financial Security |