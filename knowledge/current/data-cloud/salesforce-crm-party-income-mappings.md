---
title: "Salesforce CRM: Party Income Mappings"
domain: data-cloud
topic: salesforce-crm-party-income-mappings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.415Z
estimatedTokens: 305
keywords: [Salesforce, CRM, Party, Income, Mappings, data, PartyIncome, DLO, found, Financial, Services, Cloud, bundle, Connector, Usage]
---

# Salesforce CRM: Party Income Mappings

> These data mappings are for the PartyIncome DLO found in the Financial Services Cloud
    bundle of the Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: Party Income Mappings

These data mappings are for the PartyIncome DLO found in the Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

Bundle:

-   Financial Services Cloud

## DLO to DMO Mapping

These data mappings relate to the PartyIncome object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO API Name | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- | --- |
| End Date Time | FinServ__ExpenseType__c | Date/Time | PartyIncome | End Date |
| Income Amount | FinServ__ExpenseType__c | Currency | PartyIncome | Income Amount |
| Income Frequency | FinServ__ExpenseType__c | Picklist | PartyIncome | Income Frequency |
| Income Status | FinServ__ExpenseType__c | Picklist | PartyIncome | Income Status |
| Income Type | FinServ__ExpenseType__c | Picklist | PartyIncome | Income Type |
| Name | FinServ__ExpenseType__c | Number | PartyIncome | Name |
| Party | FinServ__ExpenseType__c | Lookup | PartyIncome | Party Id |
| Party Income Id | FinServ__ExpenseType__c | Id | PartyIncome | Id |
| Start Date Time | FinServ__ExpenseType__c | Date/Time | PartyIncome | Start Date |
