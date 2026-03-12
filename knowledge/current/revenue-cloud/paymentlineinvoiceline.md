---
title: "PaymentLineInvoiceLine"
domain: revenue-cloud
topic: paymentlineinvoiceline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.800Z
estimatedTokens: 1357
keywords: [PaymentLineInvoiceLine, payment, line, that's, applied, unapplied, invoice, API, version, 64.0, later, Calls, Special, Access, Rules]
---

# PaymentLineInvoiceLine

> Represents information about a payment line that's applied to or
         unapplied from an invoice line. This object is available in API version 64.0 and
      later.

# PaymentLineInvoiceLine

Represents information about a payment line that's applied to or unapplied from an invoice line. This object is available in API version 64.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

You need the Revenue Cloud Billing license, and the Payment Admin permission set or the Payment Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe account of the customer who made a payment that's related to the payment line invoice line.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| Amount | TypecurrencyPropertiesCreate, Filter, SortDescriptionRequired. The amount that's been applied or unapplied by a payment line. |
| AppliedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe date and time when a payment line was applied to an invoice line. |
| AppliedImpactAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionIf the payment line invoice line's Type value is Applied, the applied impact amount is the same as the ImpactAmount value. The applied impact amount is 0 when the Type value is Unapplied.This field is a calculated field. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional details about the payment line invoice line. |
| EffectiveDateTime | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe date and time when a payment line's application to or unapplication from an invoice line becomes effective. |
| ImpactAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionIf the payment line invoice line's Type value is Applied, the impact amount is the negative equivalent of the payment line invoice line's Amount value. Otherwise, it's equal to the payment line invoice line's Amount value.This field is a calculated field. |
| InvoiceLineBalance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe balance of the invoice line after a payment line was applied to it or unapplied from it. |
| InvoiceLineId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The invoice line to which a payment line has been applied or unapplied.This field is a relationship field.Relationship NameInvoiceLineRelationship TypeMaster-detailRefers ToInvoiceLine (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LegalEntityAccountingPeriodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity accounting period related to the payment line invoice line.This field is a relationship field.Relationship NameLegalEntityAccountingPeriodRefers ToLegalEntyAccountingPeriod |
| LegalEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity related to the payment line invoice line.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| PaymentBalance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe balance of the Payment record after it was applied to or unapplied from an invoice line. |
| PaymentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The parent Payment record that's related to the payment line invoice line.This field is a relationship field.Relationship NamePaymentRefers ToPayment |
| PaymentLineInvoiceLineNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. An auto-generated number identifying the payment line invoice line. |
| RelatedPaymentLineInvcLineId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe related payment line invoice line with the Type value as Applied when the payment line invoice line's Type value is Unapplied.This field is a relationship field.Relationship NameRelatedPaymentLineInvcLineRefers ToPaymentLineInvoiceLine |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionRequired. Specifies whether a payment line has been applied to or unapplied from an invoice line.Valid values are:AppliedUnapplied |
| UnappliedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe date and time when a payment line was unapplied from an invoice line. |
| UnappliedStatus | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionRequired. Specifies whether a payment line has been unapplied from an invoice line.Valid values are:NA—Not ApplicableNoYes |
