---
title: "FinServ_FinancialAccountTransaction__c"
domain: financial-services-cloud-object-reference
topic: finservfinancialaccounttransactionc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.162Z
estimatedTokens: 953
keywords: [FinServ_FinancialAccountTransaction__c, financial, account, transaction, FinServ, _FinancialAccountTransaction, Calls]
---

# FinServ_FinancialAccountTransaction__c

> Represents information about a single financial account
         transaction.

# FinServ\_FinancialAccountTransaction\_\_c

Represents information about a single financial account transaction.

## Supported Calls

create(), delete(), describeLayout(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AllocatedEscrowPayment__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the payment that's allocated towards escrow. |
| AllocatedFeeAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the payment that's allocated towards fees. |
| AllocatedInterestAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the payment that's allocated towards the interest. |
| AllocatedPrincipalAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the payment that's allocated towards the principal. |
| Amount__c | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionAmount of the transaction. |
| BillingStatement__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBilling statement record associated with the account. |
| CardAccountID__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCard number linked to the transaction. |
| Claim__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe claim associated with the financial account transaction. |
| Description__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the transaction. |
| DisputeReason__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionReason for the dispute.Possible values are:Duplicate TransactionsOthersSuspected FraudTransaction not recognized |
| EscrowBalance__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe balance on the escrow amount of the financial account. |
| FinancialAccount__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFinancial account to which the transaction pertains. |
| InsurancePolicy__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy associated with the financial account transaction. |
| MerchantCategoryCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMerchant category code. |
| PostDate__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate the transaction posted to the account. |
| PrincipalBalance__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe balance on the principal amount of the financial account. |
| RunningBalance__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRunning balance for the transaction. |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionRecord ID from an external data source. |
| SourceTransactionType__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSource transaction type from an external data source. |
| TransactionDate__c | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionDate of the transaction. |
| TransactionId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID that uniquely identifies the transaction in an external data source. |
| TransactionStatus__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionStatus of the transaction.PendingPosted |
| TransactionType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of transaction.CreditDebit |
