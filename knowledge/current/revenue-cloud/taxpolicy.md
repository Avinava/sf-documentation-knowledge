---
title: "TaxPolicy"
domain: revenue-cloud
topic: taxpolicy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:11.604Z
estimatedTokens: 708
keywords: [TaxPolicy, Represents, information, group, tax, treatments, where, treatment, represents, determine, how, particular, product, taxed, transaction, line, item., Tax, policies, related]
---

# TaxPolicy

> Represents information about a group of tax treatments, where each
         treatment represents parameters to determine how a particular product is taxed for a
         transaction line item. Tax policies are related to products, which pass the policy on to
         the resulting order items and in turn the billing schedules. This object is available
      in API version 62.0 and later.

# TaxPolicy

Represents information about a group of tax treatments, where each treatment represents parameters to determine how a particular product is taxed for a transaction line item. Tax policies are related to products, which pass the policy on to the resulting order items and in turn the billing schedules. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

You need the Tax Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| DefaultTaxTreatmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the default tax treatment record. When you order a product, the order product, and in turn the billing schedule receives this tax treatment.This field is a relationship field.Relationship NameDefaultTaxTreatmentRefers ToTaxTreatment |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional details about the tax policy. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed an invoice batch draft to posted run record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a tax policy record. If this value is null, it’s possible that the user only accessed the tax policy record or a related list view (LastReferencedDate), but not viewed the tax policy record itself. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the tax policy. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the tax policy. To calculate tax for order products, products must have an active tax policy. Tax policies are created with a Draft status before being assigned to a product or order product. After activating a tax policy, you can't edit certain policy fields.Valid values are:ActiveDraftInactive |
| TreatmentSelection | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the selection of tax treatments to billing schedules that are related to the tax policy.Valid values are:Default —Billing schedules receive the tax treatment defined in the tax policy's DefaultTreatmentId field.LegalEntity—Billing schedules receive the tax treatment based on matching legal entities between itself and the tax treatment.Manual—Billing schedules don't receive tax treatments based on the tax policy. You must specify the treatment. |
