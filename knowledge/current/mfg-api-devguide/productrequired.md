---
title: "ProductRequired"
domain: mfg-api-devguide
topic: productrequired
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.028Z
estimatedTokens: 551
keywords: [ProductRequired, product, needed, work, order, line, item, API, version, 60.0, later, Calls]
---

# ProductRequired

> Represents a product that is needed to complete a work order or work order
         line item. This object is available in API version 60.0 and later.

# ProductRequired

Represents a product that is needed to complete a work order or work order line item. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| ParentRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe work order or work order line item for which the product is required.This field is a polymorphic relationship field.Relationship NameParentRecordRelationship TypeLookupRefers ToVisit, WorkOrder, WorkOrderLineItem |
| ParentRecordType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies whether the parent record is a work order or a work order line item. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe required product.This is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the product required. |
| ProductRequiredNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated number identifying the product required. |
| QuantityRequired | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionQuantity required of the product. |
| QuantityUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnits of the required product. For example, kilograms or liters. Quantity Unit of Measure values are inherited from the Quantity Unit of Measure field on products.Possible values are:Each |
