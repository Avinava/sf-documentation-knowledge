---
title: "CreditMemoLineInvoiceLine"
domain: revenue-cloud
topic: creditmemolineinvoiceline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.248Z
estimatedTokens: 1113
keywords: [CreditMemoLineInvoiceLine, junction, credit, memo, line, invoice, API, version, 62.0, later, Calls, Special, Access, Rules]
---

# CreditMemoLineInvoiceLine

> Represents a junction between a credit memo line and an invoice
         line. This object is available in API version 62.0 and later.

# CreditMemoLineInvoiceLine

Represents a junction between a credit memo line and an invoice line. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Special Access Rules

You need the Credit Memo Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesFilter, SortDescriptionRequired. The amount that's been applied to or unapplied from the invoice line. |
| AppliedDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the credit memo line was applied to the invoice line. |
| CreditMemoLineBalance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe balance of the credit memo line after it's applied to or unapplied from the invoice line. |
| CreditMemoLineId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the credit memo line record that's applied to or unapplied from the invoice line.This field is a relationship field.Relationship NameCreditMemoLineRefers ToCreditMemoLine |
| CreditMemoLineInvoiceLineNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. An auto-generated number identifying the credit memo line invoice line. |
| Description | TypetextareaPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionAdditional details about the credit memo line invoice line. |
| EffectiveDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the credit memo line's application to or unapplication from the invoice line becomes effective. |
| ImpactAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe credit memo line invoice line’s financial impact against the customer’s accounts receivable. If the credit memo line invoice line's type is Applied, the impact amount is the negative equivalent of the credit memo line invoice line's amount. Otherwise, the impact amount is equal to the credit memo line invoice line's amount.This field is a calculated field. |
| InvoiceLineBalance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe balance of the invoice line after the credit memo line was applied or unapplied. |
| InvoiceLineId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the invoice line record to which the credit memo line has been applied or unapplied.This field is a relationship field.Relationship NameInvoiceLineRelationship TypeMaster-detailRefers ToInvoiceLine (the master object) |
| LegalEntityAccountingPeriodId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the legal entity accounting period record related to the credit memo line invoice line.This field is a relationship field.Relationship NameLegalEntityAccountingPeriodRefers ToLegalEntyAccountingPeriod |
| LegalEntityId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the legal entity record related to the credit memo line invoice line.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| RelatedCrMemoLineInvcLineId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the related credit memo line invoice line record of the type Applied when the credit memo line invoice line's type is Unapplied.This field is a relationship field.Relationship NameRelatedCrMemoLineInvcLineRefers ToCreditMemoLineInvoiceLine |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. Specifies whether the credit memo line has been applied to or unapplied from the invoice line.Valid values are:AppliedUnapplied |
| UnappliedDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the credit memo line was unapplied from the invoice line. |
| UnappliedStatus | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. Specifies whether the credit memo line has been unapplied from the invoice line.Valid values are:NANoYes |
