---
title: "ProductRelatedMaterial"
domain: mfg-api-devguide
topic: productrelatedmaterial
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.994Z
estimatedTokens: 1037
keywords: [ProductRelatedMaterial, components, product, API, version, 55.0, later, Calls]
---

# ProductRelatedMaterial

> Represents information about the components of a product. This object is
      available in API version 55.0 and later.

# ProductRelatedMaterial

Represents information about the components of a product. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the product component record. |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the product component is effective. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which the product component is effective. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LeadTime | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe lead time required to manufacture the product component. |
| LeadTimeUomId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the lead time.This is a relationship field.Relationship NameLeadTimeUomRelationship TypeLookupRefers ToUnitOfMeasure |
| ManufacturingProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe manufacturing program associated with the Product Related Material.This is a relationship field.Relationship NameManufacturingProgramRelationship TypeLookupRefers ToManufacturingProgram |
| MinimumEligibleQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum quantity of the product component that’s required to accept the deal. |
| MinimumEligibleQuantityUomId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the minimum eligible quantity of the product component.This is a relationship field.Relationship NameMinimumEligibleQuantityUomRelationship TypeLookupRefers ToUnitOfMeasure |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the product component record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductComponentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier for the product component.This is a relationship field.Relationship NameProductComponentRelationship TypeLookupRefers ToProduct2 |
| ProductCpntPricebookId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe pricebook entry associated with the Product Related Material.This is a relationship field.Relationship NameProductCpntPricebookRelationship TypeLookupRefers ToPricebook2 |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the component.This is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| QuantityPerProductUnit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of units of the component required per unit of the product. |
| QuantityUomId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the component quantity.This is a relationship field.Relationship NameQuantityUomRelationship TypeLookupRefers ToUnitOfMeasure |
| UsageCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the category of usage for the product component. |
