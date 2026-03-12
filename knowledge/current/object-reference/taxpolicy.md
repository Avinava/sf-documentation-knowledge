---
title: "TaxPolicy"
domain: object-reference
topic: taxpolicy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:17.788Z
estimatedTokens: 894
keywords: [TaxPolicy, tax, policy, group, treatments, treatment, determine, how, particular, product, taxed, transaction, line, item, policies]
---

# TaxPolicy

> A tax policy contains a group of tax treatments, where each treatment
         represents parameters to determine how a particular product is taxed for a transaction line
         item. Tax policies are related to products, which pass the policy on to the resulting order
         items. When you activate an order, Subscription Management assigns a tax treatment to each
         order item based on the tax policy's DefaultTaxTreatmentId, then uses the tax treatment to
         calculate tax. This object is available in API version 55.0 and later.

# TaxPolicy

A tax policy contains a group of tax treatments, where each treatment represents parameters to determine how a particular product is taxed for a transaction line item. Tax policies are related to products, which pass the policy on to the resulting order items. When you activate an order, Subscription Management assigns a tax treatment to each order item based on the tax policy's DefaultTaxTreatmentId, then uses the tax treatment to calculate tax. This object is available in API version 55.0 and later.

Each tax policy requires at least one tax treatment. We recommend determining the taxation needs for each of your products and creating policies and treatments for each product accordingly. You can then assign your tax policies to the relevant products on your own or through automation.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_taxpolicy.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| DefaultTaxTreatmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhen you order a product, the order product receives this tax treatment.This field is a relationship field.Relationship NameDefaultTaxTreatmentRelationship TypeLookupRefers ToTaxTreatment |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionOptional user-defined description for providing more information about the tax policy. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionOptional user-defined name for the tax policy. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionTo calculate tax for order products, products must have an active tax policy. Tax policies are created with a Draft status before being assigned to a product or order product. After activating a tax policy, you can't edit certain policy fields.Possible values are:ActiveDraftInactive |
| TreatmentSelection | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDefines how Subscription Management chooses a tax treatment to assign to order products related to this tax policy. In API version 55.0, only Default is supported.Possible values are:Default—The order product receives the tax treatment defined in the tax policy's DefaultTreatmentId field.LegalEntity—Assigns a tax treatment based on matching legal entities between the order product and tax treatment.Manual—Order products don't receive tax treatments based on the tax policy; users must provide the treatment on their own instead. |
