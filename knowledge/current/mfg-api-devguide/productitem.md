---
title: "ProductItem"
domain: mfg-api-devguide
topic: productitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.972Z
estimatedTokens: 787
keywords: [ProductItem, stock, product, particular, inventory, location, warehouse, distribution, lot, item, records, represent, associated, stores, quantity]
---

# ProductItem

> Represents the stock of a product at a particular inventory location, such as
         a warehouse or a distribution lot. Product item records represent your inventory. A product
         item is associated with an inventory location and stores the quantity of products at that
         location. This object is available in API version 60.0 and later.

# ProductItem

Represents the stock of a product at a particular inventory location, such as a warehouse or a distribution lot. Product item records represent your inventory. A product item is associated with an inventory location and stores the quantity of products at that location. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IsProduct2Serialized | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies if the product associated with the product item is a serialized product (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe location that’s associated with the product item. This usually indicates where the product item is stored.This field is a relationship field.Relationship NameLocationRelationship TypeLookupRefers ToLocation |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the product item.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe product that’s associated with the product item. This usually represents the type of product in your inventory.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductItemNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated number identifying the product item. |
| ProductName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the product item. We recommend you use a name that indicates the name of the product along with its location. |
| QuantityOnHand | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe quantity at the location. If you want to add a serial number, this value must be 1. |
| QuantityUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of the quantity of the product that’s consumed. For example, kilograms or liters. Quantity Unit of Measure values are inherited from the Quantity Unit of Measure field on products.Possible values are:Each |
| SerialNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique number for identification purposes. If you want to enter a serial number, the Quantity on Hand must be 1. |
