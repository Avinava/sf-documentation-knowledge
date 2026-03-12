---
title: "blng__RefundLinePayment__c"
domain: blng-dev
topic: blngrefundlinepaymentc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.615Z
estimatedTokens: 1481
keywords: [blng__RefundLinePayment__c, portion, refund, that’s, applied, unapplied, payment, line, represent, full, amount, blng, _RefundLinePayment, Calls]
---

# blng__RefundLinePayment__c

> Represents a portion of a refund that’s applied to or unapplied from a
         payment. One refund line can represent the full amount of a refund.

# blng\_\_RefundLinePayment\_\_c

Represents a portion of a refund that’s applied to or unapplied from a payment. One refund line can represent the full amount of a refund.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the refund line payment when multiple currencies are enabled. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the account. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the refund line payment. |
| blng__Amount__c | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The total amount applied to or unapplied from a payment by the refund line. |
| blng__BaseCurrencyAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the refund line payment in the base currency of the organization. This value is used to standardize the amount across different currencies. |
| blng__BaseCurrencyFXDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the foreign exchange rate is applied to convert the amount into the base currency. |
| blng__BaseCurrencyFXRate__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe foreign exchange rate used to convert an amount from a foreign currency to the base currency. |
| blng__BaseCurrency__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary currency in which the financial transactions are recorded and reported. |
| blng__BillingFinanceBook__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA set of financial records for reporting and accounting purposes.This field is a relationship field.Relationship Nameblng__BillingFinanceBook__rRefers Toblng__FinanceBook__c |
| blng__BillingFinancePeriod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA specific time frame for financial reporting and accounting purposes.This field is a relationship field.Relationship Nameblng__BillingFinancePeriod__rRefers Toblng__FinancePeriod__c |
| blng__GLRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe accounting treatment for financial transactions, including which general ledger accounts to debit and credit.This field is a relationship field.Relationship Nameblng__GLRule__rRefers Toblng__GLRule__c |
| blng__GLTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe general ledger treatment defines how a financial transaction is recorded in the general ledger, specifying the accounts and the nature of the entries.This field is a relationship field.Relationship Nameblng__GLTreatment__rRefers Toblng__GLTreatment__c |
| blng__ImpactAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSpecifies how the payment refund line impacts a customer’s accounts receivable.This field is a calculated field. |
| blng__LegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity used to associate the revenue line payment with other transactional records in Salesforce Billing.This field is a relationship field.Relationship Nameblng__LegalEntity__rRefers Toblng__LegalEntity__c |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the refund line payment. |
| blng__PaymentMode__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe method of payment used for a refund line payment.Valid values are:ElectronicExternal |
| blng__Payment__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The payment record that the refund line targets. Refund applications and unapplications are made against the payment record.This field is a relationship field.Relationship Nameblng__Payment__rRelationship TypeMaster-detailRefers Toblng__Payment__c (the detail object) |
| blng__RefundLineDate__c | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The date associated with a refund line payment. |
| blng__Refund__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The parent refund of the refund line payment. This field is a relationship field.Relationship Nameblng__Refund__rRelationship TypeMaster-detailRefers Toblng__Refund__c (the master object) |
| blng__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe state of the refund line payment. Valid values are:CancelledDraftPostedThe default value is Draft. |
| blng__Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of refund line.Valid values are:AllocationUnallocation |
| blng__Unallocated__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The amount of the refund that remains unallocated. This field indicates how much of the refund is still available to be applied to other payments. The default value is false. |
