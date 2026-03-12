---
title: "FinServ_BillingStatement__c"
domain: financial-services-cloud-object-reference
topic: finservbillingstatementc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.598Z
estimatedTokens: 847
keywords: [FinServ_BillingStatement__c, billing, statement, individual’s, financial, account, FinServ, _BillingStatement, Calls]
---

# FinServ_BillingStatement__c

> Represents a billing statement for an individual’s financial
         account.

# FinServ\_BillingStatement\_\_c

Represents a billing statement for an individual’s financial account.

## Supported Calls

create(), delete(), describeLayout(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BalanceTransfers__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBalance transfer details. |
| BillingPeriodEnd__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBilling period end date. |
| BillingPeriodStart__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBilling period start date. |
| CashAdvances__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCash advance amount for the billing period. |
| Deposits__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDeposit made to the account during the billing period. |
| EndingBalance__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBalance due on the account during the billing period. |
| FeesCharged__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFee charged during the billing period. |
| FinancialAccount__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionFinancial account associated with this billing statement. |
| InsurancePolicy__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy associated with the billing statement |
| InterestThisPeriod__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInterest charged on the account during the billing period. |
| InterestYTD__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInterest charged year to date. |
| LastPaymentDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate of the last payment made on the account. |
| MinimumPaymentDue__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMinimum payment required by the due date. |
| OtherCredits__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionOther credits made during the billing period. |
| PastDueAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount past due as of the statement date. |
| PaymentDueDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate a payment is due. |
| Payments__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPayment received since the last statement. |
| PreviousBalance__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAccount balance at the end of the previous billing period. |
| Purchases__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal purchases made during the current billing period. |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the individual in an external data source. |
| StatementDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate the current statement was generated. |
| Withdrawals__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCash withdrawal made during the billing period. |
