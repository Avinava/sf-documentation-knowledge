---
title: "blng__DebitNote__c"
domain: blng-dev
topic: blngdebitnotec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.158Z
estimatedTokens: 2612
keywords: [blng__DebitNote__c, positive, balance, change, allocate, invoice, line, credit, blng, _DebitNote, Calls]
---

# blng__DebitNote__c

> Represents information about the positive balance change that you can
         allocate to an invoice line or a positive credit note line.

# blng\_\_DebitNote\_\_c

Represents information about the positive balance change that you can allocate to an invoice line or a positive credit note line.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the debit note.The default value is USD. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp for when a user last associated a task or event action with the debit note. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp of when the current user had last accessed the debit note, or a record or list view related to the debit note. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed the the debit note, or a record or list view related to the debit note. If this value is null, it's possible the user accessed this record or list view (LastReferencedDate) but didn't view it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the debit note. |
| blng__Account__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe customer account associated with the debit note.This field is a relationship field.Relationship Nameblng__Account__rRelationship TypeMaster-detailRefers ToAccount |
| blng__Allocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount from the debit note line that's allocated.This field is a calculated field. |
| blng__AvailableForPayment__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount from the debit note that's available for payment.This field is a calculated field. |
| blng__Balance__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the debit note that's available for application.This field is a calculated field. |
| blng__BaseCurrencyAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe debit note's total amount in the base currency. |
| blng__BaseCurrencyFXDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date used to determine the foreign exchange rate when calculating the base currency amount. |
| blng__BaseCurrencyFXRate__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe foreign exchange rate that's used to convert the debit note's total amount to the base currency amount. |
| blng__BaseCurrency__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe base currency that's used for converting currency during data export. |
| blng__BillToAccount__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that receives information about the debit note.This field is a relationship field.Relationship Nameblng__BillToAccount__rRelationship TypeLookupRefers ToAccount |
| blng__BillToContact__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who receives information about the debit note. This value is inherited from the account’s Bill to Contact field.This field is a relationship field.Relationship Nameblng__BillToContact__rRelationship TypeLookupRefers ToContact |
| blng__BillingFinanceBook__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe finance book associated with the debit note.This field is a relationship field.Relationship Nameblng__BillingFinanceBook__rRelationship TypeLookupRefers Toblng__FinanceBook__c |
| blng__BillingFinancePeriod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe finance period associated with the debit note.This field is a relationship field.Relationship Nameblng__BillingFinancePeriod__rRelationship TypeLookupRefers Toblng__FinancePeriod__c |
| blng__CreditNoteLineAllocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount allocated from all the related credit note lines.This field is a calculated field. |
| blng__CreditNoteLineUnallocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount that's unallocated from all the related credit note lines.This field is a calculated field. |
| blng__DebitNoteDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the debit note was posted. |
| blng__DebitNoteSourceAction__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the action that created the debit note.Possible values are:ManualThe default value is Manual. |
| blng__EffectiveTaxDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the tax is applied to the debit note. |
| blng__ImpactAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe debit note’s financial impact against the customer’s accounts receivable. When the debit note is applied, the impact amount is equivalent to its total amount.This field is a calculated field. |
| blng__InvoiceLineAllocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount from the debit note that's allocated to an invoice line.This field is a calculated field. |
| blng__InvoiceLineUnallocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount from the debit note that's unallocated from an invoice line.This field is a calculated field. |
| blng__NetCreditNoteAllocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of the related credit note that's allocated to an invoice line. The net credit net allocations are calculated by deducting the related credit note line's unallocated amount from its allocated amount.This field is a calculated field. |
| blng__NetInvoiceAllocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of the debit note that's allocated to invoices. The net invoice allocations are calculated by deducting the related invoice line's unallocated amount from its allocated amount.This field is a calculated field. |
| blng__NetPaymentAllocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of the debit note that's allocated to payments. The net payment allocations are calculated by deducting the debit note's refund amount from its payment amount.This field is a calculated field. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details about the debit note. |
| blng__PaymentBalance__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of the debit note after excluding payments and refunds.This field is a calculated field. |
| blng__Payments1__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe payment made from the debit note's amount after deducting the refund amount.This field is a calculated field. |
| blng__Payments__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe payment made from the debit note's amount.This field is a calculated field. |
| blng__Refunds__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe refund that's added to the debit note's amount.This field is a calculated field. |
| blng__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the debit note.Possible values are:CancelledDraftPostedThe default value is Draft. |
| blng__Subtotal__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of subtotals of all the related debit note lines.This field is a calculated field. |
| blng__TaxAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of tax for the debit note.This field is a calculated field. |
| blng__TaxCity__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the address that Salesforce Billing uses to calculate tax for the debit note. |
| blng__TaxCountry__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country of the address that Salesforce Billing uses to calculate tax for the debit note. |
| blng__TaxErrorMessage__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe error message when the external tax engine fails to calculate tax for the debit note. |
| blng__TaxState__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the address that Salesforce Billing uses to calculate tax for the debit note. |
| blng__TaxStreet2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the address that Salesforce Billing uses to calculate tax for the debit note. |
| blng__TaxStreet__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the address that Salesforce Billing uses to calculate tax for the debit note. |
| blng__TaxZipCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the address that Salesforce Billing uses to calculate tax for the debit note. |
| blng__TotalAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of the debit note.This field is a calculated field. |
| blng__TotalAvailableForAllocation__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of the debit note that's available for allocation. This amount is calculated by deducting the debit note's total net allocations from the total amount.This field is a calculated field. |
| blng__TotalNetAllocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount that's been allocated by the credit note that's associated with the debit note. The total net allocations are calculated by summing up the net credit note and invoice allocations.This field is a calculated field. |
| blng__Unallocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount that's been unallocated by the debit note.This field is a calculated field. |
