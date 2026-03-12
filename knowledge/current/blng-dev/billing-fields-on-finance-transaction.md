---
title: "Billing
      Fields on Finance Transaction"
domain: blng-dev
topic: billing-fields-on-finance-transaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.965Z
estimatedTokens: 513
keywords: [Billing, Finance, Transaction, Standard, custom, extend, represent, transactions]
---

# Billing
      Fields on Finance Transaction

> Standard and custom fields extend the standard Finance Transaction
         object for use in Billing to represent information about finance
      transactions.

# Billing Fields on Finance Transaction

Standard and custom fields extend the standard Finance Transaction object for use in Billing to represent information about finance transactions.

## Fields

| Field | Details |
| --- | --- |
| blng__CreditGLAccount__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Credit General Ledger account related to the finance transaction.This field is a relationship field.Relationship Nameblng__CreditGLAccount__rRelationship TypeLookupRefers Toblng__GLAccount__c |
| blng__DebitGLAccount__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Debit General Ledger account related to the finance transaction.This field is a relationship field.Relationship Nameblng__DebitGLAccount__rRelationship TypeLookupRefers Toblng__GLAccount__c |
| blng__FinanceBook__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe finance book related to the finance transaction.This field is a relationship field.Relationship Nameblng__FinanceBook__rRelationship TypeLookupRefers Toblng__FinanceBook__c |
| blng__FinancePeriod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe finance period related to the finance transaction.This field is a relationship field.Relationship Nameblng__FinancePeriod__rRelationship TypeLookupRefers Toblng__FinancePeriod__c |
| blng__GLRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe General Ledger (GL) rule used to determine the GL accounts for the finance transaction.This field is a relationship field.Relationship Nameblng__GLRule__rRelationship TypeLookupRefers Toblng__GLRule__c |
| blng__GLTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe General Ledger (GL) treatment used to determine the GL accounts for the finance transaction.This field is a relationship field.Relationship Nameblng__GLTreatment__rRelationship TypeLookupRefers Toblng__GLTreatment__c |
