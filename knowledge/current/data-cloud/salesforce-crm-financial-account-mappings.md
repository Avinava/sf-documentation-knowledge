---
title: "Salesforce CRM: Financial Account Mappings"
domain: data-cloud
topic: salesforce-crm-financial-account-mappings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.120Z
keywords: [Salesforce, CRM, Financial, Account, Mappings, Usage, Data, Bundle, DLO, DMO, Mapping]
---

# Salesforce CRM: Financial Account Mappings

# Salesforce CRM: Financial Account Mappings

These data mappings are for the FinancialAccount DLO found in Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

Bundle:

-   Financial Services Cloud

## DLO to DMO Mapping

These data mappings relate to the FinancialAccount object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO API Name | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- | --- |
| Application Date | FinServ__ApplicationDate__c | date | Financial Account | Application Date |
| AYP | FinServ__AYP__c | percent | Investment Account | Annual Yield Percentage |
| Close Date | FinServ__CloseDate__c | date | Financial Account | Close Date |
| Description | FinServ__Description__c | text | Financial Account | Description |
| Expected Close Date | FinServ__ExpectedCloseDate__c | date | Loan Account | Expected Close Date |
| Held Away | FinServ__HeldAway__c | checkbox/boolean | Financial Account | Held Away |
| id |  | id | Card Account | Financial Account |
| Card Account Id |
| Deposit Account | Financial Account |
| Deposit Account Id |
| Financial Account Fee | Financial Account |
| Financial Account Fee Id |
| Financial Account Interest Rate | Financial Account |
| Financial Account Interest Rate Id |
| Financial Account | Card Account |
| Deposit Account |
| Financial Account Id |
| Insurance Policy |
| Investment Account |
| Loan Account |
| Insurance Policy | Financial Account |
| Insurance Policy Id |
| Investment Account | Financial Account |
| Investment Account Id |
| Loan Account | Financial Account |
| Loan Account Id |
| Insurance Policy | FinServ__InsurancePolicy__c | reference | Insurance Policy | Insurance Policy Number |
| Insured Amount | FinServ__InsuredAmount__c | currency | Insurance Policy | Insured Amount |
| Interest Rate | FinServ__InterestRate__c | percent | Financial Account Interest Rate | Interest Rate Percent |
| Investment Objectives | FinServ__InvestmentObjectives__c | multi-select picklist | Investment Account | Investment Objective |
| Lien Holder | FinServ__LienHolder__c | text | Financial Account | Lien Holder Name |
| Loan Amount | FinServ__LoanAmount__c | currency | Loan Account | Loan Amount |
| Loan End Date | FinServ__LoanEndDate__c | date | Loan Account | Loan End Date |
| Loan Term Months | FinServ__LoanTermMonths__c | number | Loan Account | Loan Term Months |
| Managed | FinServ__Managed__c | checkbox/boolean | Financial Account | Managed |
| Model Portfolio | FinServ__ModelPortfolio__c | picklist | Investment Account | Model Portfolio Type |
| Name | FinServ__Name | text | Financial Account | Name |
| Open Date | FinServ__OpenDate__c | date | Financial Account | Open Date |
| Overdraft Allowed | FinServ__OverdraftAllowed__c | boolean/checkbox | Deposit Account | Over Draft Allowed |
| Overdraft Protection | FinServ__OverdraftProtection__c | boolean/checkbox | Deposit Account | Overdraft Protection |
| Policy Term | FinServ__PolicyTerm__c | picklist | Insurance Policy | Financial Policy Term |
| Premium | FinServ__Premium__c | currency | Insurance Policy | Premium Amount |
| Record Type Name | FinServ__RecordTypeName__c | reference | Financial Account | Financial Account Type |
| Renewal Date | FinServ__RenewalDate__c | date | Insurance Policy | Renewal Date |
| Repayment Period Months | FinServ__RepaymentPeriodMonths__c | number | Loan Account | Repayment Period Months |
| Routing Number | FinServ__RoutingNumber__c | text | Financial Account | Routing Number |
| Status | FinServ__Status__c | picklist | Financial Account | Financial Account Status |
| Time Horizon | FinServ__TimeHorizon__c | picklist | Investment Account | Investment Time Horizon |