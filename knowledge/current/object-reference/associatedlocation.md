---
title: "AssociatedLocation"
domain: object-reference
topic: associatedlocation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.099Z
estimatedTokens: 759
keywords: [AssociatedLocation, link, account, location, Service, associate, multiple, accounts, shopping, center, may, customer, Calls, Special, Access]
---

# AssociatedLocation

> Represents a link between an account and a location in Field Service.
			You can associate multiple accounts with one location. For example, a shopping center
			location may have multiple customer accounts.

# AssociatedLocation

Represents a link between an account and a location in Field Service. You can associate multiple accounts with one location. For example, a shopping center location may have multiple customer accounts.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| ActiveFrom | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time the associated location is active. |
| ActiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time the associated location stops being active. |
| AssociatedLocationNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-generated number identifying the associated location. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the associated location was last modified. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the associated location was last viewed. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe location associated with the address.This is a relationship field.Relationship NameLocationRelationship TypeLookupRefers ToLocation |
| ParentRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe account associated with the location.This is a relationship field.Relationship NameParentRecordRelationship TypeLookupRefers ToAccount |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPicklist of address types. The values are:Bill ToShip To |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[AssociatedLocationChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[AssociatedLocationHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AssociatedLocationChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- AssociatedLocationHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
