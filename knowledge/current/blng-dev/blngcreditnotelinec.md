---
title: "blng__CreditNoteLine__c"
domain: blng-dev
topic: blngcreditnotelinec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.134Z
estimatedTokens: 3661
keywords: [blng__CreditNoteLine__c, product, service, adjustment, tax, line, items, were, included, credit, blng, _CreditNoteLine, Calls]
---

# blng__CreditNoteLine__c

> Represents product, service, adjustment, or tax line items that were included
         in a credit note.

# blng\_\_CreditNoteLine\_\_c

Represents product, service, adjustment, or tax line items that were included in a credit note.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the credit note line.The default value is USD. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the credit note line. |
| blng__AllocatedRevenueAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe credit note's revenue amount that's allocated to invoice lines. |
| blng__Allocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe credit note line's amount that's allocated to invoice lines, excluding tax.This field is a calculated field. |
| blng__Balance__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the credit note line that's available for allocation or refund. The balance is calculated using the formulablng__TotalAmount__c - blng__Allocations__c + blng__Unallocations__c -  blng__Refunds__c - blng__Debits__c.This field is a calculated field. |
| blng__BaseCurrencyAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe credit note line's total amount in the base currency. |
| blng__BaseCurrencyFXDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date used to determine the foreign exchange rate when calculating the base currency amount. |
| blng__BaseCurrencyFXRate__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe foreign exchange rate that's used to convert the credit note line's total amount to the base currency amount. |
| blng__BaseCurrency__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe base currency that's used for converting currency during data export. |
| blng__BillToAccount__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that receives information about the credit note line.This field is a relationship field.Relationship Nameblng__BillToAccount__rRelationship TypeLookupRefers ToAccount |
| blng__BillToContact__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who receives information about the credit note line. This value is inherited from the account’s Bill to Contact field.This field is a relationship field.Relationship Nameblng__BillToContact__rRelationship TypeLookupRefers ToContact |
| blng__BillingFinanceBook__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe finance book associated with the related credit note.This field is a relationship field.Relationship Nameblng__BillingFinanceBook__rRelationship TypeLookupRefers Toblng__FinanceBook__c |
| blng__BillingGLRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe General Ledger (GL) rule that's used to determine the GL accounts for the invoice line associated with the credit note line.This field is a relationship field.Relationship Nameblng__BillingGLRule__rRelationship TypeLookupRefers Toblng__GLRule__c |
| blng__BillingGLTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing treatment associated with the billing General Ledger (GL) rule of the credit note line.This field is a relationship field.Relationship Nameblng__BillingGLTreatment__rRelationship TypeLookupRefers Toblng__GLTreatment__c |
| blng__BillingRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing rule associated with the credit note line.This field is a relationship field.Relationship Nameblng__BillingRule__rRelationship TypeLookupRefers Toblng__BillingRule__c |
| blng__BillingTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing treatment associated with the credit note line.This field is a relationship field.Relationship Nameblng__BillingTreatment__rRelationship TypeLookupRefers Toblng__BillingTreatment__c |
| blng__CalculateTax__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field indicates whether tax must be calculaled for the credit note line.The default value is false. |
| blng__CreditNoteLineDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the credit note line was posted. |
| blng__CreditNote__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe credit note associated with the credit note line.This field is a relationship field.Relationship Nameblng__CreditNote__rRelationship TypeMaster-detailRefers Toblng__CreditNote__c |
| blng__Debits__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe allocated amount of the debit note that's associated with the credit note line.This field is a calculated field. |
| blng__EffectiveTaxDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the tax is applied to the credit note line. |
| blng__EndDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the credit note line. |
| blng__FinancePeriod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe finance period associated with the credit note line.This field is a relationship field.Relationship Nameblng__FinancePeriod__rRelationship TypeLookupRefers Toblng__FinancePeriod__c |
| blng__ImpactAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe credit note line’s financial impact against the customer’s accounts receivable. When the credit note line is applied, the impact amount is the negative equivalent of the credit note line's amount.This field is a calculated field. |
| blng__InvoiceLine__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice that the credit note line was applied to.This field is a relationship field.Relationship Nameblng__InvoiceLine__rRelationship TypeLookupRefers Toblng__InvoiceLine__c |
| blng__LegalEntityReference__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe legal entity associated with the credit note line. |
| blng__LegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity associated with the credit note line.This field is a relationship field.Relationship Nameblng__LegalEntity__rRelationship TypeLookupRefers Toblng__LegalEntity__c |
| blng__NetAllocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe difference between the allocated and unallocated amounts of the credit note line.This field is a calculated field. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details about the credit note line. |
| blng__OverrideInitialRevenueEndDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that overrides the revenue end date of the revenue schedule associated with the credit note line. |
| blng__OverrideInitialRevenueStartDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that overrides the revenue start date of the revenue schedule associated with the credit note line. |
| blng__ProductName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the product associated with the credit note line. |
| blng__Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the credit note line.This field is a relationship field.Relationship Nameblng__Product__rRelationship TypeLookupRefers ToProduct2 |
| blng__RefundsAllocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of the credit note line that's allocated to refunds.This field is a calculated field. |
| blng__RefundsUnallocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of the credit note line that's unallocated from refunds.This field is a calculated field. |
| blng__Refunds__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of the credit note line that's been refunded. This amount is calculated by using the formulablng__RefundsAllocations__c - blng__RefundsUnallocations__c.This field is a calculated field. |
| blng__RevenueExpectedAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected revenue impact of the credit note line, if its different from the credit note line amount. You can configure creating revenue schedules for the credit note line with revenue expected amount field as the amount of the revenue schedule. |
| blng__RevenueLiabilityAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe revenue liability associated with the credit note line. You can configure creating revenue schedules for the credit note line with revenue liability amount field as the amount of the revenue schedule. |
| blng__RevenueMostLikelyAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe most likely revenue impact of the credit note line for revenue calculations when the revenue amount is uncertain. |
| blng__RevenueScheduleStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the revenue scehdule associated with the credit note line.Possible values are:CompleteErrorQueued |
| blng__StartDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the credit note line. |
| blng__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the credit note line.Possible values are:CancelledDraftPostedThe default value is Draft. |
| blng__Subtotal__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the credit note line, excluding tax, that's not refunded. The subtotal is calculated by deducting the refund amount from the amount. |
| blng__TaxAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of tax for the credit note line. |
| blng__TaxCity__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the address that Salesforce Billing uses to calculate tax for the credit note line. |
| blng__TaxCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference code used when tax for the credit note line is calculated by an external tax engine. |
| blng__TaxCountry__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country of the address that Salesforce Billing uses to calculate tax for the credit note line. |
| blng__TaxEngine__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe tax engine that has calculated tax for the credit note line.Possible values are:Avalara AvaTaxStandardThe default value is Standard. |
| blng__TaxErrorMessage__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe error message when the external tax engine fails to calculate tax for the credit note line. |
| blng__TaxGLRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe tax rule for recording tax transactions of the credit note line in an external general ledger.This field is a relationship field.Relationship Nameblng__TaxGLRule__rRelationship TypeLookupRefers Toblng__GLRule__c |
| blng__TaxGLTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe tax treatment for recording tax transactions of the credit note line in an external general ledger.This field is a relationship field.Relationship Nameblng__TaxGLTreatment__rRelationship TypeLookupRefers Toblng__GLTreatment__c |
| blng__TaxPercentageApplied__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of tax that was applied to the credit note line. |
| blng__TaxRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rule used to tax the credit note line.This field is a relationship field.Relationship Nameblng__TaxRule__rRelationship TypeLookupRefers Toblng__TaxRule__c |
| blng__TaxState__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the address that Salesforce Billing uses to calculate tax for the credit note line. |
| blng__TaxStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the tax calculation.Possible values are:CompletedCopiedErrorProcessingQueuedWarning |
| blng__TaxStreet2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the address that Salesforce Billing uses to calculate tax for the credit note line. |
| blng__TaxStreet__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the address that Salesforce Billing uses to calculate tax for the credit note line. |
| blng__TaxTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe tax treatment assigned to the credit note line. Tax rules and their treatments define how Salesforce Billing processes tax for your transactions.This field is a relationship field.Relationship Nameblng__TaxTreatment__rRelationship TypeLookupRefers Toblng__TaxTreatment__c |
| blng__TaxZipCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the address that Salesforce Billing uses to calculate tax for the credit note line. |
| blng__TotalAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of the credit note line that's available for allocation. |
| blng__Unallocations__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount that's been unallocated from the credit note line.This field is a calculated field. |
