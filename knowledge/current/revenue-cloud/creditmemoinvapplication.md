---
title: "CreditMemoInvApplication"
domain: revenue-cloud
topic: creditmemoinvapplication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.221Z
estimatedTokens: 1377
keywords: [CreditMemoInvApplication, application, credit, memo, invoice, API, version, 62.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# CreditMemoInvApplication

> Represents information about the application of a credit memo to an
         invoice. This object is available in API version 62.0 and later.

# CreditMemoInvApplication

Represents information about the application of a credit memo to an invoice. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Special Access Rules

You need the Credit Memo Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesFilter, SortDescriptionRequired. The amount of the credit memo that was applied to or unapplied from the invoice. |
| AppliedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the credit memo was applied. If the credit memo invoice application's type is Unapplied, this value is inherited from the Applied date of the credit memo referenced in the AssociatedLineId field. |
| AssociatedLineId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the original credit memo invoice application for a credit memo invoice application that represents an unapplied credit memo.This field is a relationship field.Relationship NameAssociatedLineRefers ToCreditMemoInvApplication |
| CreditMemoBalance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe balance of a credit memo after it's applied or unapplied. This field is a snapshot of the credit memo's balance after the action. This field isn't updated after further changes to the credit memo balance. |
| CreditMemoId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The credit memo that was applied or unapplied.This field is a relationship field.Relationship NameCreditMemoRefers ToCreditMemo |
| CreditMemoInvoiceNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. An auto-generated number identifying the credit memo invoice application. |
| Date | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the credit memo amount was applied to the invoice. |
| Description | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionAdditional details about the credit memo applied to an invoice. |
| EffectiveDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe effective date of the application or unapplication of credit. You can provide this value when applying or unapplying the credit memo. This field is optional and provided only for reporting purposes. It doesn't affect the credit memo invoice application's other fields. |
| HasBeenUnapplied | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies whether this credit memo application has been unapplied from the target invoice.Valid values are:NANoYes |
| ImpactAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe net adjustment to the invoice's balance after a credit memo is applied or unapplied. If a credit memo was applied, this value is the negative version of the credit memo invoice application's Amount field. If a credit memo was unapplied, this value is the positive version of the credit memo invoice application's Amount field.This field is a calculated field. |
| InvoiceBalance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe balance of the credit memo after a credit memo is applied or unapplied. This field is a snapshot of the credit memo's balance after the action. This field isn't updated after further changes to the credit memo balance. |
| InvoiceId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The invoice to which the credit memo is applied.This field is a relationship field.Relationship NameInvoiceRelationship TypeMaster-detailRefers ToInvoice (the master object) |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. Specifies whether the credit memo line application was generated because of an apply action (application) or an unapply action (unapplication).Valid values are:AppliedUnapplied |
| UnappliedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when this application was unapplied from the target invoice. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CreditMemoInvApplicationFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CreditMemoInvApplicationHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CreditMemoInvApplicationFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- CreditMemoInvApplicationHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
