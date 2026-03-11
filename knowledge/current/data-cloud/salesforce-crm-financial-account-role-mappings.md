---
title: "Salesforce CRM: Financial Account Role Mappings"
domain: data-cloud
topic: salesforce-crm-financial-account-role-mappings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.124Z
keywords: [Salesforce, CRM, Financial, Account, Role, Mappings, Usage, Data, Bundle, DLO, DMO, Mapping]
---

# Salesforce CRM: Financial Account Role Mappings

# Salesforce CRM: Financial Account Role Mappings

These data mappings are for the FinancialAccountRole DLO found in Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

Bundle:

-   Financial Services Cloud

## DLO to DMO Mapping

These data mappings relate to the FinancialAccountRole object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO API Name | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- | --- |
| Related Contact | FinServ__RelatedContact__c | reference | Financial Account Party | Contact |
| Related Account | FinServ__RelatedAccount__c | reference | Financial Account Party | Account |
| Financia Account | FinServ__FinancialAccount__c | reference | Financial Account Party | Financial Account |
| Role | FinServ__Role__c | picklist | Financial Account Party | Financial Account Role |
| Id |  | Id | Financial Account Party | Financial Account Party Id |
| Name |  | text | Financial Account Party | Name |
| Active | FinServ__Active__c | checkbox/boolean | Financial Account Party | Active |