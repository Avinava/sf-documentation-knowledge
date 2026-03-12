---
title: "blng__PaymentAllocationInvoice__c"
domain: blng-dev
topic: blngpaymentallocationinvoicec
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:08.459Z
estimatedTokens: 931
keywords: [blng__PaymentAllocationInvoice__c, allocation, payments, specific, invoices, track, manage, how, applied, outstanding, ensuring, accurate, financial, records, reporting]
---

# blng__PaymentAllocationInvoice__c

> Represents the allocation of payments to specific invoices. This object is used to
      track and manage how payments are applied to outstanding invoices, ensuring accurate financial
      records and reporting.

# blng\_\_PaymentAllocationInvoice\_\_c

Represents the allocation of payments to specific invoices. This object is used to track and manage how payments are applied to outstanding invoices, ensuring accurate financial records and reporting.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the payment allocation invoice when multiple currencies are enabled. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the payment allocation invoice. A name is a unique value that helps in identifying the specific allocation record. |
| blng__Amount__c | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The total amount allocated to the invoice. The amount represents the value that has been applied to the invoice from the payment. |
| blng__BillingFinanceBook__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe financial book associated with the billing. This field helps in categorizing and managing financial records according to different finance books.This field is a relationship field.Relationship Nameblng__BillingFinanceBook__rRefers Toblng__FinanceBook__c |
| blng__BillingFinancePeriod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe financial period during which the billing and payment allocation occur. This helps in tracking and reporting financial activities within a specific time frame.This field is a relationship field.Relationship Nameblng__BillingFinancePeriod__rRefers Toblng__FinancePeriod__c |
| blng__ImpactAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount that impacts the invoice balance. The impact amount could be the portion of the payment that directly affects the outstanding balance of the invoice.This field is a calculated field. |
| blng__Invoice__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The reference to the specific invoice that’s being allocated a payment. This links the payment allocation to the corresponding invoice record.This field is a relationship field.Relationship Nameblng__Invoice__rRelationship TypeMaster-detailRefers Toblng__Invoice__c (the detail object) |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the payment allocation invoice. |
| blng__Payment__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The payment that’s being allocated to the invoice.This field is a relationship field.Relationship Nameblng__Payment__rRelationship TypeMaster-detailRefers Toblng__Payment__c (the master object) |
| blng__Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of payment allocation.Valid values are:AllocationUnallocation |
| blng__Unallocated__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The amount of the payment that remains unallocated. The default value is false. |
