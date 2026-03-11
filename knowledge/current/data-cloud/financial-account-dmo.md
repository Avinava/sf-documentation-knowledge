---
title: "Financial Account DMO"
domain: data-cloud
topic: financial-account-dmo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:43.396Z
keywords: [Financial, Account, DMO, API, Name, Category, Primary, Subject, Area, Key, Label, Relationships, Fields]
---

# Financial Account DMO

# Financial Account DMO

Represents a financial account held at a financial institution such as a bank. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_FiancialAccount\_\_dlm

## Category

Profile

## Primary Subject Area

Financial Account

## Primary Key Label

Financial Account ID (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Financial Account | Address | Many To One (N:1) | Address | ID | Financial Services Cloud |
| Financial Account | Card Account ID | Many To One (N:1) | Card Account | ID | Financial Services Cloud |
| Financial Account | Deposit Account ID | Many To One (N:1) | Deposit Account | ID | Financial Services Cloud |
| Financial Account | Insurance Policy ID | Many To One (N:1) | Insurance Policy | ID | Financial Services Cloud |
| Financial Account | Investment Account ID | Many To One (N:1) | Investment Account | ID | Financial Services Cloud |
| Financial Account | Loan Account ID | Many To One (N:1) | Loan Account | ID | Financial Services Cloud |
| Card Account | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |
| Communication Subscription Consent | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |
| Deposit Account | Financial Account ID | Many To One (N:1) | Financial Account | ID |  |
| Financial Account Balance | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |
| Financial Account Fee | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |
| Financial Account Interest Rate | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |
| Financial Account Limit | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |
| Financial Account Party | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |
| Financial Account Transaction | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |
| Financial Holding | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |
| Insurance Policy | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |
| Investment Account | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |
| Loan Account | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |
| Payment Method | Financial Account ID | Many To One (N:1) | Financial Account | ID | Financial Services Cloud |
| Record Alert | Financial Account ID | Many To One (N:1) | Financial Account |  | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Application Date | ssot__ApplicationDate__c | The financial account application submission date. | Date Time | Financial Services Cloud |
| Close Date | ssot__CloseDate__c | The financial account close date. | Date Time | Financial Services Cloud |
| Credit Card Account ID | ssot__CreditCardAccountId__c | The associated credit card account. | Text | Financial Services Cloud |
| Current Account ID | ssot__CurrentAccountId__c | The associated current amount. | Text | Financial Services Cloud |
| Description | ssot__Description__c | The financial account description. | Text | Financial Services Cloud |
| Financial Account ID | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Insurance Policy Id | ssot__InsurancePolicyId__c | The associated insurance policy. | Text | Financial Services Cloud |
| Investment Account Id | ssot__InvestmentAccountId__c | The associated investment account . | Text | Financial Services Cloud |
| Lien Holder Name | ssot__LienHolderName__c | Name of lien holder on the financial account. | Text | Financial Services Cloud |
| Loan Account Id | ssot__LoanAccountId__c | The associated loan account. | Text | Financial Services Cloud |
| Name | ssot__Name__c | The financial account name. | Text | Financial Services Cloud |
| Open Date | ssot__OpenDate__c | The financial account open date. | Date Time | Financial Services Cloud |
| Routing Number Text | ssot__RoutingNumberText__c | The bank routing number. | Text | Financial Services Cloud |
| Savings Account Id | ssot__SavingsAccountId__c | The associated savings account. | Text | Financial Services Cloud |
| Trust Owner Name | ssot__TrustOwnerName__c | Name of the trust where the account is managed by a trust. | Text | Financial Services Cloud |
| Is Held Away | ssot__isHeldAway__c | Indicates whether this financial account is held by another organization. | Text | Financial Services Cloud |
| Is Managed | ssot__isManaged__c | Indicates whether the financial account is managed. | Text | Financial Services Cloud |