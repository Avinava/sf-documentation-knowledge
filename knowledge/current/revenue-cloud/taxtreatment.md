---
title: "TaxTreatment"
domain: revenue-cloud
topic: taxtreatment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:11.613Z
estimatedTokens: 969
keywords: [TaxTreatment, Represents, information, tax, calculation, external, engines., product, requires, policy, determine, whether, apply, tax., least, treatment., treatments, how, taxable, products]
---

# TaxTreatment

> Represents information about tax calculation by external
         engines. Each product requires a tax policy to determine whether to apply tax. Each tax
         policy requires at least one tax treatment. The tax treatments determine how taxable
         products are taxed. This object is available in API version 62.0 and
      later.

# TaxTreatment

Represents information about tax calculation by external engines. Each product requires a tax policy to determine whether to apply tax. Each tax policy requires at least one tax treatment. The tax treatments determine how taxable products are taxed. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

You need the Tax Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional details about the tax treatment. |
| IsTaxable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether to calculate tax for the order items covered by the tax treatment (true) or not (false). When this value is true, the CalculateTax API is called for the order item during the order item's creation.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a tax treatment record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a tax treatment record. If this value is null, it’s possible that the user only accessed the tax treatment record or a related list view (LastReferencedDate), but not viewed the tax treatment record itself. |
| LegalEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the legal entity record that's related to the tax treatment.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the tax treatment. |
| ProductCode | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe code of the product that the tax treatment applies to. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product that the tax treatment applies to.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| ShouldUseTaxTreatmentItems | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the tax codes and product codes of the related tax treatment items must be used when requesting tax calculations (true) or not (false).The default value is false. The tax code and product code of the tax treatment are ignored by default. Available in API version 66.0 and later. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the tax treatment record.Valid values are:ActiveDraftInactive |
| TaxCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference code that's used when an external tax engine calculates tax. |
| TaxEngineId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the tax engine record that's related to the tax treatment. When tax is calculated for an order item, the tax engine that's related to order item’s tax treatment is used. If the tax treatment’s IsTaxable field value is True, the treatment requires a tax engine.This field is a relationship field.Relationship NameTaxEngineRefers ToTaxEngine |
| TaxPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the tax treatment’s parent tax policy.This field is a relationship field.Relationship NameTaxPolicyRefers ToTaxPolicy |
