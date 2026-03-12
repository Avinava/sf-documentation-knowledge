---
title: "blng__CreditNoteAllocation__c"
domain: blng-dev
topic: blngcreditnoteallocationc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.087Z
estimatedTokens: 1497
keywords: [blng__CreditNoteAllocation__c, allocation, credit, line, that's, allocated, invoice, blng, _CreditNoteAllocation, Calls]
---

# blng__CreditNoteAllocation__c

> Represents allocation information about a credit note line that's been
         allocated to an invoice line.

# blng\_\_CreditNoteAllocation\_\_c

Represents allocation information about a credit note line that's been allocated to an invoice line.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the allocated credit note.The default value is USD. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the credit note allocation. |
| blng__Amount__c | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe amount that's allocated from the credit note line. |
| blng__BillingFinanceBook__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe finance book associated with the allocated credit note line.This field is a relationship field.Relationship Nameblng__BillingFinanceBook__rRelationship TypeLookupRefers Toblng__FinanceBook__c |
| blng__BillingFinancePeriod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe finance period associated with the allocated credit note line.This field is a relationship field.Relationship Nameblng__BillingFinancePeriod__rRelationship TypeLookupRefers Toblng__FinancePeriod__c |
| blng__BillingGLRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe General Ledger (GL) rule that's used to determine the GL accounts for the invoice line to which the credit note line is allocated.This field is a relationship field.Relationship Nameblng__BillingGLRule__rRelationship TypeLookupRefers Toblng__GLRule__c |
| blng__BillingGLTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing treatment associated with the billing General Ledger (GL) rule of the allocated credit note line.This field is a relationship field.Relationship Nameblng__BillingGLTreatment__rRelationship TypeLookupRefers Toblng__GLTreatment__c |
| blng__BillingRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing rule associated with the allocated credit note line.This field is a relationship field.Relationship Nameblng__BillingRule__rRelationship TypeLookupRefers Toblng__BillingRule__c |
| blng__BillingTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing treatment associated with the allocated credit note line.This field is a relationship field.Relationship Nameblng__BillingTreatment__rRelationship TypeLookupRefers Toblng__BillingTreatment__c |
| blng__CreditNoteLine__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe credit note line that's allocated.This field is a relationship field.Relationship Nameblng__CreditNoteLine__rRelationship TypeMaster-detailRefers Toblng__CreditNoteLine__c (the detail object) |
| blng__ImpactAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe allocated credit note line’s financial impact against the customer’s accounts receivable. When the credit note line is applied, the impact amount is the negative equivalent of the credit note line's amount.This field is a calculated field. |
| blng__InvoiceLine__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe invoice line to which the credit note line is allocated.This field is a relationship field.Relationship Nameblng__InvoiceLine__rRelationship TypeMaster-detailRefers Toblng__InvoiceLine__c |
| blng__LegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity associated with the allocated credit note line.This field is a relationship field.Relationship Nameblng__LegalEntity__rRelationship TypeLookupRefers Toblng__LegalEntity__c |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details about the credit note line's allocation. |
| blng__TaxGLRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe tax rule for recording tax transactions of the allocated credit note line in an external general ledger.This field is a relationship field.Relationship Nameblng__TaxGLRule__rRelationship TypeLookupRefers Toblng__GLRule__c |
| blng__TaxGLTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe tax treatment for recording tax transactions of the allocated credit note line in an external general ledger.This field is a relationship field.Relationship Nameblng__TaxGLTreatment__rRelationship TypeLookupRefers Toblng__GLTreatment__c |
| blng__TaxRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rule used to tax the allocated credit note line.This field is a relationship field.Relationship Nameblng__TaxRule__rRelationship TypeLookupRefers Toblng__TaxRule__c |
| blng__TaxTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe tax treatment assigned to the allocated credit note line. Tax rules and their treatments define how Salesforce Billing processes tax for your transactions.This field is a relationship field.Relationship Nameblng__TaxTreatment__rRelationship TypeLookupRefers Toblng__TaxTreatment__c |
| blng__Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the credit note allocation.Possible values are:AllocationUnallocation |
| blng__Unallocated__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field indicates whether the credit note allocation of type Allocation has a corresponding credit note allocation of type Unallocation.The default value is false. |
