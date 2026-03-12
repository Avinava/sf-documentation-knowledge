---
title: "ProductItem"
domain: object-reference
topic: productitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.362Z
estimatedTokens: 1277
keywords: [ProductItem, stock, particular, product, location, service, bolts, stored, main, warehouse, Calls, Special, Access, Rules, Usage]
---

# ProductItem

> Represents the stock of a particular product at a particular location
			in field service, such as all bolts stored in your main warehouse.

# ProductItem

Represents the stock of a particular product at a particular location in field service, such as all bolts stored in your main warehouse.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product item was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product item was last viewed. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionLocation associated with the product item. This usually indicates where the product item is stored.This is a relationship field.Relationship NameLocationRelationship TypeLookupRefers ToLocation |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe product item’s owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, SortDescriptionProduct associated with the product item, which represents the type of product in your inventory.This is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductItemNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescription(Read Only) Auto-generated number identifying the product item. |
| ProductName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA name for the product item. Try to select a name that indicates what is being stored where; for example, Batteries in Warehouse A. |
| QuantityOnHand | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe quantity at the location. If you want to add a serial number, this value must be 1. |
| QuantityUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnits of the product item; for example, kilograms or liters. Quantity Unit of Measure picklist values are inherited from the Quantity Unit of Measure field on products. |
| SerialNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique number for identification purposes. If you want to enter a serial number, the Quantity on Hand must be 1. |

## Usage

Each product item is associated with a product and a location in Salesforce. If a product is stored at multiple locations, the product will be tracked in a different product item for each location.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductItemChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

[ProductItemFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProductItemHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProductItemOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ProductItemShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProductItemChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ProductItemFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ProductItemHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ProductItemOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ProductItemShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
