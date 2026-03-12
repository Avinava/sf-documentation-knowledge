---
title: "blng__PaymentAllocationDebitNoteLine__c"
domain: blng-dev
topic: blngpaymentallocationdebitnotelinec
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:08.450Z
estimatedTokens: 1273
keywords: [blng__PaymentAllocationDebitNoteLine__c, individual, line, item, debit, allocated, payment, track, manage, allocations, against, notes, maintaining, accurate, financial]
---

# blng__PaymentAllocationDebitNoteLine__c

> Represents an individual line item on a debit note allocated to a payment,
         used to track and manage payment allocations against debit notes for maintaining accurate
         financial records.

# blng\_\_PaymentAllocationDebitNoteLine\_\_c

Represents an individual line item on a debit note allocated to a payment, used to track and manage payment allocations against debit notes for maintaining accurate financial records.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the payment allocation debit note line when multiple currencies are enabled. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the payment allocation debit note line. |
| blng__Amount__c | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The value allocated to a specific debit note line from a payment. This value represents the portion of the payment that’s applied to adjust the balance indicated by the debit note line. |
| blng__BillingFinanceBook__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe financial ledger that tracks all transactions related to billing, including the allocation of payments to debit note lines. This value ensures that all financial activities are accurately recorded and reported. This field is a relationship field.Relationship Nameblng__BillingFinanceBook__rRefers Toblng__FinanceBook__c |
| blng__BillingFinancePeriod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe specific time frame during which the allocation of payments to debit note lines is recorded. This period helps in organizing financial data for reporting and analysis, such as monthly or quarterly financial statements. This field is a relationship field.Relationship Nameblng__BillingFinancePeriod__rRefers Toblng__FinancePeriod__c |
| blng__DebitNoteAllocationId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA unique identifier for the allocation of a payment to a specific debit note line. This ID helps in tracking and managing the relationship between the payment and the debit note line it’s applied to. |
| blng__DebitNoteLine__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. An individual entry on a debit note that specifies the amount and details of an adjustment. In the context of payment allocation, this entry represents the specific line item to which a portion of the payment is applied. This field is a relationship field.Relationship Nameblng__DebitNoteLine__rRelationship TypeMaster-detailRefers Toblng__DebitNoteLine__c (the detail object) |
| blng__ImpactAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe financial effect of allocating a payment to a debit note line. This value indicates how much the allocation reduces the outstanding balance of the debit note line. This field is a calculated field. |
| blng__InvoiceLine__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn invoice line is an individual entry on an invoice detailing specific charges. This field ensures the payments are correctly applied to related debit note lines. This field is a relationship field.Relationship Nameblng__InvoiceLine__rRefers Toblng__InvoiceLine__c |
| blng__LegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe entity responsible for issuing the debit note and receiving the payment.This field is a relationship field.Relationship Nameblng__LegalEntity__rRefers Toblng__LegalEntity__c |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the allocation of a payment to a debit note line. |
| blng__Payment__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The funds allocated to adjust the balance specified by the debit note.This field is a relationship field.Relationship Nameblng__Payment__rRelationship TypeMaster-detailRefers Toblng__Payment__c (the master object) |
| blng__Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe classification of the financial transaction. Valid values are:AllocationUnallocation |
| blng__Unallocated__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Funds or amounts from a payment that are yet to be assigned to a specific debit note line. These amounts are pending allocation to ensure accurate financial tracking and reconciliation. The default value is false. |
