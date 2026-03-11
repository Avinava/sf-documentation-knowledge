---
title: "Salesforce CRM: Party Expense Mappings"
domain: data-cloud
topic: salesforce-crm-party-expense-mappings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.127Z
keywords: [Salesforce, CRM, Party, Expense, Mappings, Usage, Data, Bundle, DLO, DMO, Mapping]
---

# Salesforce CRM: Party Expense Mappings

# Salesforce CRM: Party Expense Mappings

These data mappings are for the PartyExpense DLO found in the Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

Bundle:

-   Financial Services Cloud

## DLO to DMO Mapping

These data mappings relate to the PartyExpense object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO API Name | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- | --- |
| End Date Time | FinServ__EndDateTime__c | Date/Time | Party Expense | End Date |
| Name | FinServ__Name__c | Number | Party Expense | Name |
| Party Expense Id | FinServ__PartyExpenseId__c | Id | Party Expense | Id |
| Start Date Time | FinServ__StartDateTime__c | Date/Time | Party Expense | Start Date |
| Recurrence Interval | FinServ__RecurrenceInterval__c | Picklist | Party Expense | Recurrence Interval |
| Expense Status | FinServ__ExpenseStatus__c | Picklist | Party Expense | Status |
| Total Amount | FinServ__TotalAmount__c | Currency | Party Expense | Total Amount |
| Expense Type | FinServ__ExpenseType__c | Picklist | Party Expense | Type |