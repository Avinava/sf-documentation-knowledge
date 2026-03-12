---
title: "ProductionBatch"
domain: life-sciences-dev-guide
topic: productionbatch
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.793Z
estimatedTokens: 826
keywords: [ProductionBatch, batch, homogeneous, products, manufactured, production, line, API, version, 65.0, later, Calls]
---

# ProductionBatch

> Represents the batch of homogeneous products manufactured in the same
         production line. This object is available in API version 65.0 and later.

# ProductionBatch

Represents the batch of homogeneous products manufactured in the same production line. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BatchCreatedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the production batch is created. |
| CreationLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the location where the batch is created.This field is a relationship field.Relationship NameCreationLocationRefers ToLocation |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the production batch. |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the batch expires and is no longer usable. |
| InitialQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe initial quantity of products in the production batch. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the production batch is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| ManufacturingDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe manufactured date and time for the production batch. |
| ManufacturingLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the manufacturing location of the production batch.This field is a relationship field.Relationship NameManufacturingLocationRefers ToLocation |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the production batch. |
| OriginType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of origin of the batch. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner or creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product associated with the production batch.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| QuantityUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the unit of measure for the products of the production batch. |
| UniqueIdentificationNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identification number of the production batch. This field is unique within your organization. |
