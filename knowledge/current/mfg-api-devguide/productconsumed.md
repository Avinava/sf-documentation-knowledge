---
title: "ProductConsumed"
domain: mfg-api-devguide
topic: productconsumed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.909Z
estimatedTokens: 1042
keywords: [ProductConsumed, item, product, inventory, work, order, line, API, version, 60.0, later, Calls]
---

# ProductConsumed

> Represents an item from your product inventory that was used to complete a
         work order or work order line item. This object is available in API version 60.0 and
      later.

# ProductConsumed

Represents an item from your product inventory that was used to complete a work order or work order line item. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the product consumed record. |
| Discount | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe discount on the product consumed. |
| IsConsumed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies that a product consumed has been consumed if the product it refers to is serialized. The default is false. |
| IsProduct2Serialized | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies if the associated product that was consumed is a serialized product (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| ListPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe list price of the product. |
| PricebookEntryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe price book associated with the product consumed. If the work order and the product item’s associated product are related to the same price book, the Price Book Entry auto-populates based on the product item.This field is a relationship field.Relationship NamePricebookEntryRelationship TypeLookupRefers ToPricebookEntry |
| Product2Id | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe product associated with the product consumed.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductConsumedNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number identifying the product consumed. |
| ProductItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe product item associated with the product consumed.This field is a relationship field.Relationship NameProductItemRelationship TypeLookupRefers ToProductItem |
| ProductName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the product that’s consumed. |
| QuantityConsumed | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe quantity of product that’s consumed. When you create a product consumed record, the quantity consumed is subtracted from the product item’s quantity. |
| QuantityUnitOfMeasure | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe unit of the quantity of the product that’s consumed. For example, kilograms or liters. Quantity Unit of Measure values are inherited from the Quantity Unit of Measure field on products.Possible values are:Each |
| TotalPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total price paid for the product items. |
| UnitPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price per unit of the product consumed. |
| WorkOrderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe work order for which the product was consumed.This field is a relationship field.Relationship NameWorkOrderRelationship TypeLookupRefers ToWorkOrder |
| WorkOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work order line item for which the product was consumed.This field is a relationship field.Relationship NameWorkOrderLineItemRelationship TypeLookupRefers ToWorkOrderLineIte |
