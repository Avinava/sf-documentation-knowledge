---
title: "Loan Account DMO"
domain: data-cloud
topic: loan-account-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.256Z
estimatedTokens: 533
keywords: [Loan, Account, DMO, Represents, subtype, financial, account., Provided, Financial, Services, Cloud, Data, Kit., API, version, later., Name, Category, Primary, Subject]
---

# Loan Account DMO

> Represents a subtype of financial account. Provided in the Financial Services Cloud
      Data Kit. This DMO is available in API version 58 and later.

# Loan Account DMO

Represents a subtype of financial account. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_LoanAccount\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Loan Account ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Loan Account | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |
| Financial Account | Loan Account ID | Many To One (N:1) | Loan Account | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Currency | ssot__Currency__c | The associated Currency | Text | Financial Services Cloud |
| Description | ssot__Description__c | The description of the loan account. | Text | Financial Services Cloud |
| Expected Close Date | ssot__ExpectedCloseDate__c | The date when loan is expected to be closed. | Date Time | Financial Services Cloud |
| Financial Account ID | ssot__FinancialAccountID__c | The associated financial account. | Text | Financial Services Cloud |
| Loan Account ID | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Loan Amount | ssot__LoanAmount__c | The loan amount. | Number | Financial Services Cloud |
| Loan End Date | ssot__LoanEndDate__c | The end date of the loan. | Date Time | Financial Services Cloud |
| Loan Term Months Number | ssot__LoanTermMonthsNumber__c | The loan term in months. | Number | Financial Services Cloud |
| Loan Type | ssot__LoanType__c | The type of loan. | Text | Financial Services Cloud |
| Name | ssot__Name__c | The name of the loan account. | Text | Financial Services Cloud |
| Property Type | ssot__PropertyType__c | The property type. | Text | Financial Services Cloud |
| Repayment Period Months Number | ssot__RepaymentPeriodMonthsNumber__c | The repayment period in months. | Number | Financial Services Cloud |
