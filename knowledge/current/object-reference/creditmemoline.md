---
title: "CreditMemoLine"
domain: object-reference
topic: creditmemoline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.570Z
estimatedTokens: 2237
keywords: [CreditMemoLine, product, service, adjustment, tax, line, items, were, included, credit, memo, API, version, 48.0, later]
---

# CreditMemoLine

> Represents product, service, adjustment, or tax line items that were included
      in a credit memo. This object is available in API version 48.0 and later.

# CreditMemoLine

Represents product, service, adjustment, or tax line items that were included in a credit memo. This object is available in API version 48.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Special Access Rules

This object is available with Order Management, Subscription Management, and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_creditmemoline.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| AdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionAmount of this credit memo line item if its type is Adjustment. |
| AdjustmentAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of the adjustment amount and the adjustment tax amount.This field is available in API version 49.0 and later. This field is available when Subscription Management is enabled. |
| AdjustmentTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the tax related to the adjustment amount.This field is available in API version 55.0 and later. This field is available when Subscription Management is enabled. |
| BillingAddressId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the billing address related to this credit memo line.This field is a relationship field. This field is available in API version 55.0 and later. This field is available when Subscription Management is enabled.Relationship NameBillingAddressRelationship TypeLookupRefers ToCreditMemoAddressGroup |
| ChargeAmount | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionAmount of this credit memo line item if its type is Charge. |
| ChargeAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of the adjustment amount and the adjustment tax amount.This field is available in API version 55.0 and later. This field is available when Subscription Management is enabled. |
| ChargeTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the tax related to the charge amount.This field is available in API version 55.0 and later. This field is available when Subscription Management is enabled. |
| CreditMemoId | TypereferencePropertiesFilter, Group, SortDescriptionID of the parent credit memo.This field is a relationship field.Relationship NameCreditMemoRelationship TypeLookupRefers ToCreditMemo |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThree-letter ISO 4217 currency code associated with the credit memo line.The default value is USD. |
| Description | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionDescription of the credit memo line. |
| EndDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionFor credit memos made from a time-based service, the end date of the line item being credited. |
| LineAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAmount of the credit memo line.This field is a calculated field. This field is available in API version 49.0 and later. |
| Name | TypestringPropertiesFilter, Group, idLookup, Sort, UpdateDescriptionName of the credit memo line. |
| Product2Id | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe product or service being credited in the credit memo line.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ReferenceEntityItemId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe order product or invoice line corresponding to this credit memo line.This field is a polymorphic relationship field. This field is available in API version 53.0 and later.Relationship NameReferenceEntityItemRelationship TypeLookupRefers ToOrderItemSummary, OrderProduct, InvoiceLine |
| ReferenceEntityItemType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of transaction that generated the credit memo line.Possible values are:DeliveryChargeOrderProduct |
| ReferenceEntityItemTypeCode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of object that generated the credit memo line.Possible values are:ChargeProduct |
| RelatedLineId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe credit memo line related to this line item.This field is a relationship field.Relationship NameRelatedLineRelationship TypeLookupRefers ToCreditMemoLine |
| ShippingAddressId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the shipping address.This field is a relationship field. This field is available in API version 55.0 and later. This field is available when Subscription Management is enabled.Relationship NameShippingAddressRelationship TypeLookupRefers ToCreditMemoAddressGroup |
| StartDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionFor credit memo lines generated from a time-based service, the first date of the billing for the service. |
| Status | TypestringPropertiesFilter, Group, Nillable, SortDescriptionState of the credit memo line. Inherited from the credit memo. |
| TaxAmount | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionTotal tax for the credit memo. |
| TaxCode | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe code used to calculate the tax rate for the invoice line. |
| TaxDocumentNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe document number that tracks taxes calculated for this credit memo line.This field is available in API version 55.0 and later. This field is available when Subscription Management is enabled. |
| TaxEffectiveDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe date used to calculate the credit memo line’s TaxAmount. |
| TaxName | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionUser-defined name for applied tax. |
| TaxRate | TypepercentPropertiesFilter, Nillable, Sort, UpdateDescriptionPercentage value used for calculating tax. |
| TotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of the credit memo line before any applicable tax. |
| TotalAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of tax for this credit memo line, with tax included. Sum of TotalAmount and TaxAmount. |
| TaxStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionTracks whether the taxes were calculated for this credit memo line.Possible values are:CompleteErrorNoneThe default value is None. This field is available in API version 55.0 and later. This field is available when Subscription Management is enabled. |
| TaxTransactionNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionTracks the transaction number of the tax calculated for this credit memo line. This field is available in API version 55.0 and later. This field is available when Subscription Management is enabled. |
| TaxTreatmentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the tax treatment for the credit memo line.This field is a relationship field. This field is available in API version 55.0 and later. This field is available when Subscription Management is enabled.Relationship NameTaxTreatmentRelationship TypeLookupRefers ToTaxTreatment |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of transaction for the invoice line.Possible values are:AdjustmentChargeTax |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CreditMemoLineFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CreditMemoLineHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CreditMemoLineFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- CreditMemoLineHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
