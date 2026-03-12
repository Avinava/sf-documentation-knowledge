---
title: "RefundLinePayment"
domain: object-reference
topic: refundlinepayment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.139Z
estimatedTokens: 1337
keywords: [RefundLinePayment, refund, line, applied, payment, API, version, 48.0, later, Calls, Special, Access, Rules, Usage]
---

# RefundLinePayment

> A refund line that has been applied to a payment. This object is available
    in API version 48.0 and later.

# RefundLinePayment

A refund line that has been applied to a payment. This object is available in API version 48.0 and later.

## Supported Calls

create(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access Commerce Payments entities, your org must have a Salesforce Order Management license with the Payment Platform org permission activated.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, SortDescriptionThe total amount applied to or unapplied from a payment by the refund line. |
| AppliedDate | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe date that the refund was applied to the linked payment. |
| AssociatedAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe account for the payment that received the refund.This is a relationship field.Relationship NameAssociatedAccountRelationship TypeLookupRefers ToAccount |
| AssociatedRefundLinePaymentId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe refundLine that was unapplied. Populated only when RefundLinePayment’s Type has a value of Unapplied.This is a relationship field.Relationship NameAssociatedRefundLinePaymentRelationship TypeLookupRefers ToRefundLinePayment |
| Comments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsers can add comments to provide additional information on the refund line payment. |
| Date | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionBy default, the day the refund line payment record was created. Users can also enter a different date. |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionDefines the date and time when the refund line application or unapplication becomes effective. |
| EffectiveImpactAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionShows how this payment refund line impacts a customer’s accounts receivable. This value is positive when RefundLinePayment’s Type field is Applied, and negative when RefundLinePayment’s Type is Unapplied. If there’s an unapplied line related to this record, EffectiveImpactAmount has a value of 0.NoteEffectiveImpactAmount evaluates only the applied and unapplied line pair. Therefore, the effective impact amount could be different for different lines within the same refund. |
| HasBeenUnapplied | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionShows whether this refund line has been unapplied.Possible values are:No |
| ImpactAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionShows how this payment refund line impacts a customer’s accounts receivable. This value is positive when RefundLinePayment’s Type field is Applied, and negative when RefundLinePayment’s Type is Unapplied. |
| PaymentBalance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe payment record’s balance following the application or unapplication of this refund line. |
| PaymentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe payment record that this refund line targets. Refund applications and unapplications are made against this payment.This is a relationship field.Relationship NamePaymentRelationship TypeLookupRefers ToPayment |
| RefundBalance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe refund record’s balance following the application or unapplication of this payment refund line. |
| RefundId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent refund of this refund line.This is a relationship field.Relationship NameRefundRelationship TypeLookupRefers ToRefund |
| RefundLinePaymentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionSystem-created unique ID for this refund line. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionDefines whether this line represents a refund that’s been applied or unapplied from a payment.Possible values are:Applied |
| UnappliedDate | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe date that this refund line was unapplied from a payment. |

## Usage

When you’re ready to apply a refund’s balance to a payment, create a refund line (RefundLinePayment). The refund line represents the balance taken from the payment and applied toward the invoice. You can apply a refund’s balance when you create the refund record or afterward. The refund line must have the same currency as the parent refund.

A refund has an amount, which represents the total amount taken from the refund, and a balance, which represents the remaining amount after the refund line has been applied to a payment. A refund’s amount can’t be less than the sum of all of its refund line amounts. You can apply any portion of a refund’s balance to a payment.

You can apply a refund to transactions on the same account or to different transacations across different accounts.![An example of a refund with three refund lines. The first two lines are applied to two payments on an account. The third line is applied to a payment on a different account.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi%2Fimages%2FSforce_refund_flow.png&folder=object_reference)
