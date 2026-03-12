---
title: "blng__Invoice__c"
domain: blng-dev
topic: blnginvoicec
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.328Z
estimatedTokens: 3434
keywords: [blng__Invoice__c, financial, document, describing, total, amount, buyer, pay, provided, goods, services, blng, _Invoice, Calls]
---

# blng__Invoice__c

> Represents a financial document describing the total amount a buyer
         must pay for provided goods or services.

# blng\_\_Invoice\_\_c

Represents a financial document describing the total amount a buyer must pay for provided goods or services.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the invoice when multiple currencies are enabled. |
| Custom_Lock__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the invoice is locked or unlocked.Valid values are:LockedUnlockedThe default value is Unlocked. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe timestamp of when a user had last associated a task or event action with the invoice. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp of when the current user had last accessed the invoice, or a record or list view related to the invoice. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when a user last viewed this record, a record related to this record, or a list view. If this value is null, it's possible the user accessed this record or list view (LastReferencedDate) but didn't view it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the invoice. |
| blng__ARStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionShows whether the invoice has been credited, or canceled and rebilled. Valid values are:Cancel and RebillCredited |
| blng__Account__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe invoice's parent account that’s inherited from the order product. This is a relationship field.Relationship Nameblng__Account__rRelationship TypeMaster-detailRefers ToAccount (the master object) |
| blng__Action__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether a user has credited the invoice by either selecting the Cancel and Rebill button or the Credit button.Valid values are:Cancel and RebillCredit |
| blng__Balance__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of balances of all the related invoice lines. This amount is equal to the invoice’s total amount with tax, after deducting the payments and adjustments made. This is a calculated field. |
| blng__BaseCurrencyAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIf you have currency conversion requirements, you can define your base currency amount here. When you export your data, you can use this value in your conversions. |
| blng__BaseCurrencyFXDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf you have currency conversion requirements, you can define your base currency foreign exchange (FX) date here. When you export your data, you can use this value in your conversions. |
| blng__BaseCurrencyFXRate__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIf you have currency conversion requirements, you can define your base currency FX rate here. When you export your data, you can use this value in your conversions. |
| blng__BaseCurrency__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf you have currency conversion requirements, you can define your base currency here. |
| blng__BillToContact__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who receives information about the invoice. This is a relationship field.Relationship Nameblng__BillToContact__rRelationship TypeLookupRefers ToContact |
| blng__CorrectiveAction__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhen this field has a value of Action Required, the invoice is locked from receiving payments until the issue defined in the Last Payment Run Processing Message field is resolved. |
| blng__Credits__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of credit notes allocated against the invoice and its invoice lines. Sum of all credit note amounts applied to this invoice. This is a calculated field. |
| blng__DaysOutstanding__c | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of days past the invoice due date. |
| blng__DebitPayments__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of payments made to debit notes allocated against the invoice and its invoice lines. This is a calculated field. |
| blng__Debits__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of debit notes allocated against the invoice and its invoice lines. This is a calculated field. |
| blng__DeclinedPaymentRunCount__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSalesforce Billing doesn't populate this field by default. You can add your own customization to it when you want to track the number of times a payment run that targets the invoice has been unable to pay it. |
| blng__DefaultPaymentType__c | TypestringPropertiesFilter, Nillable, SortDescriptionUsed in payment runs. A payment run picks up an invoice when the run and the invoice have matching Default Payment Type values. This is a calculated field. |
| blng__DueDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date by which customers must pay their invoice. This field is provided for users who want to add their own due date and collections features for AR and AP. |
| blng__ImpactAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionInherits the value of the invoice’s total amount. This field is provided for users who must monitor impact amounts separately as part of their billing and collections processes. This is a calculated field. |
| blng__InvoiceDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the invoice was created either by the bill now process or an invoice run. |
| blng__InvoiceLocked__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the invoice is locked (true) or not (false). Before unlocking it, check whether a payment has already been created against this invoice. The default value is false. |
| blng__InvoicePostedDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the invoice was posted. |
| blng__InvoiceRunCreatedBy__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the invoice run that created the invoice. This is a relationship field.Relationship Nameblng__InvoiceRunCreatedBy__rRelationship TypeLookupRefers Toblng__InvoiceRun__c |
| blng__InvoiceStatus__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe state of the invoice. Valid values are:CancelledDraftErrorInitiatedPost In progressPostedRebilledThe default value is Draft. |
| blng__LastPaymentRunId__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the most recent payment run that evaluated the invoice for payment. This is a relationship field.Relationship Nameblng__LastPaymentRunId__rRelationship TypeLookupRefers Toblng__PaymentRun__c |
| blng__LastPaymentRunProcessingMessage__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf a payment run that targeted the invoice encountered an issue, this field shows information on how to correct the issue and unlock the invoice for receiving payments. |
| blng__NegativeLineConversion__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all Negative Line Conversion fields on the invoice’s invoice lines. This is a calculated field. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionSpecifies any additional notes and information from a user. |
| blng__NumberOfInvoiceLines__c | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total number of invoice lines. This is a calculated field. |
| blng__Order__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPopulated only when Bill Now is used to create the invoice, or during an invoice run if the order product Invoice Group field has a value of Order. This is a relationship field.Relationship Nameblng__Order__rRelationship TypeLookupRefers ToOrder |
| blng__PaymentBatch__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf a payment scheduler has a payment batch value, the payment run evaluates only invoices with matching payment batch values. If this field is null, payment runs evaluate the invoice only if the payment run's batch is also null. |
| blng__PaymentMethod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPayment methods store Automated Clearing House (ACH) or credit card details for a customer, and the payment gateway that accepts payments. This is a relationship field.Relationship Nameblng__PaymentMethod__rRelationship TypeLookupRefers Toblng__PaymentMethod__c |
| blng__PaymentProcessStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the payment process. Valid values are:CompletedFailedProcessingStarted |
| blng__PaymentRunId__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the payment run that evaluated and made payment against the invoice. This is a relationship field.Relationship Nameblng__PaymentRunId__rRelationship TypeLookupRefers Toblng__PaymentRun__c |
| blng__PaymentRunProcessingMessage__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field doesn't have any functionality by default. |
| blng__PaymentStatus__c | TypestringPropertiesFilter, Nillable, SortDescriptionA formula field that shows Paid when the invoice balance is zero (0). If payments are applied but there’s still a balance, the formula returns Partially Paid. If there are no payments applied, then the field shows Unpaid. If only credit notes are allocated to an invoice and the balance is still positive, the payment status remains Unpaid. Only applying payments to the invoice can change the status to Partially Paid. If this is a requirement, create a custom field. This is a calculated field. |
| blng__PaymentsAgainstInvoiceLines__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionNet amount of payments against the invoice line in the invoice. This is a calculated field. |
| blng__PaymentsAgainstInvoice__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of payment amount allocated to the invoice header. This field is used only when not using line level allocations. This is a calculated field. |
| blng__Payments__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe number of payments made against this invoice. This is a calculated field. |
| blng__RefundsAgainstInvoiceLines__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionCancellations of previous allocations to the invoice lines. This is a calculated field. |
| blng__RefundsAgainstInvoice__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionCancellations of previous allocations to the invoice. This is a calculated field. |
| blng__StatusFlag__c | TypestringPropertiesFilter, Nillable, SortDescriptionSpecifies the status of the invoice, with different color codes representing each status. Valid values are:Orange— Active with balanceGreen— No balance dueWhite— CanceledThis is a calculated field. |
| blng__Subtotal__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount to settle on this invoice, excluding tax. This is a calculated field. |
| blng__TargetDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe earliest date for invoicing. |
| blng__TaxAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all taxes for this invoice. This is a calculated field. |
| blng__TaxErrorMessage__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe notification about the issue related to taxes on the invoice. |
| blng__TaxErrors__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSpecifies a problem with the tax details associated with the invoice. This is a calculated field. |
| blng__TaxStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of tax treatment this invoice qualifies for. Valid values are:CancelledCompletedErrorPostedQueued |
| blng__TotalAmount__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount to be invoiced, including tax. This is a calculated field. |
| blng__UniqueId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identification number associated with this invoice. This field has unique set to true.This field is unique within your organization. |
