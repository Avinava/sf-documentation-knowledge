---
title: "blng__PaymentAllocationInvoiceLine__c"
domain: blng-dev
topic: blngpaymentallocationinvoicelinec
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:08.467Z
estimatedTokens: 1025
keywords: [blng__PaymentAllocationInvoiceLine__c, allocation, payment, specific, invoice, line, helps, tracking, how, payments, distributed, across, different, lines, blng]
---

# blng__PaymentAllocationInvoiceLine__c

> Represents the allocation of a payment to a specific invoice line. This object helps
      in tracking how payments are distributed across different invoice lines.

# blng\_\_PaymentAllocationInvoiceLine\_\_c

Represents the allocation of a payment to a specific invoice line. This object helps in tracking how payments are distributed across different invoice lines.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the payment allocation invoice line when multiple currencies are enabled. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the payment allocation invoice line. A name is a unique value that helps in identifying the specific allocation record. |
| blng__Amount__c | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The amount of money allocated to the invoice line. This field specifies the portion of the payment applied to a specific invoice line. |
| blng__BillingFinanceBook__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe finance book associated with the billing. This field helps in categorizing and managing financial records according to different finance books.This field is a relationship field.Relationship Nameblng__BillingFinanceBook__rRefers Toblng__FinanceBook__c |
| blng__BillingFinancePeriod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe financial period during which the billing occurs. This field is used for financial reporting and tracking purposes.This field is a relationship field.Relationship Nameblng__BillingFinancePeriod__rRefers Toblng__FinancePeriod__c |
| blng__ImpactAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount that impacts the financial records due to the payment allocation. This field is used to understand the financial effect of the payment allocation.This field is a calculated field. |
| blng__InvoiceLine__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The specific invoice line to which the payment is allocated. This field links the payment allocation to the corresponding invoice line item.This field is a relationship field.Relationship Nameblng__InvoiceLine__rRelationship TypeMaster-detailRefers Toblng__InvoiceLine__c (the master object) |
| blng__LegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity associated with the payment allocation. This field helps in identifying the legal entity responsible for the transaction.This field is a relationship field.Relationship Nameblng__LegalEntity__rRefers Toblng__LegalEntity__c |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional notes or comments related to the payment allocation. |
| blng__Payment__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The payment record associated with the allocation.This field is a relationship field.Relationship Nameblng__Payment__rRelationship TypeMaster-detailRefers Toblng__Payment__c (the detail object) |
| blng__Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of payment allocation.Valid values are:AllocationUnallocation |
| blng__Unallocated__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The amount of the payment that remains unallocated. This field indicates how much of the payment is still available to be applied to other invoice lines. The default value is false. |
