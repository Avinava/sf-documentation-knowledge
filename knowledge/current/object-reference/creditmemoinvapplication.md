---
title: "CreditMemoInvApplication"
domain: object-reference
topic: creditmemoinvapplication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.552Z
estimatedTokens: 1346
keywords: [CreditMemoInvApplication, amount, applied, credit, memo, invoice, API, version, 48.0, later, Calls, Special, Access, Rules, Associated]
---

# CreditMemoInvApplication

> Represents an amount applied from a credit memo to an invoice. This
      object is available in API version 48.0 and later.

# CreditMemoInvApplication

Represents an amount applied from a credit memo to an invoice. This object is available in API version 48.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_creditmemoinvapplication.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesFilter, SortDescriptionThe amount of the credit memo that was applied to or unapplied from the invoice. |
| AppliedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the credit memo was applied. If the credit memo invoice application's type is Unapplied, this value is inherited from the Applied date of the credit memo referenced in the AssociatedLineId. |
| AssociatedLineId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionFor a credit memo invoice application that represents an unapplied credit memo, this field shows the original credit memo invoice application.This field is a relationship field.Relationship NameAssociatedLineRelationship TypeLookupRefers ToCreditMemoInvApplication |
| CreditMemoBalance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe balance of a credit memo after a credit memo is applied or unapplied. This field is a snapshot of the credit memo's balance after the action. It isn't updated after further changes to the credit memo balance. |
| CreditMemoId | TypereferencePropertiesFilter, Group, SortDescriptionThe credit memo that was applied or unapplied.This field is a relationship field.Relationship NameCreditMemoRelationship TypeLookupRefers ToCreditMemo |
| CreditMemoInvoiceNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionNumber of the invoice to which a credit memo is applied. |
| Date | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate when the credit memo amount was applied to the invoice. |
| Description | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionDescription of the credit applied to an invoice. |
| EffectiveDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe effective date of the application or unapplication of credit. Users can provide this value when applying or unapplying the credit memo. This field is optional and provided only for reporting purposes. It doesn't affect the credit memo invoice application's other fields. |
| HasBeenUnapplied | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionShows whether this credit memo application has been unapplied from the target invoice.Possible values are:NANoYes |
| ImpactAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe net adjustment to the invoice's balance after a credit memo is applied or unapplied. If a credit memo was applied, this value is the negative version of the credit memo invoice application's Amount. If a credit memo was unapplied, this value is the positive version of the credit memo invoice application's Amount.This field is a calculated field. |
| InvoiceBalance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe balance of the credit memo after a credit memo is applied or unapplied. This field is a snapshot of the credit memo's balance after the action. It isn't updated after further changes to the credit memo balance. |
| InvoiceId | TypereferencePropertiesFilter, Group, SortDescriptionID of the invoice to which credit is applied.This field is a relationship field.Relationship NameInvoiceRelationship TypeLookupRefers ToInvoice |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIndicates whether the credit memo line application was generated because of an apply action (application) or an unapply action (unapplication).Possible values are:AppliedUnapplied |
| UnappliedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when this application was unapplied from the target invoice. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CreditMemoInvApplicationFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CreditMemoInvApplicationHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CreditMemoInvApplicationFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- CreditMemoInvApplicationHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
