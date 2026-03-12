---
title: "Invoice"
domain: object-reference
topic: invoice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.306Z
estimatedTokens: 3072
keywords: [Invoice, financial, document, describing, total, amount, buyer, pay, goods, services, provided, API, version, 48.0, later]
---

# Invoice

> Represents a financial document describing the total amount a buyer must pay
      for goods or services provided. This object is available in API version 48.0 and later.

# Invoice

Represents a financial document describing the total amount a buyer must pay for goods or services provided. This object is available in API version 48.0 and later.

Users can edit non-posted invoices. Posted invoices can’t be deleted. After an invoice is posted, users can make payments against it to reduce its balance.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Special Access Rules

This object is available with Salesforce Order Management or D2C Commerce license, and Billing (Revenue Cloud). A few fields require Commerce Subscriptions to be enabled. These fields are available only in Lightning Experience.

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_invoice.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| Balance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe outstanding balance for this invoice. Equal to the invoice’s total amount with tax, ignoring payments and adjustments. |
| BillToContactId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionInherited from the account’s Bill to Account.This field is a relationship field.Relationship NameBillToContactRelationship TypeLookupRefers ToContact |
| BillingAccountId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionThe customer account for this invoice.This field is a relationship field.Relationship NameBillingAccountRelationship TypeLookupRefers ToAccount |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the invoice.The default value is USD.This field is available in API version 55.0 and later. |
| DaysInvoiceOpen | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of days since the invoice was created before it was paid.This field is a calculated field.This field is available in API version 55.0 and later. |
| DaysInvoiceOverdue | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of days since the date when payment was due.This field is a calculated field.This field is available in API version 55.0 and later. |
| Description | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionUsers can add more information about this invoice. Maximum of 1,000 characters. |
| DocumentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated number that is used to organize financial documents. The number can be sequential or random. |
| DueDate | TypedatePropertiesFilter, Group, Sort, UpdateDescriptionThe customer must pay the invoice by the due date. Unpaid invoices past the due date can be sent to collections. |
| FullSettlementDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionDate when the invoice is paid in full.This field is available in API version 55.0 and later. |
| InvoiceBatchRunId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionId of the invoice batch run that generated this invoice.This field is a relationship field.This field is available in API version 55.0 and later.Relationship NameInvoiceBatchRunRelationship TypeLookupRefers ToInvoiceBatchRun |
| InvoiceDate | TypedatePropertiesFilter, Group, Sort, UpdateDescriptionThe date that the invoice was posted. Used with payment terms to determine the invoice’s DueDate. For example, an invoice with an InvoiceDate of 04/01 and Net 30 payment terms has a DueDate of 05/01. |
| InvoiceNumber | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionSystem-created unique ID for this invoice. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view.This field is available in API version 55.0 and later. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. If this value is null, it's possible the user accessed this record or list view (LastReferencedDate) but didn't view it.This field is available in API version 55.0 and later. |
| NetCreditsApplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionRepresents the net credits applied to an invoice. Calculated by subtracting the sum of all unapplied lines from the sum of all applied lines.This field is a calculated field. This field is available in API version 55.0 and later. |
| NetPaymentsApplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionRepresents net payments applied to an invoice. Calculated by subtracting the sum of unapplied payments from the sum of payments applied to the invoice.This field is a calculated field. This field is available in API version 55.0 and later. |
| OwnerId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionThe user who owns an invoice record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PaymentExclusionReason | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe reason for skipping creation of payment schedules and payment schedule items for the invoice. This field is only available if Commerce Subscriptions is enabled for your org. Available in API version 63.0 and later. |
| PaymentTermId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionID of the payment term used on this invoice.This field is a relationship field. This field is available in API version 55.0 and later.Relationship NamePaymentTermRelationship TypeLookupRefers ToPaymentTerm |
| PostedDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date the invoice was posted.This field is available in API version 60.0 and later. |
| ReferenceEntityId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the order or order summary that created this invoice.This field is a polymorphic relationship field.Relationship NameReferenceEntityRelationship TypeLookupRefers ToOrder, OrderSummary |
| SettlementStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe state of the invoice's payment.Possible values are:Not ApplicableNot SettledPartially SettledSettledThis field is available when Subscription Management is enabled.This field is available in API version 55.0 and later. |
| ShouldExcludePayment | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRequired. Indicates whether to skip creating payment schedules and payment schedule items for the invoice (true) or not (false). The default value is false. This field is only available if Commerce Subscriptions is enabled for your org. Available in API Version 63.0 and later. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe state of the invoice.Possible values are:Canceled— Indicates that the invoice was generated and later canceled.Draft— Indicates that the invoice is a draft. Available in API version 60.0 and later.Draft In Progress— Indicates that the draft invoice is in progress. Available in API version 60.0 and later.Error— Indicates that an error occurred when processing the invoice.Pending— Indicates that the invoice is being processed.Posted— Indicates that the invoice has been generated and sent to the customer.Posting In Progress—Indicates that the invoice posting is in progress. Available in API version 60.0 and later.Void In Progress— Indicates that the invoice is pending a status change.Voided— The invoice’s status after the API successfully voids the invoice. |
| TaxLocaleType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe system used to handle tax on the original Order associated with the Invoice. Gross usually applies to taxes like value-added tax (VAT), and Net usually applies to taxes like sales tax. This field is available when Order Management or B2B Commerce is enabled.Possible values are:Gross: Displays most prices and taxes as combined valuesNet: Displays most prices and taxes as separate valuesThis field is available in API version 56.0 and later. |
| TotalAdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the invoice’s adjustment line amounts. |
| TotalAdjustmentAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the amount fields on the invoice's adjustment-type invoice lines, including tax.This field is available in API version 55.0 and later. |
| TotalAdjustmentTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of tax applied to the invoice line's adjustment lines.This field is available in API version 55.0 and later. |
| TotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum TotalAmount values on the invoice’s lines.This field is a calculated field. |
| TotalAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of TotalAmountWithTax values on the invoice’s lines. |
| TotalChargeAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the invoice’s charges.This field is a calculated field. |
| TotalChargeAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the amount fields on the invoice's charge-type invoice lines, including tax.This field is available in API version 55.0 and later. |
| TotalChargeTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of tax applied to the invoice's charge lines.This field is available in API version 55.0 and later. |
| TotalConvertedNegAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all negative invoice lines that were converted to a credit memo. For example, if one negative invoice line was for -$10 and one was for -$15, the total amount that’s converted to a credit memo is -$25.This field is a calculated field.This field is available when Subscription Management is enabled.This field is available in API version 56.0 and later. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of TaxAmount values on the invoice lines.This field is a calculated field. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InvoiceFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InvoiceHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InvoiceOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[InvoiceShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InvoiceFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- InvoiceHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- InvoiceOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- InvoiceShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
