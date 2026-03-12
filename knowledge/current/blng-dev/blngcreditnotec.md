---
title: "blng__CreditNote__c"
domain: blng-dev
topic: blngcreditnotec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.073Z
estimatedTokens: 2206
keywords: [blng__CreditNote__c, amount, that's, reduce, buyer, owes, seller, under, terms, earlier, invoice, credit, always, decreases, balance]
---

# blng__CreditNote__c

> Represents information about the amount that's used to reduce the amount that
         a buyer owes a seller under the terms of an earlier invoice. A credit note always decreases
         the balance of an invoice. Users can apply positive credit notes to positive invoices, for
         example, a $10 credit note reduces the balance of a $100 invoice line to
      $90.

# blng\_\_CreditNote\_\_c

Represents information about the amount that's used to reduce the amount that a buyer owes a seller under the terms of an earlier invoice. A credit note always decreases the balance of an invoice. Users can apply positive credit notes to positive invoices, for example, a $10 credit note reduces the balance of a $100 invoice line to $90.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the credit note.The default value is USD. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp of when the current user had last accessed the credit note, or a record or list view related to the credit note. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed the credit note, or a record or list view related to the credit note. If this value is null, it's possible the user accessed this record or list view (LastReferencedDate) but didn't view it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the credit note. |
| blng__Account__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe customer account associated with the credit note.This field is a relationship field.Relationship Nameblng__Account__rRelationship TypeMaster-detailRefers ToAccount |
| blng__Allocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe credit note's balance that's allocated to invoice lines.This field is a calculated field. |
| blng__Balance__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the credit note that's available for allocation or refund. The balance amount is calculated using the formulablng__TotalAmount__c -  blng__Allocations__c +  blng__Unallocations__c - blng__Debits__c - blng__Refunds__c.This field is a calculated field. |
| blng__BaseCurrencyAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe credit note's total amount in the base currency. |
| blng__BaseCurrencyFXDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date used to determine the foreign exchange rate when calculating the base currency amount. |
| blng__BaseCurrencyFXRate__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe foreign exchange rate that's used to convert the credit note's total amount to the base currency amount. |
| blng__BaseCurrency__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe base currency that's used for converting currency during data export. |
| blng__BillToAccount__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that receives information about the credit note.This field is a relationship field.Relationship Nameblng__BillToAccount__rRelationship TypeLookupRefers ToAccount |
| blng__BillToContact__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who receives information about the credit note. This value is inherited from the account’s PersonContactId field.This field is a relationship field.Relationship Nameblng__BillToContact__rRelationship TypeLookupRefers ToContact |
| blng__BillingFinanceBook__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe finance book associated with the credit note.This field is a relationship field.Relationship Nameblng__BillingFinanceBook__rRelationship TypeLookupRefers Toblng__FinanceBook__c |
| blng__BillingFinancePeriod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe finance period associated with the credit note.This field is a relationship field.Relationship Nameblng__BillingFinancePeriod__rRelationship TypeLookupRefers Toblng__FinancePeriod__c |
| blng__CreditNoteDate__c | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the credit note was posted. |
| blng__CreditNoteSourceAction__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe action that created the credit note.Valid values are:Cancel & RebillCreditInvoice Line CreditManualNegative Lines ConversionThe default value is Manual. |
| blng__Debits__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of allocations of the debit notes associated with the credit note.This field is a calculated field. |
| blng__EffectiveTaxDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the tax is applied to the credit note. |
| blng__EstimateTaxProcessTime__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated time for processing tax for the credit note. |
| blng__ImpactAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe credit note’s financial impact against the customer’s accounts receivable. When the credit note is applied, the impact amount is the negative equivalent of the credit note's total amount.This field is a calculated field. |
| blng__NetAllocations__c | TypedoublePropertiesFilter, Nillable, SortDescriptionThe difference between the allocated and unallocated amounts of the credit note.This field is a calculated field. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details about the credit note. |
| blng__Refunds__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of refund amount of all the related credit note lines.This field is a calculated field. |
| blng__RelatedInvoice__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice that this credit note was applied to.This field is a relationship field.Relationship Nameblng__RelatedInvoice__rRelationship TypeLookupRefers Toblng__Invoice__c |
| blng__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the credit note.Valid values are:CancelledDraftPostedThe default value is Draft. |
| blng__Subtotal__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of subtotals of all the related credit note lines.This field is a calculated field. |
| blng__TaxAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of tax for the credit note.This field is a calculated field. |
| blng__TaxCity__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the address that Salesforce Billing uses to calculate tax for the credit note. |
| blng__TaxCountry__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country of the address that Salesforce Billing uses to calculate tax for the credit note. |
| blng__TaxErrorMessage__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe error message when the external tax engine fails to calculate tax for the credit note. |
| blng__TaxState__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the address that Salesforce Billing uses to calculate tax for the credit note. |
| blng__TaxStreet2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the address that Salesforce Billing uses to calculate tax for the credit note. |
| blng__TaxStreet__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the address that Salesforce Billing uses to calculate tax for the credit note. |
| blng__TaxZipCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the address that Salesforce Billing uses to calculate tax for the credit note. |
| blng__TotalAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of amounts of the credit note's lines and adjustment lines.This field is a calculated field. |
| blng__Unallocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount that's been unallocated from the credit note.This field is a calculated field. |
