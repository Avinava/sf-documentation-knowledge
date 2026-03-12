---
title: "FinServ_ChargesAndFees__c"
domain: financial-services-cloud-object-reference
topic: finservchargesandfeesc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.685Z
estimatedTokens: 857
keywords: [FinServ_ChargesAndFees__c, agreed-to, fees, charges, servicing, individual’s, financial, account, FinServ, _ChargesAndFees, Calls]
---

# FinServ_ChargesAndFees__c

> Represents agreed-to fees and charges for servicing an individual’s
         financial account.

# FinServ\_ChargesAndFees\_\_c

Represents agreed-to fees and charges for servicing an individual’s financial account.

## Supported Calls

create(), delete(), describeLayout(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AnnualAccountCharge__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAnnual fee for maintaining an account. |
| AnnualMembershipFee__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAnnual fee for credit card membership. |
| APR__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAnnual percentage rate. |
| APRType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAnnual percentage rate type. Valid values:FixedOtherVariable |
| ATMFee__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionATM fee. |
| BalanceTransferAPR__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAPR for balance transfers. |
| CashAdvanceFee__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFee for withdrawing cash from a credit card account. |
| CashAPR__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAnnual percentage rate applied to cash withdrawals. |
| CashAPRType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAPR applied to cash borrowed from a credit card account. Valid values:FixedOtherVariable |
| ForeignTransactionFee__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFee for making a credit card purchase in a foreign currency. |
| InsufficientFundsFee__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFee for attempting to make a purchase or payment from an account with insufficient funds. |
| InterestRate__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInterest rate on a loan account (APR%). |
| LatePaymentFee__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFee for not paying the minimum payment by the due date. |
| MaximumTransactionFee__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFee for exceeding the maximum monthly transaction limit. |
| MonthlyServiceFee__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMonthly account maintenance charge. |
| OverdraftFees__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFee for a withdrawal that exceeds the available balance. |
| ReplacementCardFee__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFee for debit or credit card replacement. |
| ReturnedCheckFee__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFee for writing or receiving a check returned due to insufficient funds. |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the individual in an external data source. |
| StatementFee__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFee for mailing an account statement. |
| StopPaymentFee__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFee for requesting a stop payment on a check or payment that hasn’t been processed yet. |
