---
title: "blng__InvoiceLine__c"
domain: blng-dev
topic: blnginvoicelinec
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:08.366Z
estimatedTokens: 5137
keywords: [blng__InvoiceLine__c, amount, buyer, pay, product, service, fee, Invoice, lines, created, order, line, blng, _InvoiceLine, Calls]
---

# blng__InvoiceLine__c

> Represents the amount that a buyer must pay for a product, service, or fee. Invoice
      lines are created based on the amount of an order line.

# blng\_\_InvoiceLine\_\_c

Represents the amount that a buyer must pay for a product, service, or fee. Invoice lines are created based on the amount of an order line.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AVA_BLNG__Invoice_Message__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA summary of the invoice. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the invoice line when multiple currencies are enabled. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the invoice line. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the invoice line. |
| blng__ARStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the invoice line has been credited, or canceled and rebilled. Valid values are:Cancel and RebillCredited |
| blng__AllocatedRevenueAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total revenue impact of this invoice line. Possible scenarios of the allocated revenue amount:Can differ from the subtotal and total amount (with tax).Used when reallocating revenue among several transactions.Can be configured to create revenue schedules for this invoice line using this field as the amount. |
| blng__Asset__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInherited by default from the Lifecycle-Managed Asset field on the invoice line’s parent order product. This field can be overridden with a different asset. This is a relationship field.Relationship Nameblng__Asset__rRelationship TypeLookupRefers ToAsset |
| blng__Balance__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of the invoice that isn’t settled, which equals total amount (with tax) − allocations + unallocations. This is a calculated field. |
| blng__BalancewithoutDebits__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of the invoice that isn’t settled, excluding debit note allocations. The balance without debits amount equals the total amount (with tax) − payments + unallocations against invoice lines − credits. This is a calculated field. |
| blng__BaseCurrencyAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe credit note line’s total amount, converted into the base currency. |
| blng__BaseCurrencyFXDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date used to determine the foreign exchange rate when calculating the base currency amount. |
| blng__BaseCurrencyFXRate__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe FX rate used to convert the credit note amount to the base currency amount. |
| blng__BaseCurrency__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe base currency of this credit note line that’s used for reporting purposes. |
| blng__BillingFinanceBook__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis invoice line’s transactions report to this finance book. This is a relationship field.Relationship Nameblng__BillingFinanceBook__rRelationship TypeLookupRefers Toblng__FinanceBook__c |
| blng__BillingFinancePeriod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice line’s transactions report to a finance period within the finance book. This is a relationship field.Relationship Nameblng__BillingFinancePeriod__rRelationship TypeLookupRefers Toblng__FinancePeriod__c |
| blng__BillingFrequency__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates how frequently Salesforce Billing invoices the invoice line’s originating order product. Valid values are:AnnualInvoice PlanMonthlyQuarterlySemiannual |
| blng__BillingGLRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the general ledger (GL) treatment for this invoice line. This is a relationship field.Relationship Nameblng__BillingGLRule__rRelationship TypeLookupRefers Toblng__GLRule__c |
| blng__BillingGLTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the debit and credit GL accounts that record this invoice line. This is a relationship field.Relationship Nameblng__BillingGLTreatment__rRelationship TypeLookupRefers Toblng__GLTreatment__c |
| blng__BillingRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lookup to the billing rule used to generate this invoice line. This is a relationship field.Relationship Nameblng__BillingRule__rRelationship TypeLookupRefers Toblng__BillingRule__c |
| blng__BillingTransaction__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing transaction associated with the invoice line. This is a relationship field.Relationship Nameblng__BillingTransaction__rRelationship TypeLookupRefers Toblng__BillingTransaction__c |
| blng__BillingTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lookup to the billing treatment used to generate this invoice line. This is a relationship field.Relationship Nameblng__BillingTreatment__rRelationship TypeLookupRefers Toblng__BillingTreatment__c |
| blng__CalculatedQuantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of billing periods charged on the invoice line. |
| blng__ChargeDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the transaction date of the invoice line. |
| blng__ChargeType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies if the invoice line is recurring, one-time, or usage (legacy). Possible values are:One-TimeRecurringUsage |
| blng__ConvertedCreditNoteLine__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor converted negative invoice lines, the credit note line is created as part of the conversion. This is a relationship field.Relationship Nameblng__ConvertedCreditNoteLine__rRelationship TypeLookupRefers Toblng__CreditNoteLine__c |
| blng__Credits__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all credit note lines allocated to this invoice line. This is a calculated field. |
| blng__DaysPastDue__c | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of days past the invoice line due date. This is a calculated field. |
| blng__DebitPayments__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe net amount of all payments made to debit note allocations on this invoice line. The debit payments equals the debits (payment allocations) − debits (payment unallocations). This is a calculated field. |
| blng__DebitsPaymentAllocations__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of all payments made against the debit note allocated to this invoice line. |
| blng__DebitsPaymentUnallocations__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sum of all payments unallocated from debit notes allocated to this invoice line. |
| blng__Debits__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all debit note lines allocated to this invoice line. This is a calculated field. |
| blng__DueDate__c | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date by which customers must pay their invoice line. This is a calculated field. |
| blng__EndDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the billed period for this invoice line. This value can impact the revenue. |
| blng__GroupedQuantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSalesforce Billing creates invoice lines for different groups of order products based on several order and order product fields. |
| blng__ImpactAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe change to net receivables as a result of this credit note line. Positive credit note lines have a negative impact amount because they reduce the overall amount owed to the company. This is a calculated field. |
| blng__InvoiceLineState__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies if the invoice line is marked. Valid values are:Merged— The invoice line contains invoice sublines.Regular— The invoice line is standard and doesn’t include sublines.The default value is Regular. |
| blng__InvoiceLineStatus__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the invoice line and is inherited from the invoice’s status. Valid values are:CancelledDraftErrorInitiatedPost In progressPostedRebilledThe default value is Draft. |
| blng__InvoiceRun__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice run that created this invoice line. This is a relationship field.Relationship Nameblng__InvoiceRun__rRelationship TypeLookupRefers Toblng__InvoiceRun__c |
| blng__Invoice__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent invoice for this invoice line. This is a relationship field.Relationship Nameblng__Invoice__rRelationship TypeMaster-detailRefers Toblng__Invoice__c (the master object) |
| blng__LegalEntityReference__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescription |
| blng__LegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lookup to this invoice line’s legal entity. Legal entities control which treatments are associated with this invoice line. This is a relationship field.Relationship Nameblng__LegalEntity__rRelationship TypeLookupRefers Toblng__LegalEntity__c |
| blng__NegativeLineConversion__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe total amount of this invoice that’s converted to a credit note line. Only negative invoice lines are converted. |
| blng__NetAllocationsAgainstInvoiceLines__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe net amount of all payments made against this invoice line, which equals (allocations against invoice lines) − (unallocations against invoice lines). This is a calculated field. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionReference notes that users can add. Notes fields don’t have associated system logic. |
| blng__OrderProduct__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order product that generated the invoice line. This is a relationship field.Relationship Nameblng__OrderProduct__rRelationship TypeLookupRefers ToOrderItem |
| blng__OverrideInitialRevenueEndDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field enables users to override the revenue period’s configured end date when creating revenue schedules. |
| blng__OverrideInitialRevenueStartDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field enables users to override the revenue period’s configured start date when creating revenue schedules. |
| blng__PaymentsAgainstDebitNoteLines__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of payments made to debit notes allocated against the invoice and its invoice lines. This is a calculated field. |
| blng__PaymentsAgainstInvoiceLines__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total number of payment allocations made against the invoice lines. This is a calculated field. |
| blng__Payments__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe net amount of payments against this invoice line and any of its allocated debit note lines, which equals the (amount allocated against invoice line) + (amount allocated against debit note lines) − (amount unallocated against invoice lines) − (amount unallocated against debit note lines). This is a calculated field. |
| blng__Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionProduct that created the order product being invoiced. This is a relationship field.Relationship Nameblng__Product__rRelationship TypeLookupRefers ToProduct2 |
| blng__Quantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionQuantity invoiced from the order product. |
| blng__RefundsAgainstDebitNoteLines__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThis field is a calculated field. |
| blng__RefundsAgainstInvoiceLines__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThis field is a calculated field. |
| blng__RevenueExpectedAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThis user-defined field is the expected revenue impact of this credit note line, if different from the credit note line amount. The revenue expected amount can:Differ from the subtotal and total amount (with tax).Be configured to create revenue schedules for this credit note line using this field as the amount on the revenue schedule. |
| blng__RevenueLiabilityAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThis user-defined field is the revenue liability associated with this credit note line. The revenue liability amount can:Differ from the subtotal and total amount (with tax).Be configured to create revenue schedules for this credit note line using this field as the amount on the revenue schedule. |
| blng__RevenueMostLikelyAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThis user-defined field is the most likely revenue impact of this credit note line for revenue calculations when the revenue amount is uncertain. This field can differ from the subtotal and total amount (with tax). |
| blng__RevenueScheduleStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the revenue schedule creation for this invoice line. Valid values are:CompleteErrorQueued |
| blng__StartDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the billed period for this invoice line. This value can impact the revenue. See Salesforce Help for details on revenue recognition. |
| blng__Subtotal__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount to settle on this invoice line, excluding tax. |
| blng__TaxAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total tax owed on this invoice line. |
| blng__TaxCity__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city used during tax calculation. The invoice’s tax address fields are used only if the invoice line’s tax address fields are blank. |
| blng__TaxCountry__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country used during tax calculation. The invoice’s tax address fields are used only if the invoice line’s tax address fields are blank. |
| blng__TaxCounty__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe county used during tax calculation. The invoice’s tax address fields are used only if the invoice line’s tax address fields are blank. |
| blng__TaxErrorMessage__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescriptions of errors that occur during tax calculation. |
| blng__TaxError__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSpecifies a problem with the tax details associated with the invoice line. This is a calculated field. |
| blng__TaxGLRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lookup to the GL rule that defines the GL treatment of the tax for this invoice line. This is a relationship field.Relationship Nameblng__TaxGLRule__rRelationship TypeLookupRefers Toblng__GLRule__c |
| blng__TaxGLTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lookup to the GL treatment that defines the debit and credit GL accounts used to record the tax for this invoice line. This is a relationship field.Relationship Nameblng__TaxGLTreatment__rRelationship TypeLookupRefers Toblng__GLTreatment__c |
| blng__TaxLocationCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location code used during tax calculation. The invoice’s tax address fields are used only if the invoice line’s tax address fields are blank. |
| blng__TaxPercentageApplied__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total tax percentage applied to the invoice line and is null if the line is nontaxable. |
| blng__TaxRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the tax rule that defines the tax engine and tax data, such as address and date, to use when calculating tax for this invoice line. This is a relationship field.Relationship Nameblng__TaxRule__rRelationship TypeLookupRefers Toblng__TaxRule__c |
| blng__TaxState__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state used during tax calculation. The invoice’s tax address fields are used only if the invoice line’s tax address fields are blank. |
| blng__TaxStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the tax calculation for this invoice line. Valid values are:CompletedCopiedErrorProcessingQueuedWarning |
| blng__TaxStreet2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street address used during tax calculation. The invoice’s tax address fields are used only if the invoice line’s tax address fields are blank. |
| blng__TaxStreet__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street address used during tax calculation. The invoice’s tax address fields are used only if the invoice line’s tax address fields are blank. |
| blng__TaxTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the tax treatment used to generate this invoice line. This is a relationship field.Relationship Nameblng__TaxTreatment__rRelationship TypeLookupRefers Toblng__TaxTreatment__c |
| blng__TaxZipCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe destination ZIP code or postal code used during tax calculation. The invoice’s tax address fields are used only if the invoice line’s tax address fields are blank. |
| blng__TotalAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe subtotal of the invoice line plus tax. |
| blng__UniqueId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThis field is system-generated and not updated or changed by users. |
| blng__UnitPrice__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price of the order product. |
| blng__UsageSummary__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the usage summary that was used to create the invoice line and is blank unless the usage summary is the source for the invoice line. This is a relationship field.Relationship Nameblng__UsageSummary__rRelationship TypeLookupRefers Toblng__UsageSummary__c |
