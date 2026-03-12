---
title: "CreditMemo"
domain: object-reference
topic: creditmemo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.525Z
estimatedTokens: 2519
keywords: [CreditMemo, document, reduce, amount, buyer, owes, seller, under, terms, earlier, invoice, API, version, 48.0, later]
---

# CreditMemo

> Represents a document that is used to reduce the amount that a buyer owes a
      seller under the terms of an earlier invoice. This object is available in API version
    48.0 and later.

# CreditMemo

Represents a document that is used to reduce the amount that a buyer owes a seller under the terms of an earlier invoice. This object is available in API version 48.0 and later.

A credit memo always decreases the balance of an invoice. Users can apply positive credit memos to positive invoices, for example, a $10 credit memo reduces the balance of a $100 invoice line to $90.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Special Access Rules

This object is available with Order Management, Subscription Management, and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_creditmemo.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| AppType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionRead-only field that indicates which Salesforce application generated the credit memo.Possible values are:Commerce CloudRevenue CloudThis field is available in API versions 54.0 to 55.0 |
| Balance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the credit memo that's available for allocation. |
| BillToContactId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionInherited from the account’s Bill to Account field.This field is a relationship field.Relationship NameBillToContactRelationship TypeLookupRefers ToContact |
| BillingAccountId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionThe customer account associated with this credit memo.This field is a relationship field.Relationship NameBillingAccountRelationship TypeLookupRefers ToAccount |
| CreationMode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates whether the credit memo originated in Salesforce or an external system.Possible values are:ExternalSalesforceThis field is available in API version 55.0 and later. |
| CreditDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date when the credit memo was posted. |
| CreditMemoNumber | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionA credit memo numbering alternative to DocumentNumber, containing a number in a format of your choice. Credit memo numbering is optional. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThree-letter ISO 4217 currency code associated with the credit memo.The default value is USD.This field is available in API version 55.0 and later. |
| Description | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionDescription of the credit memo. |
| DocumentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionSystem-generated number for organizing financial documents, for example DOC-0000123. |
| EffectiveDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionRepresents the effective date of the credit memo. If this field is empty, the credit date is used. For reporting purposes only; this field drives no other logic.This field is available in API version 55.0 and later. |
| ExternalReference | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionContains an external system’s ID for the credit memo.This field is available in API version 55.0 and later. |
| ExternalReferenceDataSource | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionContains the name of the external system that also contains the credit memo.This field is available in API version 55.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it's possible that this record was only referenced (LastReferencedDate) and not viewed. |
| NetCreditsApplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionRepresents the total difference between the credit applied to and credit unapplied from the invoice.This field is a calculated field. This field is available in API version 55.0 and later. |
| OwnerId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionThe user who owns a credit memo record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReferenceEntityId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record that this credit memo was generated from. For example, the order, order summary, or invoice.This field is a polymorphic relationship field.Relationship NameReferenceEntityRelationship TypeLookupRefers ToInvoice, OrderThis field is available in API version 53.0 and later. |
| SourceAction | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates which Salesforce API created the credit memo.Possible values are:Invoice—Indicates that Credit Invoice API created the credit memo and applied it to the invoice.NegativeInvoiceLineConversion—Indicates that Subscription Management created the credit memo when a negative invoice line was converted.Standalone—Indicates that the Credit Memo API created the credit memo.VoidPostedInvoice—Indicates that the Void a Posted Invoice API created the credit memo to offset the amount that was voided on the invoice.This field is available in API version 55.0 and later. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UpdateDescriptionStatus of the credit memo.Possible values are:Canceled—Indicates that the credit memo isn't being used and doesn't have a financial impact.Error—Indicates that the credit memo has an error and doesn’t have a financial impact.Pending—Indicates that the credit memo is being processed but hasn't yet been posted as a financial transaction.Posted—The credit memo has been recorded as a financial transaction. Most fields can’t be edited. |
| TotalAdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of TotalAmount values for the credit memo’s adjustment lines.This field is a calculated field. |
| TotalAdjustmentAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the credit memo’s adjustment line amounts, including tax.This field is available in API version 49.0 and later. |
| TotalAdjustmentTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the credit memo’s adjustment line tax. Adjustment line balances are excluded.This field is available in API version 49.0 and later. |
| TotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of the credit memo’s TotalLineAmount and TotalAdjustmentAmount.This field is a calculated field. |
| TotalAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal credit memo amount, with tax included.This field is a calculated field. |
| TotalChargeAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of TotalAmount values for the credit memo’s charge lines.This field is a calculated field. |
| TotalChargeAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the credit memo’s charge line amounts, including tax.This field is available in API version 49.0 and later. |
| TotalChargeTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThis field is available in API version 49.0 and later. |
| TotalCreditAmountApplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionCredit memo amount that's been applied to invoices.This field is available in API version 53.0 and later. |
| TotalCreditAmountUnapplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionCredit memo amount that's been unapplied from invoices.This field is available in API version 55.0 and later. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of TotalAmount values for the credit memo’s tax lines.This field is a calculated field. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, the associated objects are available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CreditMemoFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CreditMemoHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CreditMemoOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CreditMemoShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CreditMemoFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- CreditMemoHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- CreditMemoOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- CreditMemoShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
