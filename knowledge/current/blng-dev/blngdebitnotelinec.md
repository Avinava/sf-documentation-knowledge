---
title: "blng__DebitNoteLine__c"
domain: blng-dev
topic: blngdebitnotelinec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.219Z
estimatedTokens: 4151
keywords: [blng__DebitNoteLine__c, amount, that's, allocated, increase, balance, invoice, line, blng, _DebitNoteLine, Calls]
---

# blng__DebitNoteLine__c

> Represents information about the amount that's allocated to increase the
         balance of an invoice line.

# blng\_\_DebitNoteLine\_\_c

Represents information about the amount that's allocated to increase the balance of an invoice line.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the debit note line.The default value is USD. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the debit note line. |
| blng__AllocatedRevenueAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe debit note's revenue amount that's allocated to invoice lines. |
| blng__Allocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe debit note's amount that's allocated to invoice lines, excluding tax.This field is a calculated field. |
| blng__AvailableBalance__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the debit note line that's available for allocation or refund. The balance is calculated using the formulablng__TotalAmount__c -  blng__NetPaymentAllocations__c  -  blng__InvoiceLineNetAllocations__c -  blng__CreditNoteLineNetAllocations__c.This field is a calculated field. |
| blng__AvailableForPayment__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount from the debit note line that's available for payment. This amount is calculated using the formulablng__TotalPaymentAmount__c  -  blng__TotalRefundAmount__c  -   blng__NetPaymentAllocations__c.This field is a calculated field. |
| blng__BaseCurrencyAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe debit note line's total amount in the base currency. |
| blng__BaseCurrencyFXDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date used to determine the foreign exchange rate when calculating the base currency amount. |
| blng__BaseCurrencyFXRate__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe foreign exchange rate that's used to convert the debit note line's total amount to the base currency amount. |
| blng__BaseCurrency__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe base currency that's used for converting currency during data export. |
| blng__BillToAccount__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that receives information about the debit note line.This field is a relationship field.Relationship Nameblng__BillToAccount__rRelationship TypeLookupRefers ToAccount |
| blng__BillToContact__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who receives information about the debit note line. This value is inherited from the account’s Bill to Contact field.This field is a relationship field.Relationship Nameblng__BillToContact__rRelationship TypeLookupRefers ToContact |
| blng__BillingFinanceBook__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe finance book associated with the related debit note.This field is a relationship field.Relationship Nameblng__BillingFinanceBook__rRelationship TypeLookupRefers Toblng__FinanceBook__c |
| blng__BillingGLRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe General Ledger (GL) rule that's used to determine the GL accounts for the invoice line associated with the debit note line.This field is a relationship field.Relationship Nameblng__BillingGLRule__rRelationship TypeLookupRefers Toblng__GLRule__c |
| blng__BillingGLTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing treatment associated with the billing General Ledger (GL) rule of the debit note line.This field is a relationship field.Relationship Nameblng__BillingGLTreatment__rRelationship TypeLookupRefers Toblng__GLTreatment__c |
| blng__BillingRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing rule associated with the debit note line.This field is a relationship field.Relationship Nameblng__BillingRule__rRelationship TypeLookupRefers Toblng__BillingRule__c |
| blng__BillingTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing treatment associated with the debit note line.This field is a relationship field.Relationship Nameblng__BillingTreatment__rRelationship TypeLookupRefers Toblng__BillingTreatment__c |
| blng__CalculateTax__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field indicates whether tax must be calculated for the debit note line.The default value is false. |
| blng__CreditNoteLineAllocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount allocated from all the related credit note lines.This field is a calculated field. |
| blng__CreditNoteLineNetAllocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount allocated from all the related credit note lines.This field is a calculated field. |
| blng__CreditNoteLineUnallocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount that's unallocated from all the related credit note lines.This field is a calculated field. |
| blng__DebitNoteLineDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the debit note line was posted. |
| blng__DebitNote__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe debit note associated with the debit note line.This field is a relationship field.Relationship Nameblng__DebitNote__rRelationship TypeMaster-detailRefers Toblng__DebitNote__c |
| blng__EffectiveTaxDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the tax is applied to the debit note line. |
| blng__EndDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the debit note line. |
| blng__FinancePeriod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe finance period associated with the debit note line.This field is a relationship field.Relationship Nameblng__FinancePeriod__rRelationship TypeLookupRefers Toblng__FinancePeriod__c |
| blng__ImpactAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe debit note line’s financial impact against the customer’s accounts receivable. When the debit note line is applied, the impact amount is equivalent to the debit note line's total amount.This field is a calculated field. |
| blng__InvoiceLineNetAllocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount from the debit note line that's allocated to an invoice line. This amount is calculated by deducting the debit note line's unallocated amount from its allocated amount.This field is a calculated field. |
| blng__LegalEntityReference__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe legal entity associated with the debit note line. |
| blng__LegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity associated with the debit note line.This field is a relationship field.Relationship Nameblng__LegalEntity__rRelationship TypeLookupRefers Toblng__LegalEntity__c |
| blng__NetPaymentAllocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of the debit note line that's allocated to payments. The net payment allocations are calculated by deducting the debit note line's refund amount from its payment amount.This field is a calculated field.Formulablng__Payments__c -  blng__Refunds__c |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details about the debit note line. |
| blng__OverrideInitialRevenueEndDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that overrides the revenue end date of the revenue schedule associated with the debit note line. |
| blng__OverrideInitialRevenueStartDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that overrides the revenue start date of the revenue schedule associated with the debit note line. |
| blng__PaymentBalance__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of the debit note line after excluding payments and refunds.This field is a calculated field. |
| blng__Payments1__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe payment made from the debit note line's amount after deducting the refund amount.This field is a calculated field. |
| blng__Payments__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe payment made from the debit note line's amount.This field is a calculated field. |
| blng__ProductName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the product associated with the debit note line. |
| blng__Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the debit note line.This field is a relationship field.Relationship Nameblng__Product__rRelationship TypeLookupRefers ToProduct2 |
| blng__Refunds__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of the debit note line that's been refunded.This field is a calculated field. |
| blng__RevenueAgreementMatchingID__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is used to group debit note lines with the same revenue agreement matching ID. |
| blng__RevenueExpectedAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected revenue impact of the related credit note line. |
| blng__RevenueLiabilityAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe revenue liability of the related credit note line. |
| blng__RevenueMostLikelyAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe most likely revenue impact of the related credit note line for revenue calculations when the revenue amount is uncertain. |
| blng__RevenueScheduleStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the revenue schedule associated with the debit note line.Possible values are:CompleteErrorQueued |
| blng__RevenueTransactionAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the revenue transaction that's associated with the debit note line. |
| blng__RevenueTransactionPrice__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price of the revenue transaction that's associated with the debit note line. |
| blng__StandaloneSellingAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the standalone order that's associated with the debit note line. |
| blng__StandaloneSellingPrice__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price of the standalone order that's associated with the debit note line. |
| blng__StartDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the debit note line. |
| blng__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the debit note line.Possible values are:CancelledDraftPostedThe default value is Draft. |
| blng__Subtotal__c | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe amount of the debit note line, excluding tax, that's not refunded. The subtotal is calculated by deducting the refund amount from the debit note line's amount. |
| blng__TaxAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of tax for the debit note line. |
| blng__TaxCity__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the address that Salesforce Billing uses to calculate tax for the debit note line. |
| blng__TaxCountry__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country of the address that Salesforce Billing uses to calculate tax for the debit note line. |
| blng__TaxErrorMessage__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe error message when the external tax engine fails to calculate tax for the debit note line. |
| blng__TaxGLRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe tax rule for recording tax transactions of the debit note line in an external general ledger.This field is a relationship field.Relationship Nameblng__TaxGLRule__rRelationship TypeLookupRefers Toblng__GLRule__c |
| blng__TaxGLTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe tax treatment for recording tax transactions of the debit note line in an external general ledger.This field is a relationship field.Relationship Nameblng__TaxGLTreatment__rRelationship TypeLookupRefers Toblng__GLTreatment__c |
| blng__TaxPercentageApplied__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of tax that was applied to the debit note line. |
| blng__TaxRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rule used to tax the debit note line.This field is a relationship field.Relationship Nameblng__TaxRule__rRelationship TypeLookupRefers Toblng__TaxRule__c |
| blng__TaxState__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the address that Salesforce Billing uses to calculate tax for the debit note line. |
| blng__TaxStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the tax calculation.Possible values are:CompletedErrorProcessingQueuedWarning |
| blng__TaxStreet2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the address that Salesforce Billing uses to calculate tax for the debit note line. |
| blng__TaxStreet__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the address that Salesforce Billing uses to calculate tax for the debit note line. |
| blng__TaxTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe tax treatment that's assigned to the debit note line. Tax rules and their treatments define how Salesforce Billing processes tax for your transactions.This field is a relationship field.Relationship Nameblng__TaxTreatment__rRelationship TypeLookupRefers Toblng__TaxTreatment__c |
| blng__TaxZipCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the address that Salesforce Billing uses to calculate tax for the debit note line. |
| blng__TotalAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of the debit note line. |
| blng__TotalAvailableForAllocation__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of the debit note line that's available for allocation. This amount is calculated by using the formulablng__TotalAmount__c -  blng__TotalNetAllocations__c.This field is a calculated field. |
| blng__TotalNetAllocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount allocated by the credit note that's associated with the debit note line.This field is a calculated field. |
| blng__TotalPaymentAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount that's been paid by using the debit note line.This field is a calculated field. |
| blng__TotalRefundAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount that's been refunded to the debit note line.This field is a calculated field. |
| blng__Unallocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount that's been unallocated from the debit note line.This field is a calculated field. |
