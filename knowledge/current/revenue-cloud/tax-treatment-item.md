---
title: "Tax Treatment Item"
domain: revenue-cloud
topic: tax-treatment-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:11.622Z
estimatedTokens: 631
keywords: [Tax, Treatment, Item, Represents, tax, code, information, that’s, used, calculate, product, specific, engine., API, version, 66.0, later., Important, Supported, Calls]
---

# Tax Treatment Item

> Represents tax code information that’s used to calculate tax for a
         product by a specific tax engine. This object is available in API version 66.0 and
      later.

# Tax Treatment Item

Represents tax code information that’s used to calculate tax for a product by a specific tax engine. This object is available in API version 66.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

You need the Billing Admin permission set or Tax Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional details about the tax treatment item. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a tax treatment item record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a tax treatment item record. If this value is null, it’s possible that the user only accessed the tax treatment item record or a related list view (LastReferencedDate), but not viewed the tax treatment item record itself. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the tax treatment item. |
| ProductCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code of the product that the tax treatment item applies to. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the product that the tax treatment item applies to.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| TaxCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference code that's used when an external tax engine calculates tax. |
| TaxTreatmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The parent tax treatment associated with the tax treatment item record.This field is a relationship field.Relationship NameTaxTreatmentRelationship TypeMaster-detailRefers ToTaxTreatment (the master object) |
