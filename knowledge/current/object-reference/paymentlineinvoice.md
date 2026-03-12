---
title: "PaymentLineInvoice"
domain: object-reference
topic: paymentlineinvoice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.587Z
estimatedTokens: 1521
keywords: [PaymentLineInvoice, payment, allocated, unallocated, invoice, API, version, 48.0, later, Calls, Special, Access, Rules, Usage]
---

# PaymentLineInvoice

> Represents a payment allocated to or unallocated from an invoice. This
    object is available in API version 48.0 and later.

# PaymentLineInvoice

Represents a payment allocated to or unallocated from an invoice. This object is available in API version 48.0 and later.

## Supported Calls

create(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access Commerce Payments entities, your org must have a Salesforce Order Management license with the Payment Platform org permission activated. Commerce Payments entities are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, SortDescriptionTotal amount applied or unapplied by this payment line. |
| AppliedDate | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe date that this line was applied to an invoice or payment. If this field is null, it inherits the value of the payment line invoice’s Date field. |
| AssociatedAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe account for this payment line’s target invoice.This is a relationship field.Relationship NameAssociatedAccountRelationship TypeLookupRefers ToAccount |
| AssociatedPaymentLineId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe paymentLine that was unapplied. Populated only when PaymentLineInvoice’s Type field has a value of Unapplied.This is a relationship field.Relationship NameAssociatedPaymentLineRelationship TypeLookupRefers ToPaymentLineInvoice |
| Comments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsers can add comments to provide additional details about a record. Maximum of 1000 characters. |
| Date | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe date and time that this payment line was created. |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionDefines the date and time when the payment line application or unapplication becomes effective. |
| EffectiveImpactAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionShows how this payment invoice line impacts a customer’s accounts receivable. This value is positive when PaymentLineInvoice’s Type field is Applied, and negative when PaymentLineInvoice’s Type is Unapplied. If there’s an unapplied line related to this record, EffectiveImpactAmount has a value of 0.NoteEffectiveImpactAmount evaluates only the applied and unapplied line pair. Therefore, the effective impact amount could be different for different lines within the same payment. |
| HasBeenUnapplied | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionDefines whether this payment line has been unapplied from the target invoice. Has a value of NA when PaymentInvoiceLine’s Type field has a value of Unapplied. Can be No or Yes if Type has a value of Applied.Possible values are:NANoYes |
| ImpactAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionShows the payment’s financial impact against the customer’s accounts receivable. If PaymentLineInvoice has a Type of Applied, the ImpactAmount is the negative equivalent of the line’s Amount field. Otherwise, ImpactAmount equals Amount. |
| InvoiceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionTarget invoice for this payment line.This is a relationship field.Relationship NameInvoiceRelationship TypeLookupRefers ToInvoice |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| PaymentBalance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal balance of this line’s parent payment record following the application or unapplication of this payment line. |
| PaymentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionParent payment for this payment line.This is a relationship field.Relationship NamePaymentRelationship TypeLookupRefers ToPayment |
| PaymentLineInvoiceNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionSystem-defined unique ID for this payment line. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionDefines whether this payment line has been applied or unapplied to the target invoice.Possible values are:AppliedUnapplied |
| UnappliedDate | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe date that this payment line was unapplied from the target invoice. Populated only when the Type field equals Unapplied. Inherits the value of the Date field. |

## Usage

Use a payment line to apply all or part of a payment’s balance to an invoice. The PaymentLineInvoice object represents the balance taken from the payment and applied toward the invoice. You can apply a payment’s balance when you create the payment record or afterward. The payment line must have the same currency as the parent payment.

A payment line has an amount, which represents the total amount taken from the payment, and balance, which represents the remaining amount after the payment line has been applied to an invoice. A payment’s amount can’t be less than the sum of all of its payment line amounts.

One payment can have multiple payment lines. A payment line must be related to only payment.

You can create multiple payment lines on a payment apply each line to different invoices on the same account, or to invoices on different accounts.

![An image showing how one payment's payment lines can apply to invoices across different accounts.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi%2Fimages%2FSforce_payment_flow.png&folder=object_reference)

Here’s one way you could use Salesforce API to apply a payment to an invoice using a payment line.
