---
title: "InvoiceLine"
domain: object-reference
topic: invoiceline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.370Z
estimatedTokens: 2745
keywords: [InvoiceLine, amount, buyer, pay, product, service, fee, Invoice, lines, created, order, line, API, version, 48.0]
---

# InvoiceLine

> Represents the amount that a buyer must pay for a product, service, or fee.
      Invoice lines are created based on the amount of an order line. This object is available
    in API version 48.0 and later.

# InvoiceLine

Represents the amount that a buyer must pay for a product, service, or fee. Invoice lines are created based on the amount of an order line. This object is available in API version 48.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Special Access Rules

This object is available with Order Management, Subscription Management, and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_invoiceline.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| AdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of adjustments made to the invoice line. |
| AdjustmentAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of adjustment amounts, including associated taxes related to the invoice line. |
| AdjustmentTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of tax adjustments to the invoice line.This field is available in API version 55.0 and later. |
| Balance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe outstanding balance for an invoice line. This is equal to the invoice’s total amount with tax after deducting the payments made. |
| BillingAddressId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionLookup field to an InvoiceAddressGroup containing the billing address for the invoice line. Assign one InvoiceAddressGroup to the invoiceLine's BillingAddressID, and another InvoiceAddressGroup to the invoiceLine's ShippingAddressId.This field is a relationship field. This field is available in API version 55.0 and later.Relationship NameBillingAddressRelationship TypeLookupRefers ToInvoiceAddressGroup |
| BillingScheduleGroupId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThis field is a relationship field.Relationship NameBillingScheduleGroupRefers ToBillingScheduleGroup |
| BillingScheduleId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionID of the billing schedule for the invoice line.This field is a relationship field. This field is available in API version 55.0 and later.Relationship NameBillingScheduleRelationship TypeLookupRefers ToBillingSchedule |
| ChargeAmount | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionSum of charges made to the invoice line. |
| ChargeAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount on a charge invoice line, including tax.This field is available in API version 55.0 and later. |
| ChargeTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax to be applied on a charge invoice line.This field is available in API version 55.0 and later. |
| ConvertedNegAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount from an invoice line that is converted to credit.This field is available in API version 56.0 and later. |
| Description | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionDescription of the invoice line. |
| GroupReferenceEntityItemId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionGrouping field for adjustment line items.This field is a polymorphic relationship field.Relationship NameGroupReferenceEntityItemRelationship TypeLookupRefers ToOrderItem, OrderItemAdjustmentLineItem |
| HasMultipleItems | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this field merges items from the same billing period.The default value is false. |
| InvoiceId | TypereferencePropertiesFilter, Group, SortDescriptionThe invoice that contains this invoice line.This field is a relationship field.Relationship NameInvoiceRelationship TypeLookupRefers ToInvoice |
| InvoiceLineEndDate | TypedatePropertiesFilter, Group, Sort, UpdateDescriptionFor invoice lines made from a time-based service, the end date of the billing for the service. |
| InvoiceLineStartDate | TypedatePropertiesFilter, Group, Sort, UpdateDescriptionFor invoice lines made from a time-based service, the first date of the billing for the service. |
| InvoiceStatus | TypestringPropertiesFilter, Group, Nillable, SortDescriptionState of the invoice line. Inherited from the invoice’s status. |
| LegalEntityAccountingPeriodId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThis field is a relationship field.Relationship NameLegalEntityAccountingPeriodRefers ToLegalEntyAccountingPeriod |
| LegalEntityId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThis field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| LineAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of the invoice line.This field is a calculated field. This field is available in API version 55.0 and later. |
| Name | TypestringPropertiesFilter, Group, idLookup, Sort, UpdateDescriptionName of the invoice line. |
| NetCreditsApplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total credit memo line amount applied to the invoice line. This amount is calculated by subtracting the unapplied credit memo line amount from the applied credit memo line amount.This field is a calculated field. |
| NetPaymentsApplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total payment applied to the invoice line. This amount is calculated by subtracting the unapplied payment amount from the applied payment amount.This field is a calculated field. |
| Product2Id | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe product that was charged or ordered to create the invoice line.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| Quantity | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionNumber of units of the order product that created the invoice line. |
| ReferenceEntityItemId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe order item or adjustment item that created the invoice line.This field is a polymorphic relationship field.Relationship NameReferenceEntityItemRelationship TypeLookupRefers ToOrderItem, OrderItemAdjustmentLineItem |
| ReferenceEntityItemType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of transaction that created the invoice line.Possible values are:DeliveryCharge—ChargeFee—Charge. This value is available in API version 56.0 and later.OrderProduct—Product |
| ReferenceEntityItemTypeCode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of object that created the invoice line.Possible values are:ChargeProduct |
| RelatedLineId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe original invoice line that was adjusted or taxed.This field is a relationship field.Relationship NameRelatedLineRelationship TypeLookupRefers ToInvoiceLine |
| ShippingAddressId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the shipping address associated with the invoice line.This field is a relationship field. This field is available in API version 55.0 and later.Relationship NameShippingAddressRelationship TypeLookupRefers ToInvoiceAddressGroup |
| TaxAmount | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionTotal tax for the invoice line. |
| TaxCode | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe code used to calculate tax rate for the invoice line. |
| TaxDocumentNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents the latest record in the external tax engine in which this invoice line item is included.This field is available in API version 55.0 and later. |
| TaxEffectiveDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe date used to calculate the invoice line’s TaxAmount. |
| TaxName | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionUser-defined name for the applied tax. |
| TaxRate | TypepercentPropertiesFilter, Nillable, Sort, UpdateDescriptionPercentage value used for calculating tax. |
| TaxTransactionNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents the transaction in the external tax engine in which the taxes for the line were calculated for the invoice line.This field is available in API version 55.0 and later. |
| TaxTreatmentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe tax treatment used on this invoice line.This field is a relationship field. This field is available in API version 55.0 and later.Relationship NameTaxTreatmentRelationship TypeLookupRefers ToTaxTreatment |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionShows the type of transaction for the invoice line.Possible values are:AdjustmentChargeTax |
| UnitPrice | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionPrice for one unit of the item on the invoice line. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InvoiceLineFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InvoiceLineHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InvoiceLineOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[InvoiceLineShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InvoiceLineFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- InvoiceLineHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- InvoiceLineOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- InvoiceLineShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
