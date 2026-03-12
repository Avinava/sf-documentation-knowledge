---
title: "ProductRequired"
domain: field-service
topic: productrequired
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:54.552Z
estimatedTokens: 780
keywords: [ProductRequired, product, needed, work, order, line, item, service, Calls, Special, Access, Rules, Usage, Associated, Objects]
---

# ProductRequired

> Represents a product that is needed to complete a work order or work
			order line item in field service.

# ProductRequired

Represents a product that is needed to complete a work order or work order line item in field service.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product required was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product required was last viewed. |
| ParentRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe work order or work order line item that the product is required for.This is a polymorphic relationship field.Relationship NameParentRecordRelationship TypeLookupRefers ToVisit, WorkOrder, WorkOrderLineItem, WorkType |
| ParentRecordType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIndicates whether the parent record is a work order or a work order line item. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe required product.This is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the product required. |
| ProductRequiredNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescription(Read only) Auto-generated number identifying the product required. |
| QuantityRequired | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionQuantity required of the product. |
| QuantityUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnits of the required product; for example, kilograms or liters. Quantity Unit of Measure picklist values are inherited from the Quantity Unit of Measure field on products. |

## Usage

Required products can be added to work types, work orders, and work order line items to ensure that the assigned service resource arrives with the right equipment.

Adding required products to work types saves you time and keeps your business processes consistent. Work orders and work order line items inherit their work type’s required products. For example, if all light bulb replacement jobs require a ladder and a light bulb, add the ladder and light bulb as required products to your Light Bulb Replacement work type. When it’s time to create a work order for a customer’s light bulb replacement, applying that work type to the work order adds the required products.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

ProductRequiredChangeEvent

Change events are available for the object.

ProductRequiredFeed

Feed tracking is available for the object.

ProductRequiredHistory

History is available for tracked fields of the object.
